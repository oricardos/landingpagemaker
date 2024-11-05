import React from "react";

export const HeroSection = ({ data, onUpdate }) => {
  return (
    <section
      className={`flex gap-8 items-center justify-center p-8 ${data.sectionBackgroundColor}`}
      style={{
        backgroundColor: data.backgroundColor,
        backgroundImage: data.backgroundImgSrc
          ? `url(${data.backgroundImgSrc})`
          : undefined,
        backgroundSize: "cover",
      }}
    >
      {/* Imagem sobreposta do lado esquerdo */}
      {data.overlayImgSrc && (
        <img
          src={data.overlayImgSrc}
          alt="Imagem de sobreposição"
          className="object-cover"
          style={{ width: "33%" }}
        />
      )}

      {/* Bloco de texto */}
      <div className="w-2/4 text-left space-y-4 relative z-10">
        {/* Subtítulo */}
        <h3 className={`${data.subtitleFont} ${data.subtitleColor}`}>
          {data.subtitleText}
        </h3>

        {/* Título */}
        <h1 className={`${data.titleFont} ${data.titleColor}`}>
          {data.titleText}
        </h1>

        {/* Texto descritivo */}
        <p className={`${data.contentFont} ${data.contentColor} mt-4`}>
          {data.contentText}
        </p>

        {/* Botão call-to-action */}
        <a
        style={{ backgroundColor: data.buttonColor, color: data.buttonTextColor }}
          href={data.buttonLink}
          className={`inline-block mt-6 py-2 px-4 rounded`}
        >
          {data.buttonText}
        </a>
      </div>
    </section>
  );
};
