/**
 * Combines base classes with responsive classes based on the current preview device.
 *
 * @param {string} baseClasses - The base CSS classes that are always applied.
 * @param {Object} responsiveClasses - An object mapping device names (e.g., "mobile", "tablet", "desktop") to CSS classes.
 * @param {string} previewDevice - The name of the current device to preview (e.g., "mobile", "tablet", "desktop").
 * @returns {string} A string containing the combined CSS classes for the base and the current device, trimmed of extra spaces.
 */

export const getResponsiveClasses = (
  baseClasses,
  responsiveClasses,
  previewDevice
) => {
  const deviceClasses = responsiveClasses[previewDevice] || "";
  return `${baseClasses} ${deviceClasses}`.trim();
};
