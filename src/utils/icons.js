import * as HeroIcons from "@heroicons/react/20/solid";

export const heroIcons = Object.entries(HeroIcons).map(([name, Icon]) => ({
  label: name, 
  value: name.toLowerCase(),
  icon: <Icon className="w-5 h-5" />,
}));
