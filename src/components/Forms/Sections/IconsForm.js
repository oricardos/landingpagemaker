import React, { useState } from "react";
import { renderFields } from "../../../utils/renderFields";
import { IconSelector } from "../IconSelector";
import { FormSectionWrapper } from "../FormSectionWrapper";
import { Input } from "../Input";

export const IconsForm = ({ fields, onChange }) => {
  const sectionConfig = ["show", "sectionBackgroundColor"];
  const titleConfig = ["titleText", "titleColor", "titleFont"];
  const subtitleConfig = ["subtitleText", "subtitleColor", "subtitleFont"];
  const iconsGeneralConfig = ["iconColor", "iconBackgroundColor"];

  const iconsTitle = ["iconTextFont", "iconTitleColor"];
  const iconsSubTitle = ["iconSubtitleColor"];

  const iconsConfig = fields.filter((field) => field.name === "icons")[0].value;

  const [icons, setIcons] = useState(iconsConfig);

  const addIcon = (e) => {
    e.preventDefault();
    setIcons([...icons, ...iconsConfig]);
    onChange({
      target: { name: "icons", value: [...icons, ...iconsConfig] },
    });
  };

  const handleChangeIcon = (e, index) => {
    const { name, value } = e.target;

    const updatedIcons = icons.map((icon, idx) =>
      idx === index ? { ...icon, [name]: value } : icon
    );

    setIcons(updatedIcons);
    onChange({
      target: { name: "icons", value: updatedIcons },
    });
  };

  return (
    <div className="space-y-6 mb-4">
      <FormSectionWrapper title="Configuração da Seção">
        {renderFields(fields, sectionConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Título">
        {renderFields(fields, titleConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Subtítulo">
        {renderFields(fields, subtitleConfig, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Configurações Gerais dos ícones">
        {renderFields(fields, iconsGeneralConfig, onChange)}
        {renderFields(fields, iconsTitle, onChange)}
        {renderFields(fields, iconsSubTitle, onChange)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Ícones">
        {icons.map((iconForm, index) => {
          return (
            <div key={index}>
              <div className="space-y-4">
                {/* Atualiza o ícone */}
                <IconSelector
                  label="Ícone"
                  name="icon"
                  value={iconForm.icon}
                  onChange={(e) => handleChangeIcon(e, index)}
                />

                {/* Atualiza os outros campos (formulário dinâmico) */}
                {Object.keys(iconForm).map((field) => {
                  if (field === "icon") return null;
                  return (
                    <div key={field}>
                      <Input
                        label={field === "iconTitle" ? "Título" : "Subtítulo"}
                        name={field}
                        value={iconForm[field] || ""}
                        onChange={(e) => handleChangeIcon(e, index)}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Separador entre formulários */}
              {icons.length > 1 && (
                <hr className="my-8 border-t border-gray-200" />
              )}
            </div>
          );
        })}
      </FormSectionWrapper>

      <button
        onClick={(e) => addIcon(e)}
        className={`mt-2 bg-slate-900 px-4 py-2 text-white rounded justify-self-end ${
          icons.length >= 6 ? "hidden" : "flex"
        }`}
      >
        Adicionar bloco
      </button>
    </div>
  );
};
