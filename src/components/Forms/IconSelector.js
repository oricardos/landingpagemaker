import React, { useState } from "react";
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
        value: selectedOption.value,
        index: index, // Adiciona o índice ao target
      },
    });
  };

  const customSingleValue = ({ data }) => (
    <div className="flex items-center space-x-2">
      {data.icon}
      <span>{data.label}</span>
    </div>
  );

  const customOption = (props) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div
        ref={innerRef}
        {...innerProps}
        className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer"
      >
        {data.icon}
        <span>{data.label}</span>
      </div>
    );
  };

  // return (
  //   <label>
  //     {label}
  //     <Select
  //       options={heroIcons}
  //       onChange={(option) => handleIconChange(option)}
  //       components={{
  //         SingleValue: customSingleValue,
  //         Option: customOption,
  //       }}
  //       placeholder="Selecione um ícone"
  //     />
  //     {/* <div className="mt-4">
  //       <p>Ícone Selecionado:</p>
  //       <div className="flex items-center space-x-2">
  //         {selectedIcon.icon}
  //         <span>{selectedIcon.label}</span>
  //       </div>
  //     </div> */}
  //   </label>
  // );

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
