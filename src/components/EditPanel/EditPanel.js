import React from "react";
import EditForm from "./EditForm";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/20/solid";

const EditPanel = ({
  allSections,
  setSelectedSection,
  selectedSection,
  onChange,
}) => {
  if (!selectedSection) {
    return (
      <div className="edit-panel">
        {allSections.map((section, index) => (
          <div
            className="w-full flex justify-between border-b p-2 cursor-pointer"
            onClick={() => setSelectedSection(section)}
          >
            <div key={index} className="">
              {section.name}
            </div>
            <ChevronRightIcon className="w-6 h-6" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-16rem)]">
      <div className="flex">
        <h3 className="pb-2 border-b">
          Editar <span className="font-bold">{selectedSection.name}</span>
        </h3>
        <XMarkIcon
          className="w-6 h-6 ml-auto cursor-pointer"
          onClick={() => setSelectedSection(null)}
        />
      </div>
      <EditForm sectionData={selectedSection} onChange={onChange} />
    </div>
  );
};

export default EditPanel;
