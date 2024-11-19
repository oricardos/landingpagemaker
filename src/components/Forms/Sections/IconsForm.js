import React, { useState } from "react";
import FontSelector from "../FontSelector";
import { renderFormSections } from "../../../utils/renderFormSections";
import { IconSelector } from "../IconSelector";
import { render } from "@testing-library/react";

export const IconsForm = ({ form, onChange }) => {
  const initialIconConfig = [];

  const teste = {
    icon: "CloudArrowUpIcon",
    title: "Push to deploy",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, modi asperiores placeat laborum soluta nisi provident, doloremque temporibus, ad eveniet recusandae culpa magni veritatis voluptatem. Saepe debitis animi repellendus commodi.",
  };

  const sectionConfig = ["sectionBackgroundColor"];
  const titleConfig = ["titleText", "titleColor"];
  const subtitleConfig = ["subtitleText", "subtitleColor"];
  const iconsConfig = [
    "iconBackgroundColor",
    "iconColor",
    "iconTitleFont",
    "iconTitleColor",
    "iconSubtitleFont",
    "iconSubtitleFont",
    "iconSubtitleColor",
  ];

  const tralalalalala = ["icon", "iconTitle", "iconSubtitle"];

  const [icons, setIcons] = useState([]);

  const addIcon = () => {
    setIcons([...icons, initialIconConfig]);
  }

  return (
    <div className="space-y-6 mb-4">
      <div>
        <h3 className="text-md font-medium mb-2 text-[#868F97]">
          Configuração da Seção
        </h3>
        <div className="space-y-4 p-2 bg-white rounded">
          {renderFormSections(form, sectionConfig, onChange)}
        </div>
      </div>

      <div>
        <h3 className="text-md font-medium mb-2 text-[#868F97]">Título</h3>
        <div className="space-y-4 p-2 bg-white rounded">
          {renderFormSections(form, titleConfig, onChange)}{" "}
          <FontSelector
            label="Fonte do Título"
            onChange={onChange}
            name="titleFont"
          />
        </div>
      </div>

      <div>
        <h3 className="text-md font-medium mb-2 text-[#868F97]">Subtítulo</h3>
        <div className="space-y-4 p-2 bg-white rounded">
          {renderFormSections(form, subtitleConfig, onChange)}
          <FontSelector
            label="Fonte do Subtítulo"
            onChange={onChange}
            name="subtitleFont"
          />
        </div>
      </div>

      <div>
        <h3 className="text-md font-medium mb-2 text-[#868F97]">
          Estilização do Ícone
        </h3>
        <div className="space-y-4 p-2 bg-white rounded">
          {renderFormSections(form, iconsConfig, onChange)}
        </div>
        <div className="space-y-4 mt-4 p-2 bg-white rounded">
          {icons.map((icon, index) => (
            <div>
              {renderFormSections(icon, tralalalalala, onChange)}
            </div>
          ))}
        </div>
        <button onClick={() => addIcon()} className="mt-2 bg-slate-900 px-4 py-2 text-white rounded">
          Adicionar ícone
        </button>
      </div>
    </div>
  );
};
