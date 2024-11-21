import React from "react";

export const Checkbox = ({ name, id, label, value, onChange }) => {
  const handleChange = (e) => {
    onChange({
      target: {
        name: name,
        value: e.target.checked,
      },
    });
  };
  return (
    <div className="flex h-6 items-center">
      <label htmlFor={id} className="text-sm text-gray-900 flex items-center gap-2">
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={value}
          onChange={handleChange}
          className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />

        {label}
      </label>
    </div>
  );
};
