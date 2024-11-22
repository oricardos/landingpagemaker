import React from "react";

export const MapSection = ({ data, onUpdate }) => {
  return (
    <>
      {data.show && (
        <section
          style={{ backgroundColor: data.sectionBackgroundColor }}
          className={`py-8 px-4`}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-6">
            {/* Bloco de Texto */}
            <div className={`flex-1 mb-6 md:mb-0`}>
              {data.titleText && (
                <h3
                  style={{ color: data.titleColor, fontFamily: data.titleFont }}
                  className="text-xl font-semibold mb-4"
                >
                  {data.titleText}
                </h3>
              )}
              <p
                style={{
                  color: data.contentColor,
                  fontFamily: data.contentFont,
                }}
                className="text-lg"
              >
                {data.contentText}
              </p>
            </div>

            {/* Mapa do Google Maps */}
            <div className="flex-1">
              <h5
                className="text-lg font-semibold mb-1"
                style={{
                  color: data.mapTitleColor,
                  fontFamily: data.mapTitleFont,
                }}
              >
                {data.mapTitleText}
              </h5>
              <p
                style={{
                  color: data.mapSubTitleColor,
                  fontFamily: data.mapSubTitleFont,
                }}
              >
                {data.mapSubTitleText}
              </p>
              <div
                className="flex-1"
                dangerouslySetInnerHTML={{ __html: data.mapEmbedUrl }}
              ></div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
