import React, { useEffect } from "react";
import { Input } from "../Forms/Input";
import { HeroLeadForm } from "../Forms/Sections/HeroLeadForm";
import { HeroForm } from "../Forms/Sections/HeroForm";
import { VideoForm } from "../Forms/Sections/VideoForm";
import { FooterForm } from "../Forms/Sections/FooterForm";
import { MapForm } from "../Forms/Sections/MapForm";
import { IconsForm } from "../Forms/Sections/IconsForm";

const EditForm = ({ sectionData, onChange }) => {
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    let newValue = value;

    if (files && files[0]) {
      newValue = URL.createObjectURL(files[0]);
    }

    // if (name === "icon" || name === "iconTitle" || name === "iconSubtitle") {
    //   newValue = sectionData.data.icons.map((item, index) => {
    //     // Substitua `targetIndex` pelo índice ou identificador exclusivo do item que está sendo atualizado
    //     if (index === targetIndex) {
    //       return { ...item, [name]: value }; // Atualiza apenas a propriedade específica
    //     }
    //     return item; // Mantém os demais itens inalterados;
    //   });
    // }

    console.log(newValue);

    onChange(name, newValue);
  };

  const renderForm = (section) => {
    switch (section.name) {
      //todo alterar nomes
      case "Hero Lead":
        return <HeroLeadForm form={section.form} onChange={handleChange} />;
      case "Hero":
        return <HeroForm form={section.form} onChange={handleChange} />;
      case "Ícones":
        return <IconsForm form={section.form} onChange={handleChange} />;
      case "Vídeo":
        return <VideoForm form={section.form} onChange={handleChange} />;
      case "Mapa":
        return <MapForm form={section.form} onChange={handleChange} />;
      case "Footer":
        return <FooterForm form={section.form} onChange={handleChange} />;

      default:
        return null;
    }
  };

  return (
    <form className="space-y-4 pb-5 overflow-y-auto h-[fill-available] px-2 pt-4 bg-[#E6E9EC]">
      {renderForm(sectionData)}
    </form>
  );
};

export default EditForm;
