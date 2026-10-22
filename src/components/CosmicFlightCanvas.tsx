"use client";

import React, { useEffect, useRef } from "react";
import { getLiveAudioMetrics, updateSpatialCoordinates } from "@/lib/spatialAudio";

interface CosmicFlightCanvasProps {
  isPlaying: boolean;
  onCameraChange?: (yaw: number, pitch: number) => void;
}

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
  size: number;
  color: string;
}

export default function CosmicFlightCanvas({ isPlaying, onCameraChange }: CosmicFlightCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const yawRef = useRef<number>(0);
  const pitchRef = useRef<number>(0.15); // slightly angled down towards Earth horizon
  const isDraggingRef = useRef<boolean>(false);
  const lastMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Initialize 3D Stars
    const STAR_COUNT = 900;
    const stars: Star[] = [];
    const colors = ["#ffffff", "#e0e7ff", "#c7d2fe", "#a5b4fc", "#fbcfe8", "#bae6fd"];

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: (Math.random() - 0.5) * 2000,
        y: (Math.random() - 0.5) * 2000,
        z: Math.random() * 2000 + 1,
        pz: 2000,
        size: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Render Loop (60 FPS)
    const render = () => {
      // 1. Get real-time audio FFT metrics
      const audioMetrics = getLiveAudioMetrics();
      const bassBoost = audioMetrics.bass;
      const midBoost = audioMetrics.mid;

      // Base warp speed accelerated dynamically by audio bass hits
      const baseSpeed = isPlaying ? 5 + bassBoost * 22 : 1.5;

      // Smooth auto-orbit camera drifting when not manually dragging
      if (!isDraggingRef.current) {
        yawRef.current += 0.0006;
      }

      // Sync 3D soundfield orientation to camera
      updateSpatialCoordinates(yawRef.current, pitchRef.current);
      if (onCameraChange) {
        onCameraChange(yawRef.current, pitchRef.current);
      }

      // 2. Clear canvas with deep obsidian space
      ctx.fillStyle = "#020204";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const fov = 450;

      const cosY = Math.cos(yawRef.current);
      const sinY = Math.sin(yawRef.current);
      const cosP = Math.cos(pitchRef.current);
      const sinP = Math.sin(pitchRef.current);

      // 3. Render 3D Stars with audio-reactive hyperdrive streaks
      ctx.lineWidth = 1.2;
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.pz = star.z;
        star.z -= baseSpeed;

        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * 2200;
          star.y = (Math.random() - 0.5) * 2200;
          star.z = 2000;
          star.pz = 2000;
        }

        // Apply 3D Camera Yaw & Pitch rotation
        const x1 = star.x * cosY - star.z * sinY;
        const z1 = star.x * sinY + star.z * cosY;
        const y1 = star.y * cosP - z1 * sinP;
        const z2 = star.y * sinP + z1 * cosP;

        if (z2 > 10) {
          const k = fov / z2;
          const sx = cx + x1 * k;
          const sy = cy + y1 * k;

          // Previous position for hyperdrive light streak
          const prevK = fov / (z2 + baseSpeed * 1.6);
          const px = cx + x1 * prevK;
          const py = cy + y1 * prevK;

          if (sx >= -50 && sx <= width + 50 && sy >= -50 && sy <= height + 50) {
            const alpha = Math.min(1, Math.max(0.1, (2000 - z2) / 1200));
            ctx.strokeStyle = star.color;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(sx, sy);
            ctx.stroke();

            // Star Core Glow
            if (bassBoost > 0.4) {
              ctx.fillStyle = "#ffffff";
              ctx.fillRect(sx - 0.5, sy - 0.5, star.size * 1.5, star.size * 1.5);
            }
          }
        }
      }
      ctx.globalAlpha = 1;

      // 4. Render Earth Horizon & Atmospheric Rayleigh Glow
      // Horizon position shifts dynamically as camera pitch changes
      const earthCenterY = height * 1.25 + pitchRef.current * 400;
      const earthRadius = Math.max(width * 0.85, 900);

      // Atmospheric Limb Glow (Layer 1: Deep blue to cyan halo)
      const atmoGlow = ctx.createRadialGradient(
        cx,
        earthCenterY,
        earthRadius - 30,
        cx,
        earthCenterY,
        earthRadius + 140 + bassBoost * 40
      );
      atmoGlow.addColorStop(0, "rgba(56, 189, 248, 0.45)");
      atmoGlow.addColorStop(0.2, "rgba(14, 165, 233, 0.25)");
      atmoGlow.addColorStop(0.5, "rgba(2, 132, 199, 0.12)");
      atmoGlow.addColorStop(0.8, "rgba(3, 105, 161, 0.04)");
      atmoGlow.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = atmoGlow;
      ctx.beginPath();
      ctx.arc(cx, earthCenterY, earthRadius + 140 + bassBoost * 40, 0, Math.PI * 2);
      ctx.fill();

      // Earth Dark Planetary Body with subtle continents & city lights
      const earthBody = ctx.createRadialGradient(
        cx - 200,
        earthCenterY - 300,
        100,
        cx,
        earthCenterY,
        earthRadius
      );
      earthBody.addColorStop(0, "#080c14");
      earthBody.addColorStop(0.6, "#04060a");
      earthBody.addColorStop(1, "#010204");

      ctx.fillStyle = earthBody;
      ctx.beginPath();
      ctx.arc(cx, earthCenterY, earthRadius, 0, Math.PI * 2);
      ctx.fill();

      // Thin bright ozone horizon line
      ctx.strokeStyle = `rgba(224, 242, 254, ${0.4 + bassBoost * 0.4})`;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.arc(cx, earthCenterY, earthRadius, Math.PI * 1.15, Math.PI * 1.85);
      ctx.stroke();

      // 5. Render 3D Audio-Reactive Sonic Orbit Rings
      const ringCount = 3;
      for (let r = 0; r < ringCount; r++) {
        const ringRadius = 160 + r * 110 + midBoost * 50;
        const ringAlpha = (0.25 - r * 0.06) + bassBoost * 0.2;

        ctx.strokeStyle = `rgba(255, 255, 255, ${Math.max(0.04, ringAlpha)})`;
        ctx.lineWidth = r === 0 ? 1.5 : 1;

        ctx.save();
        ctx.translate(cx, cy + 40);
        ctx.scale(1, 0.35); // tilt into 3D plane
        ctx.beginPath();
        ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isPlaying, onCameraChange]);

  // Mouse & Touch Drag 360° Look-Around Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };

    yawRef.current -= dx * 0.004;
    // Clamp pitch between looking straight up to looking down at Earth
    pitchRef.current = Math.max(-0.6, Math.min(0.6, pitchRef.current + dy * 0.003));
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - lastMousePosRef.current.x;
    const dy = e.touches[0].clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

    yawRef.current -= dx * 0.005;
    pitchRef.current = Math.max(-0.6, Math.min(0.6, pitchRef.current + dy * 0.004));
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing select-none"
    />
  );
}
