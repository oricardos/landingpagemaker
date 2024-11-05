import React from "react";

export const MapSection = ({ data, onUpdate }) => {
  return (
    <section className={`py-8 px-4 ${data.sectionBackgroundColor}`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:space-x-6">
        {/* Bloco de Texto */}
        <div
          className={`flex-1 mb-6 md:mb-0`}
        >
          {data.titleText && (
            <h3 style={{color: data.titleColor}} className="text-xl font-semibold mb-4">{data.titleText}</h3>
          )}
          <p style={{color: data.contentColor}} className="text-lg">{data.contentText}</p>
        </div>

        {/* Mapa do Google Maps */}
        <div className="flex-1">
          <h5
            className="text-lg font-semibold mb-1"
            style={{ color: data.mapTitleColor }}
          >
            {data.mapTitleText}
          </h5>
          <p style={{ color: data.mapSubTitleColor }}>{data.mapSubTitleText}</p>
          <div
            className="flex-1"
            dangerouslySetInnerHTML={{ __html: data.mapEmbedUrl }}
          ></div>
        </div>
      </div>
    </section>
  );
};
