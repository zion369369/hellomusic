/**
 * Cleans and converts LaTeX math notation into clean Unicode typography
 * for optimal readability and accessibility.
 */
export function formatMathText(text: string): string {
  if (!text) return "";

  let res = text;

  // Common dental / medical formulas
  res = res.replace(/\$V_3\$/g, "V₃ (Mandibularis)");
  res = res.replace(/\$V_2\$/g, "V₂ (Maxillaris)");
  res = res.replace(/\$V_1\$/g, "V₁ (Ophthalmicus)");
  res = res.replace(/\$Ca\^\{2\+\}\$/g, "Ca²⁺");
  res = res.replace(/\$PO_4\^\{3-\}\$/g, "PO₄³⁻");
  res = res.replace(/\$Na\^\+\$/g, "Na⁺");
  res = res.replace(/\$K\^\+\$/g, "K⁺");
  res = res.replace(/\$Cl\^-\$/g, "Cl⁻");
  res = res.replace(/\$HCO_3\^-\$/g, "HCO₃⁻");
  res = res.replace(/\$Fe\^\{2\+\}\$/g, "Fe²⁺");
  res = res.replace(/\$Cu\^\{2\+\}\$/g, "Cu²⁺");
  res = res.replace(/\$Mg\^\{2\+\}\$/g, "Mg²⁺");
  res = res.replace(/\$Zn\^\{2\+\}\$/g, "Zn²⁺");
  res = res.replace(/\$H_2O\$/g, "H₂O");
  res = res.replace(/\$H_2O_2\$/g, "H₂O₂");
  res = res.replace(/\$H_2S\$/g, "H₂S");
  res = res.replace(/\$CO\$/g, "CO");
  res = res.replace(/\$CN\^-\$/g, "CN⁻");
  res = res.replace(/\$NaOCl\$/g, "NaOCl");
  res = res.replace(/\$CaF_2\$/g, "CaF₂");
  res = res.replace(/\$HCl\$/g, "HCl");
  res = res.replace(/\$pCO_2\$/g, "pCO₂");
  res = res.replace(/\$O_2\$/g, "O₂");
  res = res.replace(/\$H\^\+\$/g, "H⁺");
  res = res.replace(/\$OH\^-\$/g, "OH⁻");
  res = res.replace(/\$OH\^\\bullet\$/g, "OH•");
  res = res.replace(/\$A\\delta\$/g, "Aδ");
  res = res.replace(/\\alpha/g, "α");
  res = res.replace(/\\beta/g, "β");
  res = res.replace(/\\gamma/g, "γ");
  res = res.replace(/\$K_m\$/g, "K_m");
  res = res.replace(/\$V_\{max\}\$/g, "V_max");
  res = res.replace(/\$2\/3\$/g, "2/3");
  res = res.replace(/\$1\/3\$/g, "1/3");

  // LaTeX degree & temperature
  res = res.replace(/\$121\\text\{\\s*\}\^\\circ\\text\{C\}\$/g, "121 °C");
  res = res.replace(/\$134\\text\{\\s*\}\^\\circ\\text\{C\}\$/g, "134 °C");
  res = res.replace(/\$47\\text\{\\s*\}\^\\circ\\text\{C\}\$/g, "47 °C");
  res = res.replace(/\^\\circ/g, "°");

  // LaTeX text replacements
  res = res.replace(/\\text\{([^\}]*)\}/g, "$1");

  // Symbols
  res = res.replace(/\\ge/g, "≥");
  res = res.replace(/\\le/g, "≤");
  res = res.replace(/\\sim/g, "~");
  res = res.replace(/\\pm/g, "±");
  res = res.replace(/\\times/g, "×");
  res = res.replace(/\\to/g, "→");

  // Remaining single or double $ wrapping
  res = res.replace(/\$([^\$]+)\$/g, "$1");

  return res;
}
