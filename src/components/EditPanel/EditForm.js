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

    onChange(name, newValue);
  };

  const renderForm = (section) => {
    switch (section.name) {
      //todo alterar nomes
      case "Hero Lead":
        return <HeroLeadForm fields={section.fields} onChange={handleChange} />;
      case "Hero":
        return <HeroForm fields={section.fields} onChange={handleChange} />;
      case "Ícones":
        return <IconsForm fields={section.fields} onChange={handleChange} />;
      case "Vídeo":
        return <VideoForm fields={section.fields} onChange={handleChange} />;
      case "Mapa":
        return <MapForm fields={section.fields} onChange={handleChange} />;
      case "Footer":
        return <FooterForm fields={section.fields} onChange={handleChange} />;

      default:
        return null;
    }
  };

  return (
    <form className="space-y-4 pb-5 overflow-y-scroll h-full px-2 pt-4 bg-[#E6E9EC]">
      {renderForm(sectionData)}
    </form>
  );
};

export default EditForm;
