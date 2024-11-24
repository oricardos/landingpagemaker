import React from "react";
import { TwitterPicker } from "react-color";
export const ColorInput = ({ label, name, value, onChange }) => {
  return (
    <label>
      {label}
      <TwitterPicker
      width="100%"
        color={value}
        onChange={(color) => onChange({ target: { name, value: color.hex } })}
      />
    </label>
  );
};
