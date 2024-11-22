// import React from "react";
// import { X } from "lucide-react";

// export const FinalPage = ({
//   viewPage,
//   setViewPage,
//   sections,
//   renderSection,
// }) => {
//   if (!viewPage) {
//     return null;
//   }
//   return (
//     <div className="absolute top-0 bottom-0 left-0 right-0 bg-white">
//       <>
//         <button className="">
//           <X size={24} onClick={() => setViewPage(false)} />
//         </button>
//         {sections.map((section, index) => (
//           <div key={index}>{renderSection(section)}</div>
//         ))}
//       </>
//     </div>
//   );
// };

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
        <button>
          <X size={24} onClick={() => setViewPage(false)} />
        </button>
        {sections.map((section, index) => (
          <div key={index}>{renderSection(section)}</div>
        ))}
        <button
          onClick={() => console.log("Preview in new tab")}
          className="bg-blue-500 text-white px-4 py-2 mt-4"
        >
          Preview in New Tab
        </button>
      </>
    </div>
  );
};
