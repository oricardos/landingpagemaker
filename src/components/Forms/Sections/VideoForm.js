import React from "react";
import { renderFormSections } from "../../../utils/renderFormSections";

export const VideoForm = ({ form, onChange }) => {
  const sectionConfig = ["sectionBackgroundColor", "backgroundImgSrc"];
  const videoConfig = ["videoUrl"];
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Configuração da Seção</h3>
        <div className="space-y-4">
          {renderFormSections(form, sectionConfig, onChange)}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium">Configuração da Seção</h3>
        <div className="space-y-4">
          {renderFormSections(form, videoConfig, onChange)}
        </div>
      </div>
    </div>
  );
};
