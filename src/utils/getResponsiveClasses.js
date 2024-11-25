export const getResponsiveClasses = (baseClasses, responsiveClasses, previewDevice) => {
    const deviceClasses = responsiveClasses[previewDevice] || "";
    return `${baseClasses} ${deviceClasses}`.trim();
  };