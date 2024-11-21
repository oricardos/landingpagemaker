import React from "react";
import { renderFormSections } from "../../../utils/renderFormSections";
import { Checkbox } from "../Checkbox";
import { FormSectionWrapper } from "../FormSectionWrapper";

export const VideoForm = ({ form, onChange }) => {
  const sectionConfig = ["sectionBackgroundColor", "backgroundImgSrc"];
  const videoConfig = ["videoUrl"];
  return (
    <div className="space-y-6">
      <FormSectionWrapper title="Configuração da Seção">
        <Checkbox label="Exibir seção" name="show" onChange={onChange} />
        {renderFormSections(form, sectionConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Vídeo">
        {renderFormSections(form, videoConfig, onChange)}
      </FormSectionWrapper>
    </div>
  );
};
