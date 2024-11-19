import React from "react";
import { renderFormSections } from "../../../utils/renderFormSections";
import { CustomContent } from "../CustomContent";
import FontSelector from "../FontSelector";

export const HeroForm = ({ form, onChange }) => {
  const sectionConfig = [
    "sectionBackgroundColor",
    "overlayImgSrc",
    "backgroundImgSrc",
  ];
  const titleConfig = ["titleText", "titleColor"];
  const subtitleConfig = ["subtitleText", "subtitleColor"];
  const contentConfig = ["contentColor"];
  const buttonConfig = [
    "buttonText",
    "buttonColor",
    "buttonTextColor",
    "buttonLink",
  ];

  return (
    <div className="space-y-6">
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
          {renderFormSections(form, titleConfig, onChange)}
          <FontSelector label="Fonte" name="titleFont" onChange={onChange}/>
        </div>
      </div>

      <div>
        <h3 className="text-md font-medium mb-2 text-[#868F97]">Subtítulo</h3>
        <div className="space-y-4 p-2 bg-white rounded">
          {renderFormSections(form, subtitleConfig, onChange)}
          <FontSelector label="Fonte" name="subtitleFont" onChange={onChange}/>
        </div>
      </div>

      <div>
        <h3 className="text-md font-medium mb-2 text-[#868F97]">Conteúdo</h3>
        <div className="space-y-4 p-2 bg-white rounded">
          <CustomContent
            name="contentText"
            value={form.find((field) => field.name === "contentText").value}
            onChange={onChange}
          />
           <FontSelector label="Fonte" name="contentFont" onChange={onChange}/>
          {renderFormSections(form, contentConfig, onChange)}
        </div>
      </div>

      <div>
        <h3 className="text-md font-medium mb-2 text-[#868F97]">Botão</h3>
        <div className="space-y-4 p-2 bg-white rounded">
          {renderFormSections(form, buttonConfig, onChange)}
        </div>
      </div>
    </div>
  );
};
