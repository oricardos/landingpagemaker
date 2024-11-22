import React from "react";
import { renderFormSections } from "../../../utils/renderFormSections";
import FontSelector from "../FontSelector";
import { Checkbox } from "../Checkbox";
import { FormSectionWrapper } from "../FormSectionWrapper";

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
    // "formTextColor",
    "buttonText",
    "buttonColor",
    "buttonTextColor",
    "buttonLink",
  ];

  return (
    <div className="space-y-6 mb-4">
      {/* Configuração da Seção */}
      <FormSectionWrapper title="Configuração da Seção">
        <Checkbox label="Exibir seção" name="show" onChange={onChange} />
        {renderFormSections(form, sectionConfig, onChange)}
      </FormSectionWrapper>

      {/* Título */}
      <FormSectionWrapper title="Título">
        {renderFormSections(form, titleConfig, onChange)}{" "}
        <FontSelector
          label="Fonte do Título"
          onChange={onChange}
          name="titleFont"
        />
      </FormSectionWrapper>

      {/* Subtítulo */}
      <FormSectionWrapper title="Subtítulo">
        {renderFormSections(form, subtitleConfig, onChange)}
        <FontSelector
          label="Fonte do Subtítulo"
          onChange={onChange}
          name="subtitleFont"
        />
      </FormSectionWrapper>

      {/* Formulário */}
      <FormSectionWrapper title="Formulário">
        {renderFormSections(form, formConfig, onChange)}
      </FormSectionWrapper>
    </div>
  );
};
