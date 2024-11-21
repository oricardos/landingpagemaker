import React, { useState } from "react";
import FontSelector from "../FontSelector";
import { renderFormSections } from "../../../utils/renderFormSections";
import { IconSelector } from "../IconSelector";
import { Checkbox } from "../Checkbox";
import { FormSectionWrapper } from "../FormSectionWrapper";

export const IconsForm = ({ form, onChange }) => {
  const sectionConfig = ["sectionBackgroundColor"];
  const titleConfig = ["titleText", "titleColor"];
  const subtitleConfig = ["subtitleText", "subtitleColor"];
  const iconsGeneralConfig = ["iconColor", "iconBackgroundColor"];

  const iconsTitle = ["iconTitleColor"];
  const iconsSubTitle = ["iconSubtitleColor"];

  const iconsConfig = ["iconTitle", "iconSubtitle"];

  const [icons, setIcons] = useState([iconsConfig]);

  const addIcon = (e) => {
    e.preventDefault();
    setIcons([...icons, iconsConfig]);
  };

  return (
    <div className="space-y-6 mb-4">
      <FormSectionWrapper title="Configuração da Seção">
        <Checkbox label="Exibir seção" name="show" onChange={onChange} />
        {renderFormSections(form, sectionConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Título">
        {renderFormSections(form, titleConfig, onChange)}{" "}
        <FontSelector
          label="Fonte do Título"
          onChange={onChange}
          name="titleFont"
        />
      </FormSectionWrapper>

      <FormSectionWrapper title="Subtítulo">
        {renderFormSections(form, subtitleConfig, onChange)}
        <FontSelector
          label="Fonte do Subtítulo"
          onChange={onChange}
          name="subTitleFont"
        />
      </FormSectionWrapper>

      <FormSectionWrapper title="Configurações Gerais dos ícones">
        {renderFormSections(form, iconsGeneralConfig, onChange)}
        {renderFormSections(form, iconsTitle, onChange)}
        <FontSelector
          label="Fonte do Título"
          onChange={onChange}
          name="iconTitleFont"
        />
        {renderFormSections(form, iconsSubTitle, onChange)}
        <FontSelector
          label="Fonte do Subtítulo"
          onChange={onChange}
          name="iconSubtitleFont"
        />
      </FormSectionWrapper>

      <FormSectionWrapper title="Ícones">
        {icons.map((iconForm, index) => {
          return (
            <div key={index}>
              <div>
                <IconSelector
                  label="Ícone"
                  name="icon"
                  index={index}
                  onChange={onChange}
                />
                {renderFormSections(form, iconForm, onChange)}
              </div>

              {icons.length > 1 && (
                <hr className="my-8 border-t border-gray-200" />
              )}
            </div>
          );
        })}
      </FormSectionWrapper>

      <button
        onClick={(e) => addIcon(e)}
        className="mt-2 bg-slate-900 px-4 py-2 text-white rounded flex justify-self-end"
      >
        Adicionar bloco
      </button>
    </div>
  );
};
