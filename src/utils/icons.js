/**
 * Mapeia a biblioteca HeroIcons em um array de objetos, cada um contendo informações sobre um ícone.
 *
 * @type {Array<{ label: string, value: string, icon: JSX.Element }>}
 * Cada objeto no array representa um HeroIcon:
 * - `label`: O nome do ícone como uma string.
 * - `value`: O nome do ícone em letras minúsculas, útil como identificador.
 * - `icon`: O elemento JSX que renderiza o ícone, com dimensões predefinidas (largura e altura definidas como 5).
 */
import * as HeroIcons from "@heroicons/react/20/solid";

export const heroIcons = Object.entries(HeroIcons).map(([name, Icon]) => ({
  label: name,
  value: name.toLowerCase(),
  icon: <Icon className="w-5 h-5" />,
}));
