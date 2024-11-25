import React from "react";
import { FormSectionWrapper } from "../FormSectionWrapper";
import { renderFields } from "../../../utils/renderFields";

export const HeroLeadForm = ({ fields, onChange }) => {

  const sectionConfig = [
    "show",
    "logoSrc",
    "backgroundImgSrc",
    "sectionBackgroundColor",
  ];
  const titleConfig = ["titleText", "titleColor", "titleFont"];
  const subtitleConfig = ["subtitleText", "subtitleColor", "subtitleFont"];
  const formConfig = [
    "formPlaceholderName",
    "formPlaceholderPhone",
    "formPlaceholderEmail",
    "buttonText",
    "buttonColor",
    "buttonTextColor",
    "buttonLink",
  ];

  return (
    <div className="space-y-6 mb-4">
      {/* Configuração da Seção */}
      <FormSectionWrapper title="Configuração da Seção">
      {renderFields(fields, sectionConfig, onChange)}
      </FormSectionWrapper>

      {/* Título */}
      <FormSectionWrapper title="Título">
        {renderFields(fields, titleConfig, onChange)}
      </FormSectionWrapper>

      {/* Subtítulo */}
      <FormSectionWrapper title="Subtítulo">
        {renderFields(fields, subtitleConfig, onChange)}
      </FormSectionWrapper>

      {/* Formulário */}
      <FormSectionWrapper title="Formulário">
        {renderFields(fields, formConfig, onChange)}
      </FormSectionWrapper>
    </div>
  );
};
