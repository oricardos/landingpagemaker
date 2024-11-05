import React from "react";
import { X } from "lucide-react";

export const FinalPage = ({
  viewPage,
  setViewPage,
  sections,
  renderSection,
}) => {
  if (!viewPage) {
    return null;
  }
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 bg-white">
      <>
        <button className="">
          <X size={24} onClick={() => setViewPage(false)} />
        </button>
        {sections.map((section, index) => (
          <div key={index}>{renderSection(section)}</div>
        ))}
      </>
    </div>
  );
};
