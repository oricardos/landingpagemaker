import React from "react";
import { renderFormSections } from "../../../utils/renderFormSections";
import FontSelector from "../FontSelector";
import IconSelector from "../IconSelector";

export const MapForm = ({ form, onChange }) => {
  const sectionConfig = ["sectionBackgroundColor"];
  const titleConfig = ["titleText", "titleColor"];
  const contentConfig = ["contentText", "contentColor"];
  const mapTitle = ["mapTitleText", "mapTitleColor"];
  const mapSubTitle = ["mapSubTitleText", "mapSubTitleColor"];
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
          <FontSelector label="Fonte do Título" onChange={onChange} name="titleFont" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium">Conteúdo</h3>
        <div className="space-y-4">
          {renderFormSections(form, contentConfig, onChange)}
          <FontSelector label="Fonte do Título" onChange={onChange} name="contentFont" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium">Titulo do mapa</h3>
        <div className="space-y-4">
          {renderFormSections(form, mapTitle, onChange)}
          <FontSelector label="Fonte do Título" onChange={onChange} name="mapTitleFont" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium">Subtítulo do mapa</h3>
        <div className="space-y-4">
          {renderFormSections(form, mapSubTitle, onChange)}
          <FontSelector label="Fonte do Título" onChange={onChange} name="mapSubTitleFont" />
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
