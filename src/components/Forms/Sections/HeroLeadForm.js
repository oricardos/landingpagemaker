import React from "react";
import { renderFormSections } from "../../../utils/renderFormSections";
import FontSelector from "../FontSelector";

export const HeroLeadForm = ({ form, onChange }) => {
  const sectionConfig = [
    "logoSrc",
    "backgroundImgSrc",
    "sectionBackgroundColor",
  ];
  const titleConfig = ["titleText", "titleColor"];
  const subtitleConfig = ["subtitleText", "subtitleColor"];
  const formConfig = [
    "formPlaceholderName",
    "formPlaceholderPhone",
    "formPlaceholderEmail",
    "formTextColor",
    "buttonText",
    "buttonColor",
    "buttonTextColor",
    "buttonLink",
  ];

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
          <FontSelector label="Fonte do Título" onChange={onChange} name="titleFont" />
        </div>
      </div>

      <div>
        <h3 className="text-md font-medium mb-2 text-[#868F97]">Subtítulo</h3>
        <div className="space-y-4 p-2 bg-white rounded">
          {renderFormSections(form, subtitleConfig, onChange)}
          <FontSelector label="Fonte do Subtítulo" onChange={onChange} name="subtitleFont" />
        </div>
      </div>

      <div>
        <h3 className="text-md font-medium mb-2 text-[#868F97]">Formulário</h3>
        <div className="space-y-4 p-2 bg-white rounded">
          {renderFormSections(form, formConfig, onChange)}
        </div>
      </div>
    </div>
  );
};
