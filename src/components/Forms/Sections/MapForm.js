import React from "react";
import { renderFormSections } from "../../../utils/renderFormSections";

export const MapForm = ({ form, onChange }) => {
  const sectionConfig = ["sectionBackgroundColor"];
  const titleConfig = ["titleText", "titleFont", "titleColor"];
  const contentConfig = ["contentText", "contentFont", "contentColor"];
  const mapConfig = ["mapTitleText", "mapTitleFont", "mapTitleColor", "mapSubTitleText", "mapSubTitleFont", "mapSubTitleColor"];
  const mapEmbedUrl = ["mapEmbedUrl"];
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Configuração da Seção</h3>
        <div className="space-y-4">
          {renderFormSections(form, sectionConfig, onChange)}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium">Título</h3>
        <div className="space-y-4">
          {renderFormSections(form, titleConfig, onChange)}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium">Conteúdo</h3>
        <div className="space-y-4">
          {renderFormSections(form, contentConfig, onChange)}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium">Textos</h3>
        <div className="space-y-4">
          {renderFormSections(form, mapConfig, onChange)}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium">Mapa</h3>
        <div className="space-y-4">
          {renderFormSections(form, mapEmbedUrl, onChange)}
        </div>
      </div>
    </div>
  );
};
