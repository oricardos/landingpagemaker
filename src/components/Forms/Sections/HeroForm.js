import React from "react";
import { renderFields } from "../../../utils/renderFields";
import { CustomContent } from "../CustomContent";
import FontSelector from "../FontSelector";
import { Checkbox } from "../Checkbox";
import { FormSectionWrapper } from "../FormSectionWrapper";

export const HeroForm = ({ fields, onChange }) => {
  const sectionConfig = [
    "show",
    "sectionBackgroundColor",
    "overlayImgSrc",
    "backgroundImgSrc",
  ];
  const titleConfig = ["titleText", "titleColor", "titleFont"];
  const subtitleConfig = ["subtitleText", "subtitleColor", "subtitleFont"];
  const contentConfig = ["contentColor", "contentFont"];
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
        {renderFields(fields, sectionConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Título">
        {renderFields(fields, titleConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Subtítulo">
        {renderFields(fields, subtitleConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Conteúdo">
        <CustomContent
          name="contentText"
          value={fields.find((field) => field.name === "contentText").value}
          onChange={onChange}
        />
        {renderFields(fields, contentConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Botão">
        {renderFields(fields, buttonConfig, onChange)}
      </FormSectionWrapper>
    </div>
  );
};
