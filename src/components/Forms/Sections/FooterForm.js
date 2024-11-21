import React from "react";
import { renderFormSections } from "../../../utils/renderFormSections";
import { Checkbox } from "../Checkbox";
import { FormSectionWrapper } from "../FormSectionWrapper";

export const FooterForm = ({ form, onChange }) => {
  const sectionConfig = ["logoSrc", "sectionBackgroundColor", "iconTextColor"];
  const socialConfig = [
    "email",
    "whatsappLink",
    "instagramLink",
  ];
  return (
    <div className="space-y-6">
      <FormSectionWrapper title="Configuração da Seção">
        <Checkbox label="Exibir seção" name="show" onChange={onChange} />
        {renderFormSections(form, sectionConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Configuração de Redes Sociais">
        {renderFormSections(form, socialConfig, onChange)}
      </FormSectionWrapper>
    </div>
  );
};
