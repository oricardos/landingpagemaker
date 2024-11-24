import React, { useState } from "react";
import { renderFormSections } from "../../../utils/renderFormSections";
import FontSelector from "../FontSelector";
import { Checkbox } from "../Checkbox";
import { FormSectionWrapper } from "../FormSectionWrapper";

export const HeroLeadForm = ({ form, onChange }) => {
  const [formState, setFormState] = useState({
    show: true,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    onChange({
      target: {
        name: name,
        value: value,
      },
    });
  };

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
    "buttonText",
    "buttonColor",
    "buttonTextColor",
    "buttonLink",
  ];

  return (
    <div className="space-y-6 mb-4">
      {/* Configuração da Seção */}
      <FormSectionWrapper title="Configuração da Seção">
        <Checkbox
          label="Exibir seção"
          name="show"
          onChange={handleFormChange}
          value={formState.show}
        />
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
