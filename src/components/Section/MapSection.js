import React, { useEffect, useRef } from "react";
import { usePreviewDevice } from "../../contexts/PreviewDeviceContext";
import { getResponsiveClasses } from "../../utils/getResponsiveClasses";
import { scrollToSection } from "../../utils/scrollToSection";

export const MapSection = ({ data, onUpdate }) => {
  const previewDevice = usePreviewDevice();
  const sectionRef = useRef(null);
  const isMobile = window.innerWidth < 768;
  const map = data.mapEmbedUrl;
  const renderMap = isMobile
    ? map.replace(/width="[^"]*"/, 'width="100%"')
    : map;

  // useEffect(() => {
  //   scrollToSection(data.show, sectionRef);
  // }, [data]);

  return (
    <>
      {data.show && (
        <section
          ref={sectionRef}
          id="map"
          style={{ backgroundColor: data.sectionBackgroundColor }}
          className={`py-8 px-4`}
        >
          <div
            className={getResponsiveClasses(
              "max-w-7xl mx-auto flex flex-col",
              {
                mobile: "flex-col",
                desktop: "md:flex-row md:space-x-6",
              },
              previewDevice
            )}
          >
            {/* Bloco de Texto */}
            <div className={`flex-1 mb-6 md:mb-0`}>
              {data.titleText && (
                <h2
                  style={{ color: data.titleColor, fontFamily: data.titleFont }}
                  className="text-2xl font-semibold mb-1"
                >
                  {data.titleText}
                </h2>
              )}
              <div
                className="ql-editor content"
                style={{
                  color: data.contentColor,
                  fontFamily: data.contentFont,
                }}
                dangerouslySetInnerHTML={{ __html: data.contentText }}
              />
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
              <div
                className="ql-editor content"
                style={{
                  color: data.mapSubtitleColor,
                  fontFamily: data.mapSubtitleFont,
                }}
                dangerouslySetInnerHTML={{ __html: data.mapSubtitleText }}
              />
              <div className="flex-1 overflow-hidden">
                <div
                  className="w-full sm:w-auto"
                  dangerouslySetInnerHTML={{
                    __html: renderMap,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
