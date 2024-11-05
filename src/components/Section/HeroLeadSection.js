import React from "react";

export const HeroLeadSection = ({ data, onUpdate }) => {
  return (
    <div
      style={{
        backgroundColor: data.backgroundColor,
        backgroundImage: data.backgroundImgSrc
          ? `url(${data.backgroundImgSrc})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`w-full`}
    >
      <section className={`flex h-[80vh] items-center p-8 max-w-[1140px] mx-auto`}>
        <div className="w-full md:w-2/4 space-y-4">
          {/* Logomarca */}
          {data.logoSrc && (
            <img src={data.logoSrc} alt="Logomarca" className="h-12 mb-4" />
          )}

          {/* Título */}
          <h1
            style={{ color: data.titleColor }}
            className={`${data.titleFont}`}
          >
            {data.titleText}
          </h1>

          {/* Subtítulo */}
          <h2
            style={{ color: data.subtitleColor }}
            className={`${data.subtitleFont}`}
          >
            {data.subtitleText}
          </h2>

          {/* Formulário de captação */}
          <form className="space-y-3 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder={data.formPlaceholderName}
              className={`w-full p-2 border border-gray-300 rounded focus:outline-none ${data.formTextColor}`}
            />
            <input
              type="text"
              placeholder={data.formPlaceholderPhone}
              className={`w-full p-2 border border-gray-300 rounded focus:outline-none ${data.formTextColor}`}
            />
            </div>
            <input
              type="email"
              placeholder={data.formPlaceholderEmail}
              className={`w-full p-2 border border-gray-300 rounded focus:outline-none ${data.formTextColor}`}
            />
          </form>

          {/* Botão call-to-action */}
          <a
          style={{
            backgroundColor: data.buttonColor,
            color: data.buttonTextColor
          }}
            href={data.buttonLink}
            className={`inline-block w-full text-center mt-4 py-2 px-4 rounded`}
          >
            {data.buttonText}
          </a>
        </div>
      </section>
    </div>
  );
};
