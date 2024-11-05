import React from "react";
import EditForm from "./EditForm";

const EditPanel = ({ selectedSection, onChange }) => {
  if (!selectedSection) {
    return (
      <div className="edit-panel">
        <h3>Editar</h3>
        <p>Selecione uma seção para editar</p>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-16rem)]">
      <h3 className="pb-2 border-b">Editar <span className="font-bold">{selectedSection.name}</span></h3>
      <EditForm sectionData={selectedSection} onChange={onChange} />
    </div>
  );
};

export default EditPanel;
