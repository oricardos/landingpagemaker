import React from "react";
import { Input } from "../Input";
import { renderFormSections } from "../../../utils/renderFormSections";

export const HeroForm = ({ form, onChange }) => {
  const sectionConfig = ["sectionBackgroundColor", "overlayImgSrc", "backgroundImgSrc"];
  const titleConfig = ["titleText", "titleFont", "titleColor"];
  const subtitleConfig = ["subtitleText", "subtitleFont", "subtitleColor"];
  const contentConfig = ["contentText", "contentFont", "contentColor"];
  const buttonConfig = [
    "buttonText",
    "buttonColor",
    "buttonTextColor",
    "buttonLink",
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Configuração da Seção</h3>
        <div className="space-y-4">{renderFormSections(form, sectionConfig, onChange)}</div>
      </div>
      <div className="w-full border-t border-gray-300" />
      <div>
        <h3 className="text-lg font-medium">Título</h3>
        <div className="space-y-4">{renderFormSections(form, titleConfig, onChange)}</div>
      </div>
      <div className="w-full border-t border-gray-300" />
      <div>
        <h3 className="text-lg font-medium">Subtítulo</h3>
        <div className="space-y-4">{renderFormSections(form, subtitleConfig, onChange)}</div>
      </div>
      <div className="w-full border-t border-gray-300" />
      <div>
        <h3 className="text-lg font-medium">Conteúdo</h3>
        <div className="space-y-4">{renderFormSections(form, contentConfig, onChange)}</div>
      </div>
      <div>
        <h3 className="text-lg font-medium">Botão</h3>
        <div className="space-y-4">{renderFormSections(form, buttonConfig, onChange)}</div>
      </div>
    </div>
  );
};
