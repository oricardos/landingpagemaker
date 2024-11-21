import React from "react";
import { renderFormSections } from "../../../utils/renderFormSections";
import { Checkbox } from "../Checkbox";

export const FooterForm = ({ form, onChange }) => {
  const sectionConfig = ["logoSrc", "sectionBackgroundColor", "iconTextColor"];
  const socialConfig = [
    "email",
    "whatsappLink",
    "instagramLink",
    "iconTextColor",
  ];
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Configuração da Seção</h3>
        <div className="space-y-4">
          <Checkbox label="Exibir seção" name="show" onChange={onChange} />
          {renderFormSections(form, sectionConfig, onChange)}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium">Configuração de Redes Sociais</h3>
        <div className="space-y-4">
          {renderFormSections(form, socialConfig, onChange)}
        </div>
      </div>
    </div>
  );
};
