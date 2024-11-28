"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Template from "../../assets/images/imobiliaria.png";
import EditPanel from "../EditPanel/EditPanel";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Monitor, Smartphone, Eye } from "lucide-react";
import { Input } from "../Forms/Input";
import { TextArea } from "../Forms/TextArea";
import { HeroLeadSection } from "../Section/HeroLeadSection";
import { HeroSection } from "../Section/HeroSection";
import { IconsSection } from "../Section/IconsSection";
import { FooterSection } from "../Section/FooterSection";
import { sectionConfig } from "../../utils/sectionConfig";
import { VideoSection } from "../Section/VideoSection";
import { MapSection } from "../Section/MapSection";
import { PreviewDeviceProvider } from "../../contexts/PreviewDeviceContext";
import { CheckIcon } from "@heroicons/react/20/solid";
import SectionRenderer from "../SectionRenderer/SectionRenderer";

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

  const handleEditSection = (name, updatedField) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.name === name
          ? {
              ...section,
              fields: section.fields.map((field) =>
                field.name === updatedField.name
                  ? { ...field, value: updatedField.value }
                  : field
              ),
            }
          : section
      )
    );
  };

  const renderSection = (section) => {
    // transforma os fields em um objeto
    const data = section?.fields.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});

    switch (section.name) {
      case "Hero Lead":
        return (
          <HeroLeadSection
            data={data}
            onUpdate={(field, value) =>
              handleUpdateSectionData(section.name, field, value)
            }
          />
        );
      case "Hero":
        return (
          <HeroSection
            data={data}
            onUpdate={(field, value) =>
              handleUpdateSectionData(section.name, field, value)
            }
          />
        );
      case "Ícones":
        return (
          <IconsSection
            data={data}
            onUpdate={(field, value) =>
              handleUpdateSectionData(section.name, field, value)
            }
          />
        );
      case "Vídeo":
        return (
          <VideoSection
            data={data}
            onUpdate={(field, value) =>
              handleUpdateSectionData(section.name, field, value)
            }
          />
        );
      case "Mapa":
        return (
          <MapSection
            data={data}
            onUpdate={(field, value) =>
              handleUpdateSectionData(section.name, field, value)
            }
          />
        );
      case "Footer":
        return (
          <FooterSection
            data={data}
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
      const data = section?.fields.reduce((acc, field) => {
        acc[field.name] = field.value;
        return acc;
      }, {});
      // const data = section.data;
      const fontKeys = Object.keys(data).filter((key) => key.includes("Font"));
      fontKeys.forEach((fontKey) => {
        fonts.add(data[fontKey]); // Adiciona as fontes ao Set (garantindo unicidade)
      });
    });

    setUsedFonts(Array.from(fonts));
  }, [sections]);

  // TODO - remover essa parte daqui
  // gera a pagina de preview
  const handleOpenNewTab = () => {
    const newTab = window.open("", "_blank");

    const googleFontsLink = `
    <link href="https://fonts.googleapis.com/css2?${usedFonts
      .map((font) => `family=${font}`)
      .join("&")}&display=swap" rel="stylesheet">
  `;

    console.log(googleFontsLink);

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview</title>
        <script src="https://cdn.tailwindcss.com"></script>
         ${googleFontsLink}
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        </style>
      </head>
      <body>
        <div id="root"></div>
      </body>
      </html>
    `;

    newTab.document.open();
    newTab.document.write(htmlContent);
    newTab.document.close();

    newTab.onload = () => {
      const rootElement = newTab.document.getElementById("root");

      const NewTabContent = () => (
        <div>
          {sections.map((section, index) => (
            // <div key={index}>{renderSection(section)}</div>
            <div key={index}>
              <SectionRenderer section={section} />
            </div>
          ))}
        </div>
      );

      const root = ReactDOM.createRoot(rootElement);
      root.render(<NewTabContent />);
    };
  };

  return (
    <div className="flex h-screen bg-background">
      <main className="flex-1 px-6 overflow-auto">
        <div className="w-full max-w-screen-2xl mx-auto">
          <div className="fixed left-0 right-0 p-6 bg-white border-b z-[9999]">
            <header className="max-w-screen-2xl mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold">Landing Page Maker</h1>
              <div className="flex items-center space-x-4 bg-muted p-1 rounded-md">
                <button
                  size="icon"
                  aria-label="Visualizar página final"
                  onClick={handleOpenNewTab}
                >
                  <Eye className="h-4 w-4" />
                </button>
                <button
                  title="Visualização em desktop"
                  className={`${
                    previewDevice === "desktop"
                      ? "bg-gray-200 text-black"
                      : "bg-white text-gray-900"
                  } px-2 py-1 rounded`}
                  size="icon"
                  variant={previewDevice === "desktop" ? "secondary" : "ghost"}
                  onClick={() => setPreviewDevice("desktop")}
                  aria-label="Switch to desktop preview"
                >
                  <Monitor className="h-4 w-4" />
                </button>
                <button
                  title="Visualização em mobile"
                  className={`${
                    previewDevice === "mobile"
                      ? "bg-gray-200 text-black"
                      : "bg-white text-gray-900"
                  } px-2 py-1 rounded`}
                  size="icon"
                  variant={previewDevice === "mobile" ? "secondary" : "ghost"}
                  onClick={() => setPreviewDevice("mobile")}
                  aria-label="Switch to mobile preview"
                >
                  <Smartphone className="h-4 w-4" />
                </button>
              </div>
              <div className="max-w-[100px] w-full">
                <button
                  onClick={handleSave}
                  className="w-full bg-slate-900 text-white py-2 rounded"
                >
                  Publicar
                </button>
              </div>
            </header>
          </div>
          {/* grid grid-cols-1 lg:grid-cols-2  */}
          <div className="w-full flex flex-col lg:flex-row gap-6 pt-24">
            <div className="fixed bottom-0 top-24">
              <div className="space-y-6 flex-col items-start w-full max-w-80 mb-1">
                <TabGroup value={activeTab} className="w-full">
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
                    <TabPanel value="Template">
                      <div className="my-2 flex flex-col relative">
                        <div className="absolute top-2 left-2">
                          <CheckIcon className="h-4 w-4 bg-white rounded-full text-green-600" />
                        </div>
                        <img
                          className="rounded"
                          src={Template}
                          alt="Template"
                        />
                        <div>
                          <h2 className="text-lg font-semibold mt-2">Natus</h2>
                          <p className="text-gray-500 text-sm">
                            Template de landing page para imobiliárias, com um
                            design moderno e elegante.
                          </p>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel
                      value="Conteudo"
                      className="mt-6 space-y-6 transition-all"
                    >
                      <EditPanel
                        allSections={sections}
                        setSelectedSection={setSelectedSection}
                        selectedSection={selectedSection}
                        onChange={(name, value) =>
                          handleEditSection(selectedSection.name, {
                            name,
                            value,
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
            <PreviewDeviceProvider device={previewDevice}>
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
            </PreviewDeviceProvider>
          </div>
        </div>
      </main>
    </div>
  );
};
