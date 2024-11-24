import React, { useState } from "react";

export const Input = ({
  id,
  label,
  name,
  type,
  placeholder,
  onChange,
  value,
  className,
}) => {
  // const [newValue, setNewValue] = useState(value);
  // const handleChange = (e) => {
  //   setNewValue(e.target.value);
  //   onChange({
  //     target: {
  //       name,
  //       value: e.target.value,
  //     },
  //   });
  // };
  return (
    <div>
      <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-0">
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={`block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm/6 ${className}`}
        />
      </div>
    </div>
  );
};
