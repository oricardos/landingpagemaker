import React from "react";
import { renderFormSections } from "../../../utils/renderFormSections";
import FontSelector from "../FontSelector";
import { Checkbox } from "../Checkbox";
import { FormSectionWrapper } from "../FormSectionWrapper";

export const MapForm = ({ form, onChange }) => {
  const sectionConfig = ["sectionBackgroundColor"];
  const titleConfig = ["titleText", "titleColor"];
  const contentConfig = ["contentText", "contentColor"];
  const mapTitle = ["mapTitleText", "mapTitleColor"];
  const mapSubTitle = ["mapSubTitleText", "mapSubTitleColor"];
  const mapEmbedUrl = ["mapEmbedUrl"];
  return (
    <div className="space-y-6">
      <FormSectionWrapper title="Configuração da Seção">
        <Checkbox label="Exibir seção" name="show" onChange={onChange} />
        {renderFormSections(form, sectionConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Título">
        {renderFormSections(form, titleConfig, onChange)}
        <FontSelector
          label="Fonte do Título"
          onChange={onChange}
          name="titleFont"
        />
      </FormSectionWrapper>

      <FormSectionWrapper title="Conteúdo">
        {renderFormSections(form, contentConfig, onChange)}
        <FontSelector
          label="Fonte do Título"
          onChange={onChange}
          name="contentFont"
        />
      </FormSectionWrapper>

      <FormSectionWrapper title="Titulo do mapa">
        {renderFormSections(form, mapTitle, onChange)}
        <FontSelector
          label="Fonte do Título"
          onChange={onChange}
          name="mapTitleFont"
        />
      </FormSectionWrapper>

      <FormSectionWrapper title="Subtítulo do mapa">
        {renderFormSections(form, mapSubTitle, onChange)}
        <FontSelector
          label="Fonte do Título"
          onChange={onChange}
          name="mapSubTitleFont"
        />
      </FormSectionWrapper>

      <FormSectionWrapper title="Mapa">
        {renderFormSections(form, mapEmbedUrl, onChange)}
      </FormSectionWrapper>
    </div>
  );
};
