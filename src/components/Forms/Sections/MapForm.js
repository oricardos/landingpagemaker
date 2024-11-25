import React from "react";
import { renderFields } from "../../../utils/renderFields";
import { FormSectionWrapper } from "../FormSectionWrapper";

export const MapForm = ({ fields, onChange }) => {
  const sectionConfig = ["show", "sectionBackgroundColor"];
  const titleConfig = ["titleText", "titleColor", "titleFont"];
  const contentConfig = ["contentText", "contentColor", "contentFont"];
  const mapTitle = ["mapTitleText", "mapTitleColor", "mapTitleFont"];
  const mapSubTitle = ["mapSubtitleText", "mapSubtitleColor", "mapSubtitleFont"];
  const mapEmbedUrl = ["mapEmbedUrl"];

  return (
    <div className="space-y-6">
      <FormSectionWrapper title="Configuração da Seção">
        {renderFields(fields, sectionConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Título">
        {renderFields(fields, titleConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Conteúdo">
        {renderFields(fields, contentConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Titulo do mapa">
        {renderFields(fields, mapTitle, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Subtítulo do mapa">
        {renderFields(fields, mapSubTitle, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Mapa">
        {renderFields(fields, mapEmbedUrl, onChange)}
      </FormSectionWrapper>
    </div>
  );
};
