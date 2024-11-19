"use client";

import { useEffect, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Monitor, Smartphone, Eye } from "lucide-react";
import { Input } from "../Forms/Input";
import { TextArea } from "../Forms/TextArea";
import EditPanel from "../EditPanel/EditPanel";
import { FinalPage } from "../FinalPage/FinalPage";
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
  const [viewPage, setViewPage] = useState(false);

  const [sections, setSections] = useState(sectionConfig);

  const [selectedSection, setSelectedSection] = useState(null);

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
      case "hero":
        return (
          <HeroSection
            data={section.data}
            onUpdate={(field, value) =>
              handleUpdateSectionData(section.name, field, value)
            }
          />
        );
      case "icons":
        return (
          <IconsSection
            data={section.data}
            onUpdate={(field, value) =>
              handleUpdateSectionData(section.name, field, value)
            }
          />
        );
      case "video":
        return (
          <VideoSection
            data={section.data}
            onUpdate={(field, value) =>
              handleUpdateSectionData(section.name, field, value)
            }
          />
        );
      case "map":
        return (
          <MapSection
            data={section.data}
            onUpdate={(field, value) =>
              handleUpdateSectionData(section.name, field, value)
            }
          />
        );
      case "footer":
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

  const tabClass =
    "border-0 rounded ring-0 outline-none data-[selected]:bg-white data-[selected]:text-gray-900 transition-all";

  return (
    <div className="flex h-screen bg-background">
      <FinalPage
        viewPage={viewPage}
        setViewPage={setViewPage}
        sections={sections}
        renderSection={renderSection}
      />
      {/* Main Content */}
      <main className="flex-1 px-6 overflow-auto">
        <div className="w-full max-w-screen-2xl mx-auto">
          <div className="fixed left-0 right-0 p-6 bg-white border-b z-[9999]">
            <header className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Landing Page Maker</h1>
              <div className="flex items-center space-x-2 bg-muted p-1 rounded-md">
                <button
                  size="icon"
                  aria-label="Visualizar página final"
                  onClick={() => setViewPage(true)}
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
                <button className="w-full bg-slate-900 text-white py-2 rounded">
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
                    <Tab className={tabClass} value="Sections">
                      Template
                    </Tab>
                    <Tab className={tabClass} value="seo">
                      Conteúdo
                    </Tab>
                    <Tab className={tabClass} value="advanced">
                      SEO e Analytics
                    </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>Templates</TabPanel>
                    <TabPanel
                      value="Sections"
                      className="mt-6 space-y-6 transition-all"
                    >
                      <EditPanel
                        selectedSection={selectedSection}
                        onChange={(field, value) =>
                          handleEditSection(selectedSection.name, {
                            [field]: value,
                          })
                        }
                      />
                    </TabPanel>

                    <TabPanel
                      value="seo"
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
                      value="advanced"
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
              {/* <h3 className="text-lg font-semibold">Preview</h3> */}
              <div
                className={`border rounded-lg overflow-hidden ${
                  previewDevice === "mobile"
                    ? "w-full max-w-[430px] mx-auto"
                    : "w-full"
                }`}
              >
                {/* <div className="bg-gray-200 p-2 text-center text-sm text-gray-600">
                  {previewDevice === "desktop"
                    ? "Desktop Preview"
                    : "Mobile Preview"}
                </div> */}
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
