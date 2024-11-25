import React, { useEffect, useState } from "react";
import FontSelector from "../FontSelector";
import { renderFields } from "../../../utils/renderFields";
import { IconSelector } from "../IconSelector";
import { FormSectionWrapper } from "../FormSectionWrapper";
import { Input } from "../Input";

export const IconsForm = ({ fields, onChange }) => {
  const sectionConfig = ["show","sectionBackgroundColor"];
  const titleConfig = ["titleText", "titleColor", "titleFont"];
  const subtitleConfig = ["subtitleText", "subtitleColor"];
  const iconsGeneralConfig = ["iconColor", "iconBackgroundColor"];

  const iconsTitle = ["iconTitleColor"];
  const iconsSubTitle = ["iconSubtitleColor"];

  // const iconsConfig = ["iconTitle", "iconSubtitle"];
  const iconsConfig = [
    { icon: "", iconTitle: "", iconSubtitle: "" }, // Config inicial para cada item
  ];

  const [icons, setIcons] = useState(iconsConfig);

  const addIcon = (e) => {
    e.preventDefault();
    setIcons([...icons, ...iconsConfig]);
  };

  const handleChangeIcon = (e, index) => {
    const { name, value } = e.target;

    // Atualiza o item no índice específico
    const updatedIcons = icons.map((icon, idx) =>
      idx === index ? { ...icon, [name]: value } : icon
    );

    console.log(value);

    setIcons(updatedIcons); // Atualiza o estado
    onChange({
      target: { name: "icons", value: updatedIcons },
    }); // Atualiza o formulário principal
  };

  // useEffect(() => {
  //   console.log(icons);
  // }, [icons]);

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
        <FontSelector
          label="Fonte do Subtítulo"
          onChange={onChange}
          name="subtitleFont"
        />
      </FormSectionWrapper>

      <FormSectionWrapper title="Configurações Gerais dos ícones">
        {renderFields(fields, iconsGeneralConfig, onChange)}
        {renderFields(fields, iconsTitle, onChange)}
        <FontSelector
          label="Fonte do Título"
          onChange={onChange}
          name="iconTitleFont"
        />
        {renderFields(fields, iconsSubTitle, onChange)}
        <FontSelector
          label="Fonte do Subtítulo"
          onChange={onChange}
          name="iconSubtitleFont"
        />
      </FormSectionWrapper>

      <FormSectionWrapper title="Ícones">
        {/* {icons.map((iconForm, index) => {
          return (
            <div key={index}>
              <div>
                <IconSelector
                  label="Ícone"
                  name="icon"
                  onChange={(e) => handleChangeIcon(e, index)}
                />
                {renderFormSections(form, iconForm, (e) =>
                  handleChangeIcon(e, index)
                )}
              </div>

              {icons.length > 1 && (
                <hr className="my-8 border-t border-gray-200" />
              )}
            </div>
          );
        })} */}

        {icons.map((iconForm, index) => (
          <div key={index}>
            <div>
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
                    <Input label={field} name={field} value={iconForm[field] || ""} onChange={(e) => handleChangeIcon(e, index)} />
                    {/* <label>{field}</label>
                    <input
                      type={field === "icon" ? "hidden" : "text"}
                      name={field}
                      value={iconForm[field] || ""}
                      onChange={(e) => handleChangeIcon(e, index)}
                    /> */}
                  </div>
                );
              })}
            </div>

            {/* Separador entre formulários */}
            {icons.length > 1 && (
              <hr className="my-8 border-t border-gray-200" />
            )}
          </div>
        ))}
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
