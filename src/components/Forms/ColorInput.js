import React, { useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";

export const ColorInput = ({ label, name, value, onChange }) => {
  const [updatedColor, setUpdatedColor] = useState(value);

  const handleChange = (color) => {
    setUpdatedColor(color);
    onChange({ target: { name, value: color } });
  };

  return (
    <div>
      <label className="flex">{label}</label>
      <HexColorPicker
        color={updatedColor}
        onChange={(color) => handleChange(color)}
        className="w-full mb-2"
      />
      <HexColorInput
      prefixed
        color={updatedColor}
        onChange={(color) => handleChange(color)}
        className="border border-gray-300 p-1 text-xs w-full"
      />
    </div>
  );
};
