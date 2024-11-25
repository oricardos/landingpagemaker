import React, { useRef, useEffect, useState } from "react";

const SimulatedWindow = ({ children }) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setDimensions({
          width: clientWidth,
          height: clientHeight,
        });
      }
    };

    // Usar ResizeObserver para monitorar mudanças de tamanho
    const observer = new ResizeObserver(() => {
      updateDimensions();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Limpa o observer ao desmontar
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        border: "1px solid black",
        width: "100%",
        height: "100%",
        resize: "both",
        overflow: "auto",
        position: "relative",
      }}
    >
      {/* Propriedades da div simulando o window */}
      <div>
        <p>Simulated Window Dimensions:</p>
        <p>Width: {dimensions.width}px</p>
        <p>Height: {dimensions.height}px</p>
      </div>

      {/* Passa as dimensões para os filhos */}
      {React.cloneElement(children, { simulatedWindow: dimensions })}
    </div>
  );
};

const ResponsiveComponent = ({ simulatedWindow }) => {
  const { width, height } = simulatedWindow || {};
  return (
    <div
      style={{
        backgroundColor: width > 500 ? "lightblue" : "lightcoral",
        height: "100%",
        width: "100%",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <h1>Responsive Component</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};
