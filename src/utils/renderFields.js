/**
 * Renderiza campos com base em seus tipos, nomes e configurações específicas.
 *
 * @param {Array<{ name: string, label: string, value: any, type: string }>} fields
 *   Lista de campos a serem renderizados, onde cada campo contém:
 *   - `name` (string): O identificador único do campo.
 *   - `label` (string): O rótulo exibido para o campo.
 *   - `value` (any): O valor atual do campo.
 *   - `type` (string): O tipo do campo, que determina qual componente será renderizado.
 * @param {Array<string>} fieldNames
 *   Lista de nomes de campos que devem ser renderizados.
 * @param {function} onChange
 *   Função callback chamada quando o valor de um campo muda.
 *   Recebe como parâmetro o evento ou dados da alteração.
 *
 * @returns {Array<JSX.Element>}
 *   Um array de componentes JSX renderizados com base nos campos fornecidos.
 *
 * @description
 * Esta função filtra os campos com base na lista de nomes (`fieldNames`), identifica o componente
 * apropriado para renderizar cada campo com base em seu tipo (`type`) e retorna os componentes configurados.
 * Campos sem um tipo específico utilizam um componente padrão (`Input`).
 */
import { Checkbox } from "../components/Forms/Checkbox";
import { ColorInput } from "../components/Forms/ColorInput";
import { Input } from "../components/Forms/Input";
import FontSelector from "../components/Forms/FontSelector";
import { CustomContent } from "../components/Forms/CustomContent";

const fieldTypeComponents = {
  checkbox: Checkbox,
  color: ColorInput,
  content: CustomContent,
  font: FontSelector,
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
