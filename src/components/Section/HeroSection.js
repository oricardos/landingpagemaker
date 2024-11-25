import React from "react";
import { getResponsiveClasses } from "../../utils/getResponsiveClasses";
import { usePreviewDevice } from "../../contexts/PreviewDeviceContext";

export const HeroSection = ({ data, onUpdate }) => {
  const previewDevice = usePreviewDevice();
  return (
    <>
      {data.show && (
        <section>
          <div
            style={{
              backgroundColor: data.sectionBackgroundColor,
            }}
            className="relative"
          >
            <div
              className={getResponsiveClasses(
                "mx-auto max-w-7xl items-center flex gap-4",
                {
                  mobile: "sm:flex-col",
                  desktop: "lg:flex lg:justify-between lg:px-8 xl:justify-end ",
                },
                previewDevice
              )}
            >
              <div
                className={getResponsiveClasses(
                  "",
                  {
                    desktop:
                      "lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:right-1/2 xl:w-1/2",
                  },
                  previewDevice
                )}
              >
                <div
                  className={getResponsiveClasses(
                    "relative",
                    {
                      desktop: "lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0",
                    },
                    previewDevice
                  )}
                >
                  <img
                    src={
                      data.overlayImgSrc ||
                      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                    }
                    alt="Imagem de sobreposição"
                    className="object-cover"
                  />
                </div>
              </div>

              <div
                className={getResponsiveClasses(
                  "",
                  { mobile: "sm:mx-4", desktop: "lg:contents" },
                  previewDevice
                )}
              >
                <div
                  className={getResponsiveClasses(
                    "mx-auto max-w-2xl pb-24 pt-16",
                    {
                      mobile: "sm:pb-32 sm:pt-20",
                      desktop:
                        "lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2",
                    }
                  )}
                >
                  <h1
                    style={{
                      color: data.titleColor,
                      fontFamily: data.titleFont,
                    }}
                    className={getResponsiveClasses(
                      "mt-2 text-pretty text-4xl font-semibold tracking-tight",
                      { mobile: "sm:text-5xl" },
                      previewDevice
                    )}
                  >
                    {data.titleText}
                  </h1>
                  <h3
                    style={{
                      color: data.subtitleColor,
                      fontFamily: data.subtitleFont,
                    }}
                    className="mt-6 text-xl/8"
                  >
                    {data.subtitleText}
                  </h3>
                  <div
                    className="ql-editor"
                    style={{
                      color: data.contentColor,
                      fontFamily: data.contentFont,
                    }}
                    dangerouslySetInnerHTML={{ __html: data.contentText }}
                  />

                  {/* Botão call-to-action */}
                  <a
                    style={{
                      backgroundColor: data.buttonColor,
                      color: data.buttonTextColor,
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={data.buttonLink}
                    className={`inline-block mt-6 py-2 px-4 rounded`}
                  >
                    {data.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
