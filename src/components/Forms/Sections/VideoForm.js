// import React from "react";
// import { renderFormSections } from "../../../utils/renderFormSections";
import { Checkbox } from "../Checkbox";
import { FormSectionWrapper } from "../FormSectionWrapper";

// export const VideoForm = ({ form, onChange }) => {
//   const sectionConfig = ["sectionBackgroundColor", "backgroundImgSrc"];
//   const videoConfig = ["videoUrl"];
//   return (
//     <div className="space-y-6">
//       <FormSectionWrapper title="Configuração da Seção">
//         <Checkbox label="Exibir seção" name="show" onChange={onChange} />
//         {renderFormSections(form, sectionConfig, onChange)}
//       </FormSectionWrapper>

//       <FormSectionWrapper title="Vídeo">
//         {renderFormSections(form, videoConfig, onChange)}
//       </FormSectionWrapper>
//     </div>
//   );
// };

import React from "react";
import { Input } from "../Input";

export const VideoForm = ({ fields, onChange }) => {
  const sectionConfig = ["sectionBackgroundColor", "backgroundImgSrc", "show"];
  const videoConfig = ["videoUrl"];

  const renderFields = (fieldNames) =>
    fields
      .filter((field) => fieldNames.includes(field.name))
      .map((field) => (
        <div key={field.name}>
          {field.name === "show" ? (
            <Checkbox id={field.name} label={field.label} name={field.name} value={field.value} onChange={onChange} />
          ) : (
            <Input
              id={field.name}
              label={field.label}
              type={field.type}
              name={field.name}
              onChange={onChange}
              value={field.value}
            />
          )}
        </div>
      ));

  return (
    <div className="space-y-6">
      <FormSectionWrapper title="Configuração da Seção">
        {renderFields(sectionConfig)}
      </FormSectionWrapper>

      <FormSectionWrapper title="Vídeo">
        {renderFields(videoConfig)}
      </FormSectionWrapper>
    </div>
  );
};
