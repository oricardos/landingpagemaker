import React from "react";
import EditForm from "./EditForm";

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
            key={index}
            className="border-b p-2 cursor-pointer"
            onClick={() => setSelectedSection(section)}
          >
            {section.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-[calc(100vh-16rem)]">
      <h3 className="pb-2 border-b">
        Editar <span className="font-bold">{selectedSection.name}</span>
      </h3>
      <EditForm sectionData={selectedSection} onChange={onChange} />
    </div>
  );
};

export default EditPanel;
