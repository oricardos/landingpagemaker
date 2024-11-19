import React, { useState, useEffect } from "react";
import Select from "react-select";
import { googleFonts } from "../../utils/googleFonts";

const FontSelector = ({ label, onChange, name }) => {
  const [selectedFont, setSelectedFont] = useState("Roboto");

  const handleFontChange = (selectedOption) => {
    setSelectedFont(selectedOption.value);
    onChange({
      target: {
        name: name,
        value: selectedOption.value,
      },
    });
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${selectedFont.replace(
      " ",
      "+"
    )}:wght@400;700&display=swap`;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [selectedFont]);

  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontFamily: state.data.value, // Aplica a fonte ao nome da opção
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontFamily: state.data.value, // Aplica a fonte à opção selecionada
    }),
  }

  return (
    <div>
      <Select
        label={label}
        options={googleFonts}
        onChange={(option) => handleFontChange(option)}
        defaultValue={{ label: "Roboto", value: "Roboto" }}
        styles={styles}
      />
    </div>
  );
};

export default FontSelector;
