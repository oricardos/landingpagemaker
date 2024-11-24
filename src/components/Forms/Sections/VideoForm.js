import React from "react";
import { renderFields } from "../../../utils/renderFields";
import { FormSectionWrapper } from "../FormSectionWrapper";

export const VideoForm = ({ fields, onChange }) => {
  const sectionConfig = ["sectionBackgroundColor", "backgroundImgSrc", "show"];
  const videoConfig = ["videoUrl"];

  return (
    <div className="space-y-6">
      <FormSectionWrapper title="Configuração da Seção">
        {renderFields(fields, sectionConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Vídeo">
      {renderFields(fields, videoConfig, onChange)}
      </FormSectionWrapper>
    </div>
  );
};
