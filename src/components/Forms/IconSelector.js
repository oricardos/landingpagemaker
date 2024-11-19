import React, { useState } from "react";
import Select from "react-select";
import { heroIcons } from "../../utils/icons";

const HeroIconSelector = () => {
  const [selectedIcon, setSelectedIcon] = useState(heroIcons[0]);

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

  return (
    <div>
      <Select
        options={heroIcons}
        onChange={(option) => setSelectedIcon(option)}
        components={{
          SingleValue: customSingleValue,
          Option: customOption,
        }}
        placeholder="Selecione um ícone"
      />
      {/* <div className="mt-4">
        <p>Ícone Selecionado:</p>
        <div className="flex items-center space-x-2">
          {selectedIcon.icon}
          <span>{selectedIcon.label}</span>
        </div>
      </div> */}
    </div>
  );
};

export default HeroIconSelector;
