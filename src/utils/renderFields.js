import { Checkbox } from "../components/Forms/Checkbox";
import { ColorInput } from "../components/Forms/ColorInput";
import { Input } from "../components/Forms/Input";

const fieldTypeComponents = {
  checkbox: Checkbox,
  color: ColorInput,
  default: Input,
};

export const renderFields = (fields, fieldNames, onChange) =>
  fields
    .filter((field) => fieldNames.includes(field.name))
    .map((field) => {
      const Component =
        fieldTypeComponents[field.type] || fieldTypeComponents.default;
      return (
        <Component
          key={field.name}
          label={field.label}
          name={field.name}
          value={field.value}
          onChange={onChange}
          type={field.type}
        />
      );
    });
