// import React from "react";

// export const Input = ({
//   id,
//   label,
//   name,
//   type,
//   placeholder,
//   onChange,
//   value,
//   className,
// }) => {
//   return (
//     <div>
//       <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
//         {label}
//       </label>
//       <div className="mt-0">
//         <input
//           id={id}
//           name={name}
//           type={type}
//           placeholder={placeholder}
//           onChange={onChange}
//           defaultValue={value}
//           className={`block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm/6 ${className}`}
//         />
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import UploadIcon from "../../assets/images/upload.png";
import { XMarkIcon } from "@heroicons/react/20/solid";

export const Input = ({
  id,
  label,
  name,
  type,
  placeholder,
  onChange,
  value,
  className,
}) => {
  const [filePreview, setFilePreview] = useState(null);
  const [fileData, setFileData] = useState({
    name: "",
    size: 0,
  });

  const formatFileSize = (sizeInBytes) => {
    if (sizeInBytes < 1024) {
      return `${sizeInBytes} bytes`; // Arquivos muito pequenos
    } else if (sizeInBytes < 1024 * 1024) {
      const sizeInKB = sizeInBytes / 1024;
      return `${sizeInKB.toFixed(2)} KB`; // Exibir em KB
    } else {
      const sizeInMB = sizeInBytes / (1024 * 1024);
      return `${sizeInMB.toFixed(2)} MB`; // Exibir em MB
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const MAX_FILE_SIZE = 2 * 1024 * 1024;

    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        alert("O arquivo excede o tamanho máximo permitido de 2 MB.");
        return;
      }

      setFileData({
        name: file.name,
        size: formatFileSize(file.size),
      });

      const reader = new FileReader();
      reader.onload = () => {
        setFilePreview(reader.result);
        onChange && onChange(e);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFile = () => {
    setFilePreview(null);
    setFileData({
      name: "",
      size: 0,
    });
    onChange && onChange({ target: { name, value: "" } });
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
        {label}
      </label>
      {type === "file" ? (
        <label
          htmlFor={id}
          className="flex items-center p-2 gap-3 rounded border border-gray-300 border-dashed bg-gray-50 cursor-pointer relative"
        >
          <img
            className="h-10 w-auto max-w-10 max-h-10 object-contain"
            src={filePreview ? filePreview : UploadIcon}
            alt="upload icon"
            width="512"
            height="512"
          />
          <div className="space-y-2">
            {fileData.name ? (
              <>
                <h4 className="text-base font-semibold text-gray-700">
                  {fileData.name}
                </h4>
                <span className="text-sm text-gray-500">{fileData.size}</span>
              </>
            ) : (
              <>
                <h4 className="text-base font-semibold text-gray-700">
                  Enviar imagem
                </h4>
                <span className="text-sm text-gray-500">Máx. 2 mb </span>
              </>
            )}
          </div>
          <input
            type="file"
            id={id}
            name={name}
            hidden
            onChange={handleFileChange}
          />
          {filePreview && (
            <XMarkIcon
              onClick={handleRemoveFile}
              className="h-6 w-6 text-red-500 cursor-pointer absolute top-2 right-2"
            />
          )}
        </label>
      ) : (
        <div className="mt-0">
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            defaultValue={value}
            className={`block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm/6 ${className}`}
          />
        </div>
      )}
    </div>
  );
};
