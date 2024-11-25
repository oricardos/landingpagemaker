import React, { createContext, useContext } from "react";

const PreviewDeviceContext = createContext("desktop");

export const usePreviewDevice = () => useContext(PreviewDeviceContext);

export const PreviewDeviceProvider = ({ children, device }) => (
  <PreviewDeviceContext.Provider value={device}>
    {children}
  </PreviewDeviceContext.Provider>
);
