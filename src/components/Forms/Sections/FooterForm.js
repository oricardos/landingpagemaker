import React, { useState } from "react";
import { renderFields } from "../../../utils/renderFields";
import { Checkbox } from "../Checkbox";
import { FormSectionWrapper } from "../FormSectionWrapper";

export const FooterForm = ({ fields, onChange }) => {
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

  const sectionConfig = ["logoSrc", "sectionBackgroundColor", "iconTextColor"];
  const socialConfig = ["email", "whatsappLink", "instagramLink"];
  return (
    <div className="space-y-6">
      <FormSectionWrapper title="Configuração da Seção">
        <Checkbox
          label="Exibir seção"
          name="show"
          onChange={handleFormChange}
          value={formState.show}
        />
        {renderFields(fields, sectionConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Configuração de Redes Sociais">
        {renderFields(fields, socialConfig, onChange)}
      </FormSectionWrapper>
    </div>
  );
};
