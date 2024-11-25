import React from "react";
import { ChromePicker } from "react-color";
export const ColorInput = ({ label, name, value, onChange }) => {
  const [updatedColor, setUpdatedColor] = React.useState(value);
  const handleChange = (color) => {
    setUpdatedColor(color.hex);
    onChange({ target: { name, value: color.hex } });
  };

  return (
    <label className="flex flex-col">
      {label}
      <ChromePicker
        label={label}
        triangle="hide"
        width="100%"
        color={updatedColor}
        onChange={(color) => handleChange(color)}
      />
    </label>
  );
};
