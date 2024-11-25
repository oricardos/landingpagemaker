import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const CustomContent = ({ name, value, onChange }) => {
  const [content, setContent] = useState(value);
  const editorRef = useRef(null);

  const handleChange = (evt) => {
    setContent(evt);

    const syntheticEvent = {
      target: {
        name: name,
        value: evt,
      },
    };

    onChange(syntheticEvent);
  };

  /**
   * Opções da barra de ferramentas do ReactQuill.
   *
   * @description
   * Opções de formatação e funcionalidades que serão exibidas na barra de ferramentas
   * do editor de texto ReactQuill.
   *
   * @type {Array}
   */
  const toolbarOptions = [
    // Botões com estilos de negrito e itálico
    ["bold", "italic"],

    // Botões para definir os níveis de cabeçalho (h1, h2)
    [{ header: 1 }, { header: 2 }],

    // Botões para alinhar o texto (esquerda, centralizado, direita, justificado)
    [{ align: [] }],

    // Botões para adicionar links, imagens e vídeos
    ["link", "image", "video"],

    // Botão para remover a formatação do texto
    ["clean"],
  ];

  /**
   * Módulos do ReactQuill.
   *
   * @description
   * Configurações do módulo do editor de texto ReactQuill, incluindo as opções da barra
   * de ferramentas definidas anteriormente.
   *
   * @type {Object}
   */
  // const modules = {
  //     toolbar: toolbarOptions,
  // };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <>
      <label>Texto</label>
      <div className="">
        <ReactQuill
          ref={editorRef}
          id={name}
          name={name}
          theme="snow"
          value={content}
          onChange={handleChange}
          modules={modules}
        />
      </div>
    </>
  );
};
