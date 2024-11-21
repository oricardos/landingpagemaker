import React from "react";

export const FormSectionWrapper = ({ title, children }) => {
  return (
    <div>
      <h3 className="text-md font-medium mb-2 text-[#868F97]">{title}</h3>
      <div className="space-y-4 p-2 bg-white rounded">{children}</div>
    </div>
  );
};