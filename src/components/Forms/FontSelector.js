import React, { useState, useEffect } from "react";
import Select from "react-select";
import { fetchGoogleFonts } from "../../utils/fetchGoogleFonts";

const FontSelector = ({ label, onChange, name }) => {  
  const [fonts, setFonts] = useState([]);
  const [selectedFont, setSelectedFont] = useState("Roboto");
  const [loading, setLoading] = useState(true);
  const API_KEY = process.env.REACT_APP_GOOGLE_FONTS_API_KEY;

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
    const loadFonts = async () => {
      const fontsList = await fetchGoogleFonts(API_KEY);
      setFonts(fontsList);
      setLoading(false);
    };

    loadFonts();
  }, [API_KEY]);

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

  useEffect(() => {
    if (fonts.length > 0) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `https://fonts.googleapis.com/css2?family=${fonts
        .map((font) => font.value.replace(" ", "+"))
        .join("&family=")}&display=swap`;
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [fonts]);

  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontFamily: `"${state.data.label}", sans-serif`, 
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontFamily: `"${state.data.label}", sans-serif`, 
    }),
  };

  return (
    <div>
      <label className="block text-sm/6 font-medium text-gray-900">
        {label}
      </label>
      <Select
        label={label}
        options={fonts}
        onChange={(option) => handleFontChange(option)}
        defaultValue={{ label: "Roboto", value: "Roboto" }}
        styles={styles}
        isLoading={loading}
        components={{LoadingIndicator}}
        getOptionLabel={(e) => (
          <div style={{ fontFamily: `"${e.label}", sans-serif`}}>
            {e.label}
          </div>
        )}
      />
    </div>
  );
};

export default FontSelector;

const LoadingIndicator = () => {
  return <div>Carregando...</div>;
};
