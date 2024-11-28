import React, { memo, useCallback, useEffect, useMemo } from "react";
import { HeroLeadSection } from "../Section/HeroLeadSection";
import { HeroSection } from "../Section/HeroSection";
import { IconsSection } from "../Section/IconsSection";
import { VideoSection } from "../Section/VideoSection";
import { MapSection } from "../Section/MapSection";
import { FooterSection } from "../Section/FooterSection";

export const SectionRenderer = memo(function SectionRenderer({
  section,
  onUpdateSectionData,
}) {
  console.log("SectionRenderer atualizou");
  // Transforma os fields em um objeto
  const data = section?.fields.reduce((acc, field) => {
    acc[field.name] = field.value;
    return acc;
  }, {});

  // Função memoizada para atualizar os dados da seção
  // const handleUpdate = useCallback(
  //   (field, value) => {
  //     onUpdateSectionData(section.name, field, value);
  //   },
  //   [section.name, onUpdateSectionData]
  // );

  const handleUpdate = useMemo(() => {
    return (field, value) => {
      onUpdateSectionData(section.name, field, value);
    };
  }, [section, onUpdateSectionData]);

  // Renderização condicional baseada no nome da seção
  switch (section.name) {
    case "Hero Lead":
      return <HeroLeadSection data={data} onUpdate={handleUpdate} />;
    case "Hero":
      return <HeroSection data={data} onUpdate={handleUpdate} />;
    case "Ícones":
      return <IconsSection data={data} onUpdate={handleUpdate} />;
    case "Vídeo":
      return <VideoSection data={data} onUpdate={handleUpdate} />;
    case "Mapa":
      return <MapSection data={data} onUpdate={handleUpdate} />;
    case "Footer":
      return <FooterSection data={data} onUpdate={handleUpdate} />;
    default:
      return null;
  }
});

// const SectionRenderer = React.memo(({ section, onUpdateSectionData }) => {
//   // Transforma os fields em um objeto
//   const data = section?.fields.reduce((acc, field) => {
//     acc[field.name] = field.value;
//     return acc;
//   }, {});

//   // Função memoizada para atualizar os dados da seção
//   const handleUpdate = useCallback(
//     (field, value) => {
//       onUpdateSectionData(section.name, field, value);
//     },
//     [section.name, onUpdateSectionData]
//   );

//   useEffect(() => {
//     console.log("data atualizou", data);
//   }, [data]);

//   // Renderização condicional baseada no nome da seção
//   switch (section.name) {
//     case "Hero Lead":
//       return <HeroLeadSection data={data} onUpdate={handleUpdate} />;
//     case "Hero":
//       return <HeroSection data={data} onUpdate={handleUpdate} />;
//     case "Ícones":
//       return <IconsSection data={data} onUpdate={handleUpdate} />;
//     case "Vídeo":
//       return <VideoSection data={data} onUpdate={handleUpdate} />;
//     case "Mapa":
//       return <MapSection data={data} onUpdate={handleUpdate} />;
//     case "Footer":
//       return <FooterSection data={data} onUpdate={handleUpdate} />;
//     default:
//       return null;
//   }
// });

export default SectionRenderer;
