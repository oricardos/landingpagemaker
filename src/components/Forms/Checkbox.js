// import React from "react";

import { useState } from "react";

// export const Checkbox = ({ name, id, label, value, onChange }) => {
//   const handleChange = (e) => {
//     onChange({
//       target: {
//         name: name,
//         value: e.target.checked,
//       },
//     });
//   };
//   return (
//     <div className="flex h-6 items-center">
//       <label htmlFor={id} className="text-sm text-gray-900 flex items-center gap-2">
//         <input
//           id={id}
//           name={name}
//           type="checkbox"
//           checked={value}
//           onChange={handleChange}
//           className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//         />

//         {label}
//       </label>
//     </div>
//   );
// };

export const Checkbox = ({ name, id, label, value, onChange }) => {
  const [checked, setChecked] = useState(value);
  const handleChange = (e) => {
    console.log('funciona pfv', e.target.checked);
    setChecked(e.target.checked);
    onChange({
      target: {
        name,
        value: e.target.checked,
      },
    });
  };

  return (
    <div className="flex h-6 items-center">
      <label htmlFor={id} className="text-sm text-gray-900 flex items-center gap-2">
        <input
          id={id || name} // Use `id` ou `name` como fallback
          name={name}
          type="checkbox"
          checked={checked} // Garante que `value` seja booleano
          onChange={handleChange}
          className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        {label}
      </label>
    </div>
  );
};

