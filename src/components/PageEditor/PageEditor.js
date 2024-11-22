"use client";

import { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Monitor, Smartphone, Eye } from "lucide-react";
import { Input } from "../Forms/Input";
import { TextArea } from "../Forms/TextArea";
import EditPanel from "../EditPanel/EditPanel";
import { HeroLeadSection } from "../Section/HeroLeadSection";
import { HeroSection } from "../Section/HeroSection";
import { IconsSection } from "../Section/IconsSection";
import { FooterSection } from "../Section/FooterSection";
import { sectionConfig } from "../../utils/sectionConfig";
import { VideoSection } from "../Section/VideoSection";
import { MapSection } from "../Section/MapSection";

export const PageEditor = () => {
  const [activeTab, setActiveTab] = useState("template");
  const [previewDevice, setPreviewDevice] = useState("desktop");

  const [sections, setSections] = useState(sectionConfig);

  const [selectedSection, setSelectedSection] = useState(null);

  const [usedFonts, setUsedFonts] = useState([]);

  const handleUpdateSectionData = (sectionName, field, value) => {
    setSelectedSection((prevState) => {
      return {
        ...prevState,
        data: {
          ...prevState.data,
          [field]: value,
        },
      };
    });
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.name === sectionName
          ? { ...section, data: { ...section.data, [field]: value } }
          : section
      )
    );
  };

  const handleEditSection = (name, updatedData) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.name === name
          ? { ...section, data: { ...section.data, ...updatedData } }
          : section
      )
    );
  };

  const renderSection = (section) => {
    switch (section.name) {
      case "Hero Lead":
        return (
          <HeroLeadSection
            data={section.data}
            onUpdate={(field, value) =>
              handleUpdateSectionData(section.name, field, value)
            }
          />
        );
      case "Hero":
        return (
          <HeroSection
            data={section.data}
            onUpdate={(field, value) =>
              handleUpdateSectionData(section.name, field, value)
            }
          />
        );
      case "Ícones":
        return (
          <IconsSection
            data={section.data}
            onUpdate={(field, value) =>
              handleUpdateSectionData(section.name, field, value)
            }
          />
        );
      case "Vídeo":
        return (
          <VideoSection
            data={section.data}
            onUpdate={(field, value) =>
              handleUpdateSectionData(section.name, field, value)
            }
          />
        );
      case "Mapa":
        return (
          <MapSection
            data={section.data}
            onUpdate={(field, value) =>
              handleUpdateSectionData(section.name, field, value)
            }
          />
        );
      case "Footer":
        return (
          <FooterSection
            data={section.data}
            onUpdate={(field, value) =>
              handleUpdateSectionData(section.name, field, value)
            }
          />
        );
      default:
        return null;
    }
  };

  const handleSave = () => {
    console.log(sections);
  };

  const tabClass =
    "border-0 rounded ring-0 outline-none data-[selected]:bg-white data-[selected]:text-gray-900 transition-all";

    useEffect(() => {
      const fonts = new Set();
  
      sections.forEach((section) => {
        const data = section.data;
        const fontKeys = Object.keys(data).filter((key) => key.includes("Font"));
        fontKeys.forEach((fontKey) => {
          fonts.add(data[fontKey]); // Adiciona as fontes ao Set (garantindo unicidade)
        });
      });
  
      setUsedFonts(Array.from(fonts)); // Converte o Set para um Array e atualiza o estado
    }, [sections]);

  // TODO - remover essa parte daqui
  // gera a pagina de preview
  const handleOpenNewTab = () => {
    const googleFontsLink = `
    <link href="https://fonts.googleapis.com/css2?${usedFonts
      .map((font) => `family=${font.replace(/ /g, "+")}`) // Substitui espaços por "+"
      .join("&")}&display=swap" rel="stylesheet">
  `;

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Preview</title>
          ${googleFontsLink}
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
          </style>
        </head>
        <body>
          ${sections
            .map((section) =>
              ReactDOMServer.renderToString(renderSection(section))
            )
            .join("")}
        </body>
        </html>
      `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const blobURL = URL.createObjectURL(blob);

    window.open(blobURL, "_blank");
  };

  return (
    <div className="flex h-screen bg-background">
      <main className="flex-1 px-6 overflow-auto">
        <div className="w-full max-w-screen-2xl mx-auto">
          <div className="fixed left-0 right-0 p-6 bg-white border-b z-[9999]">
            <header className="max-w-screen-2xl mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold">Landing Page Maker</h1>
              <div className="flex items-center space-x-2 bg-muted p-1 rounded-md">
                <button
                  size="icon"
                  aria-label="Visualizar página final"
                  onClick={handleOpenNewTab}
                >
                  <Eye className="h-4 w-4" />
                </button>
                <button
                  size="icon"
                  variant={previewDevice === "desktop" ? "secondary" : "ghost"}
                  onClick={() => setPreviewDevice("desktop")}
                  aria-label="Switch to desktop preview"
                >
                  <Monitor className="h-4 w-4" />
                </button>
                <button
                  size="icon"
                  variant={previewDevice === "mobile" ? "secondary" : "ghost"}
                  onClick={() => setPreviewDevice("mobile")}
                  aria-label="Switch to mobile preview"
                >
                  <Smartphone className="h-4 w-4" />
                </button>
              </div>
              <div className="max-w-[100px] w-full">
                <button onClick={handleSave} className="w-full bg-slate-900 text-white py-2 rounded">
                  Publicar
                </button>
              </div>
            </header>
          </div>
          {/* grid grid-cols-1 lg:grid-cols-2  */}
          <div className="w-full flex flex-col lg:flex-row gap-6 pt-24">
            <div className="fixed bottom-0 top-24">
              <div className="space-y-6 flex-col items-start w-full max-w-80 mb-1">
                <TabGroup
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <TabList className="grid w-full grid-cols-3 rounded bg-gray-100 px-1 py-2">
                    <Tab className={tabClass} value="Template">
                      Template
                    </Tab>
                    <Tab className={tabClass} value="Conteudo">
                      Conteúdo
                    </Tab>
                    <Tab className={tabClass} value="SEO">
                      SEO e Analytics
                    </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>Templates</TabPanel>
                    <TabPanel
                      value="Template"
                      className="mt-6 space-y-6 transition-all"
                    >
                      <EditPanel
                        allSections={sections}
                        setSelectedSection={setSelectedSection}
                        selectedSection={selectedSection}
                        onChange={(field, value) =>
                          handleEditSection(selectedSection.name, {
                            [field]: value,
                          })
                        }
                      />
                    </TabPanel>

                    <TabPanel
                      value="Conteudo"
                      className="mt-6 space-y-6 transition-all"
                    >
                      <Input
                        label="Page Title"
                        id="page-title"
                        placeholder="Enter page title"
                        onChange={(e) => console.log(e.target.value)}
                      />
                      <TextArea
                        label="Meta Description"
                        id="meta-description"
                        placeholder="Enter meta description"
                      />

                      <div className="flex items-center space-x-2">
                        {/* <Switch id="indexing" /> */}
                        <label htmlFor="indexing">
                          Allow search engine indexing
                        </label>
                      </div>
                    </TabPanel>

                    <TabPanel
                      value="SEO"
                      className="mt-6 space-y-6 transition-all"
                    >
                      <TextArea
                        label="Custom CSS"
                        id="custom-css"
                        placeholder="Enter custom CSS"
                      />
                      <TextArea
                        label="Custom JavaScript"
                        id="custom-js"
                        placeholder="Enter custom JavaScript"
                      />
                    </TabPanel>
                  </TabPanels>
                </TabGroup>
              </div>
            </div>

            {/* Preview Panel */}
            <div className="space-y-4 w-full ml-[22rem]">
              <div
                className={`border rounded-lg overflow-hidden ${
                  previewDevice === "mobile"
                    ? "w-full max-w-[430px] mx-auto"
                    : "w-full"
                }`}
              >
                <div className="bg-white overflow-y-auto">
                  {/* Placeholder for actual page preview */}
                  <div className="w-full h-full flex">
                    <div className="w-full">
                      {sections.map((section, index) => (
                        <div
                          key={index}
                          onClick={() => setSelectedSection(section)}
                        >
                          {renderSection(section)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
