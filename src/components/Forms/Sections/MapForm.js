import React from "react";
import { renderFields } from "../../../utils/renderFields";
import FontSelector from "../FontSelector";
import { FormSectionWrapper } from "../FormSectionWrapper";

export const MapForm = ({ fields, onChange }) => {
  const sectionConfig = ["show", "sectionBackgroundColor"];
  const titleConfig = ["titleText", "titleColor"];
  const contentConfig = ["contentText", "contentColor"];
  const mapTitle = ["mapTitleText", "mapTitleColor"];
  const mapSubTitle = ["mapSubtitleText", "mapSubtitleColor"];
  const mapEmbedUrl = ["mapEmbedUrl"];
  return (
    <div className="space-y-6">
      <FormSectionWrapper title="Configuração da Seção">
        {renderFields(fields, sectionConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Título">
        {renderFields(fields, titleConfig, onChange)}
        <FontSelector
          label="Fonte do Título"
          onChange={onChange}
          name="titleFont"
        />
      </FormSectionWrapper>

      <FormSectionWrapper title="Conteúdo">
        {renderFields(fields, contentConfig, onChange)}
        <FontSelector
          label="Fonte do Título"
          onChange={onChange}
          name="contentFont"
        />
      </FormSectionWrapper>

      <FormSectionWrapper title="Titulo do mapa">
        {renderFields(fields, mapTitle, onChange)}
        <FontSelector
          label="Fonte do Título"
          onChange={onChange}
          name="mapTitleFont"
        />
      </FormSectionWrapper>

      <FormSectionWrapper title="Subtítulo do mapa">
        {renderFields(fields, mapSubTitle, onChange)}
        <FontSelector
          label="Fonte do Título"
          onChange={onChange}
          name="mapSubtitleFont"
        />
      </FormSectionWrapper>

      <FormSectionWrapper title="Mapa">
        {renderFields(fields, mapEmbedUrl, onChange)}
      </FormSectionWrapper>
    </div>
  );
};
