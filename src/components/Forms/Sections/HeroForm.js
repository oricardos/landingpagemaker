import React from "react";
import { renderFormSections } from "../../../utils/renderFormSections";
import { CustomContent } from "../CustomContent";
import FontSelector from "../FontSelector";
import { Checkbox } from "../Checkbox";
import { FormSectionWrapper } from "../FormSectionWrapper";

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
      {/* Configuração da Seção */}
      <FormSectionWrapper title="Configuração da Seção">
        <Checkbox label="Exibir seção" name="show" onChange={onChange} />
        {renderFormSections(form, sectionConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Título">
        {renderFormSections(form, titleConfig, onChange)}
        <FontSelector label="Fonte" name="titleFont" onChange={onChange} />
      </FormSectionWrapper>

      <FormSectionWrapper title="Subtítulo">
        {renderFormSections(form, subtitleConfig, onChange)}
        <FontSelector label="Fonte" name="subtitleFont" onChange={onChange} />
      </FormSectionWrapper>

      <FormSectionWrapper title="Conteúdo">
        <CustomContent
          name="contentText"
          value={form.find((field) => field.name === "contentText").value}
          onChange={onChange}
        />
        <FontSelector label="Fonte" name="contentFont" onChange={onChange} />
        {renderFormSections(form, contentConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Botão">
        {renderFormSections(form, buttonConfig, onChange)}
      </FormSectionWrapper>
    </div>
  );
};
