import React, { useEffect, useState } from "react";
import Select from "react-select";
import { heroIcons } from "../../utils/icons";

export const IconSelector = ({ label, name, onChange, index }) => {
  const [selectedIcon, setSelectedIcon] = useState(heroIcons[0]);

  // const handleIconChange = (selectedOption) => {
  //   setSelectedIcon(selectedOption.value);
  //   onChange(index, name, selectedOption.value);
  // };

  const handleIconChange = (selectedOption) => {
    setSelectedIcon(selectedOption.value);
    onChange({
      target: {
        name: name,
        value: selectedOption.label,
        index: index,
      },
    });
  };

  useEffect(() => {
    console.log("selectedIcon", selectedIcon);
  }, [selectedIcon]);

  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <Select
        options={heroIcons}
        value={heroIcons.find((icon) => icon.value === selectedIcon)}
        onChange={handleIconChange}
        components={{
          Option: ({ data, innerRef, innerProps }) => (
            <div
              ref={innerRef}
              {...innerProps}
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer"
            >
              {data.icon}
              <span>{data.label}</span>
            </div>
          ),
          SingleValue: ({ data }) => (
            <div className="flex items-center space-x-2">
              {data.icon}
              <span>{data.label}</span>
            </div>
          ),
        }}
        placeholder="Selecione um ícone"
      />
    </div>
  );
};
