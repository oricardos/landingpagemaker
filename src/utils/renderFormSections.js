import { Input } from "../components/Forms/Input";

export const renderFormSections = (form, fields, onChange) => {
    return form
      .filter((field) => fields.includes(field.name)) // Filtra os campos presentes em sectionConfig
      .map((field) => (
        <div key={field.name}>
          <Input
            id={field.name}
            label={field.label}
            type={field.type}
            name={field.name}
            onChange={onChange}
          />
        </div>
      ));
  };