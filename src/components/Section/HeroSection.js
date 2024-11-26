import React from "react";
import { getResponsiveClasses } from "../../utils/getResponsiveClasses";
import { usePreviewDevice } from "../../contexts/PreviewDeviceContext";

export const HeroSection = ({ data, onUpdate }) => {
  const previewDevice = usePreviewDevice();
  return (
    <>
      {data.show && (
        <section
          id="hero"
          className="relative"
          style={{
            backgroundColor: data.sectionBackgroundColor,
          }}
        >
          <div
            className={getResponsiveClasses(
              "mx-auto max-w-7xl ",
              {
                mobile: "flex-col w-full",
                desktop: "lg:flex lg:justify-between lg:px-8 xl:justify-end",
              },
              previewDevice
            )}
          >
            <div
              className={getResponsiveClasses(
                "flex inset-0 ",
                {
                  mobile: "flex-col w-full h-80",
                  desktop:
                    "lg:absolute lg:w-1/2 lg:flex  lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2",
                },
                previewDevice
              )}
            >
              <div
                className={getResponsiveClasses(
                  "relative w-full h-auto lg:-ml-8 lg:grow xl:ml-0",
                  { mobile: "w-full h-auto", desktop: "lg:h-full lg:w-full" },
                  previewDevice
                )}
              >
                <img
                  alt=""
                  src={
                    data.overlayImgSrc ||
                    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  }
                  // src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
                  className={getResponsiveClasses(
                    "sm:relative md:absolute inset-y-0 object-cover w-full",
                    {
                      mobile: "w-full h-[fill-available]",
                      desktop: "h-full ",
                    },
                    previewDevice
                  )}
                />
              </div>
            </div>
            <div className="px-6 lg:contents">
              <div
                className={getResponsiveClasses(
                  "max-w-2xl pb-24 pt-16 mx-4",
                  {
                    mobile: "sm:pb-32 sm:pt-20 ",
                    desktop:
                      "mx-auto ml-4  md:ml-6 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2 2xl:ml-4 xl:ml-8",
                  },
                  previewDevice
                )}
              >
                <h1
                  style={{
                    color: data.titleColor,
                    fontFamily: data.titleFont,
                  }}
                  className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
                >
                  {data.titleText}
                </h1>
                <h2
                  style={{
                    color: data.subtitleColor,
                    fontFamily: data.subtitleFont,
                  }}
                  className="mt-6 text-xl/8"
                >
                  {data.subtitleText}
                </h2>
                <div className="mt-10 max-w-xl lg:max-w-none">
                  <div
                    className="ql-editor content"
                    style={{
                      color: data.contentColor,
                      fontFamily: data.contentFont,
                    }}
                    dangerouslySetInnerHTML={{ __html: data.contentText }}
                  />

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
      {/* {data.show && (
        <section id="hero">
          <div
            style={{
              backgroundColor: data.sectionBackgroundColor,
            }}
            className="relative"
          >
            <div
              className={getResponsiveClasses(
                "mx-auto max-w-7xl items-center flex gap-4 flex-col",
                {
                  mobile: "sm:flex-col",
                  desktop: "lg:flex-row lg:justify-between lg:px-8 xl:justify-end",
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
                    className="absolute inset-y-0 object-cover"
                  />
                </div>
              </div>

              <div
                className={getResponsiveClasses(
                  "mx-4",
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
                    className="ql-editor content"
                    style={{
                      color: data.contentColor,
                      fontFamily: data.contentFont,
                    }}
                    dangerouslySetInnerHTML={{ __html: data.contentText }}
                  />

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
      )} */}
    </>
  );
};
