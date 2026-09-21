/**
 * Formatting utility functions for currency, weights, and environmental impact calculations.
 */

/**
 * Format a number into Indian Rupee (INR) currency representation.
 * @param {number} amount - Numerical value in INR.
 * @param {boolean} includeSymbol - Whether to prefix with the ₹ symbol.
 * @returns {string} Formatted currency string (e.g., "₹1,250" or "1,250").
 */
export function formatINR(amount, includeSymbol = true) {
  if (typeof amount !== 'number' || isNaN(amount)) return includeSymbol ? '₹0' : '0';
  const formatted = Math.round(amount).toLocaleString('en-IN');
  return includeSymbol ? `₹${formatted}` : formatted;
}

/**
 * Format a weight value in kilograms or grams depending on magnitude.
 * @param {number} weightKg - Weight value in kilograms.
 * @param {number} precision - Decimal places to preserve.
 * @returns {string} Formatted weight string (e.g., "2.5 kg" or "350 g").
 */
export function formatWeight(weightKg, precision = 2) {
  if (typeof weightKg !== 'number' || isNaN(weightKg)) return '0.00 kg';
  if (weightKg < 1 && weightKg > 0) {
    return `${Math.round(weightKg * 1000)} g`;
  }
  return `${weightKg.toFixed(precision)} kg`;
}

/**
 * Compute estimated CO2 mitigated (in kg) based on e-waste mass diverted from landfills.
 * Average mitigation factor: ~2.5 kg CO2e per kg of electronic scrap recycled.
 * @param {number} ewasteKg - Weight of e-waste in kg.
 * @returns {number} Estimated CO2 equivalent avoided in kilograms.
 */
export function calculateCO2Avoided(ewasteKg) {
  if (typeof ewasteKg !== 'number' || isNaN(ewasteKg) || ewasteKg <= 0) return 0;
  return Number((ewasteKg * 2.5).toFixed(2));
}
