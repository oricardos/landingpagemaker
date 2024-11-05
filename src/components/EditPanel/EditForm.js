import React, { useEffect } from "react";
import { Input } from "../Forms/Input";
import { HeroLeadForm } from "../Forms/Sections/HeroLeadForm";
import { HeroForm } from "../Forms/Sections/HeroForm";
import { VideoForm } from "../Forms/Sections/VideoForm";
import { FooterForm } from "../Forms/Sections/FooterForm";
import { MapForm } from "../Forms/Sections/MapForm";

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
        return <HeroLeadForm form={section.form} onChange={handleChange} />;
      case "hero":
        return <HeroForm form={section.form} onChange={handleChange} />;
      case "video":
        return <VideoForm form={section.form} onChange={handleChange} />;
      case "map":
        return <MapForm form={section.form} onChange={handleChange} />;
      case "footer":
        return <FooterForm form={section.form} onChange={handleChange} />;

      default:
        return null;
    }
  };

  return (
    <form className="space-y-4 mb-10 overflow-y-auto h-[fill-available] px-2 pt-4 bg-[#E6E9EC]">
      {renderForm(sectionData)}
    </form>
  );
};

export default EditForm;
