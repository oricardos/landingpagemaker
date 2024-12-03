import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import { heroIcons } from "../../utils/icons";

export const IconSelector = ({ label, name, onChange, index, value }) => {
  const initialIcon = heroIcons.filter((option) => option.label === value);
  const [selectedIcon, setSelectedIcon] = useState(initialIcon);

  const SingleValue = ({ children, ...props }) => {
    const icon = heroIcons.filter(
      (option) => option.value === props.data.value
    );
    return (
      <components.SingleValue {...props}>
        <div className="flex items-center space-x-2">
          {icon[0].icon}
          <span>{children}</span>
        </div>
      </components.SingleValue>
    );
  };

  const Option = ({ children, ...props }) => {
    const icon = heroIcons.filter(
      (option) => option.value === props.data.value
    );
    return (
      <components.Option {...props}>
        <div className="flex items-center space-x-2">
          {icon[0].icon}
          <span>{children}</span>
        </div>
      </components.Option>
    );
  };

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

  return (
    <div>
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium mb-1">{label}</label>
        <a
          href="https://heroicons.com/solid"
          target="_blank"
          rel="noreferrer noopener"
          className="text-sm font-medium text-blue-600 mb-1"
        >
          Ver Biblioteca de ícones
        </a>
      </div>
      <Select
        defaultValue={selectedIcon}
        options={heroIcons}
        onChange={handleIconChange}
        placeholder="Selecione um ícone"
        // components={{
        //   Option: ({ data, innerRef, innerProps }) => (
        //     <div
        //       ref={innerRef}
        //       {...innerProps}
        //       className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer"
        //     >
        //       {data.icon}
        //       <span>{data.label}</span>
        //     </div>
        //   ),
        //   SingleValue: ({ data }) => (
        //     <div className="flex items-center space-x-2">
        //       {data.icon}
        //       <span>{data.label}</span>
        //     </div>
        //   ),
        // }}
        styles={{
          singleValue: (base) => ({
            ...base,
            padding: 5,
            borderRadius: 5,
            display: "flex",
          }),
        }}
        components={{ SingleValue, Option }}
        isSearchable
      />
    </div>
  );
};
