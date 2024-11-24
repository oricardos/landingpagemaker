import { Checkbox } from "../components/Forms/Checkbox";
import { Input } from "../components/Forms/Input";

export const renderFields = (fields, fieldNames, onChange) =>
    fields
      .filter((field) => fieldNames.includes(field.name))
      .map((field) => (
        <div key={field.name}>
          {field.name === "show" ? (
            <Checkbox
              id={field.name}
              label={field.label}
              name={field.name}
              value={field.value}
              onChange={onChange}
            />
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