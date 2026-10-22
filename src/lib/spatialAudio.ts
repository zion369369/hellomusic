"use client";

/**
 * HELLO MUSIC — SPATIAL AUDIO & 360° ACOUSTIC FIELD ENGINE
 * Apple-grade HRTF (Head-Related Transfer Function) spatial audio simulation
 */

let audioContext: AudioContext | null = null;
let sourceNode: MediaElementAudioSourceNode | null = null;
let pannerNode: PannerNode | null = null;
let analyserNode: AnalyserNode | null = null;
let gainNode: GainNode | null = null;
let currentAudioElement: HTMLAudioElement | null = null;
let frequencyDataArray: Uint8Array | null = null;
let spatialMode: "hrtf" | "binaural" | "stereo" = "hrtf";

export function getAudioContext(): AudioContext | null {
  return audioContext;
}

export function initSpatialAudio(audioElement: HTMLAudioElement): boolean {
  if (typeof window === "undefined") return false;

  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return false;

    if (!audioContext) {
      audioContext = new AudioContextClass();
    }

    if (audioContext.state === "suspended") {
      audioContext.resume().catch(() => {});
    }

    if (currentAudioElement !== audioElement) {
      currentAudioElement = audioElement;

      // Ensure CORS for audio element if remote
      if (audioElement.src.startsWith("http")) {
        audioElement.crossOrigin = "anonymous";
      }

      // Connect media element only once
      if (!sourceNode) {
        sourceNode = audioContext.createMediaElementSource(audioElement);
      }

      // Analyser for real-time live flight visualization
      if (!analyserNode) {
        analyserNode = audioContext.createAnalyser();
        analyserNode.fftSize = 256;
        analyserNode.smoothingTimeConstant = 0.85;
        frequencyDataArray = new Uint8Array(analyserNode.frequencyBinCount);
      }

      // HRTF 3D Panner
      if (!pannerNode) {
        pannerNode = audioContext.createPanner();
        pannerNode.panningModel = "HRTF";
        pannerNode.distanceModel = "inverse";
        pannerNode.refDistance = 1;
        pannerNode.maxDistance = 10000;
        pannerNode.rolloffFactor = 1;
        pannerNode.coneInnerAngle = 360;
      }

      if (!gainNode) {
        gainNode = audioContext.createGain();
        gainNode.gain.value = 1.0;
      }

      // Disconnect and reconnect clean graph:
      // source -> panner -> analyser -> gain -> destination
      try {
        sourceNode.disconnect();
      } catch {}

      sourceNode.connect(pannerNode);
      pannerNode.connect(analyserNode);
      analyserNode.connect(gainNode);
      gainNode.connect(audioContext.destination);

      // Default positioning: sound source is slightly in front of listener in space
      updateSpatialCoordinates(0, 0, 2);
    }

    return true;
  } catch (err) {
    console.warn("Spatial audio init fallback:", err);
    return false;
  }
}

/**
 * Update 3D coordinates based on 360° camera yaw (horizontal angle) and pitch (vertical angle)
 */
export function updateSpatialCoordinates(yawRad: number, pitchRad: number, distance: number = 2.5) {
  if (!pannerNode || !audioContext) return;

  // Calculate 3D spherical position of sound source relative to user's head
  // When listener turns left (yaw decreases), source shifts to the right, and vice versa
  const x = Math.sin(-yawRad) * Math.cos(pitchRad) * distance;
  const y = Math.sin(pitchRad) * distance;
  const z = -Math.cos(-yawRad) * Math.cos(pitchRad) * distance;

  const now = audioContext.currentTime;
  pannerNode.positionX.setTargetAtTime(x, now, 0.05);
  pannerNode.positionY.setTargetAtTime(y, now, 0.05);
  pannerNode.positionZ.setTargetAtTime(z, now, 0.05);
}

/**
 * Switch spatial modes: HRTF 360° vs Binaural Wide vs Direct Stereo
 */
export function setSpatialMode(mode: "hrtf" | "binaural" | "stereo") {
  spatialMode = mode;
  if (!pannerNode) return;

  if (mode === "hrtf") {
    pannerNode.panningModel = "HRTF";
    updateSpatialCoordinates(0, 0, 2.5);
  } else if (mode === "binaural") {
    pannerNode.panningModel = "HRTF";
    updateSpatialCoordinates(0.4, 0, 1.8);
  } else {
    // Stereo / equalpower
    pannerNode.panningModel = "equalpower";
    pannerNode.positionX.value = 0;
    pannerNode.positionY.value = 0;
    pannerNode.positionZ.value = 0;
  }
}

export function getSpatialMode() {
  return spatialMode;
}

/**
 * Real-time audio frequency data for 60 FPS live flight canvas
 */
export function getLiveAudioMetrics(): {
  bass: number;
  mid: number;
  high: number;
  overall: number;
  raw: Uint8Array;
} {
  const empty = new Uint8Array(128);
  if (!analyserNode || !frequencyDataArray) {
    return { bass: 0, mid: 0, high: 0, overall: 0, raw: empty };
  }

  analyserNode.getByteFrequencyData(
    frequencyDataArray as unknown as Parameters<AnalyserNode["getByteFrequencyData"]>[0]
  );

  // Frequency bins breakdown (at 44.1/48kHz, bin width ~187Hz):
  // Bins 0-3: Sub-bass & Bass (~0-500Hz)
  // Bins 4-15: Mid-range (~500-2800Hz)
  // Bins 16-64: Highs & Treble (~2800-12000Hz)
  let bassSum = 0;
  const bassCount = 4;
  for (let i = 0; i < bassCount; i++) bassSum += frequencyDataArray[i];

  let midSum = 0;
  const midCount = 16;
  for (let i = 4; i < 4 + midCount; i++) midSum += frequencyDataArray[i];

  let highSum = 0;
  const highCount = 40;
  for (let i = 20; i < 20 + highCount; i++) highSum += frequencyDataArray[i];

  const bass = bassSum / (bassCount * 255);
  const mid = midSum / (midCount * 255);
  const high = highSum / (highCount * 255);
  const overall = (bass * 0.5 + mid * 0.3 + high * 0.2);

  return {
    bass,
    mid,
    high,
    overall,
    raw: frequencyDataArray,
  };
}
