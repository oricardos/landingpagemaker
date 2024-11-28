import React, { useEffect, useRef } from "react";
import { usePreviewDevice } from "../../contexts/PreviewDeviceContext";
import { getResponsiveClasses } from "../../utils/getResponsiveClasses";
import { scrollToSection } from "../../utils/scrollToSection";

export const HeroLeadSection = React.memo(({ data, onUpdate }) => {
  const previewDevice = usePreviewDevice();
  const sectionRef = useRef(null);

  // useEffect(() => {
  //   scrollToSection(data.show, sectionRef);
  // }, [data]);

  return (
    <>
      {data.show && (
        <section
          ref={sectionRef}
          id="hero-lead"
          style={{
            backgroundColor: data.backgroundColor,
          }}
          className={`w-full`}
        >
          <div
            className="relative"
            style={{
              backgroundColor: data.sectionBackgroundColor,
            }}
          >
            <div className="mx-auto max-w-7xl">
              {/* <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl"> */}
              <div
                className={getResponsiveClasses(
                  "relative z-10 pt-14",
                  { mobile: "", desktop: "lg:w-full lg:max-w-2xl" },
                  previewDevice
                )}
              >
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className={getResponsiveClasses(
                    "absolute inset-y-0 right-0 h-full w-80 translate-x-1/2 transform hidden",
                    {
                      desktop: "lg:block",
                    },
                    previewDevice
                  )}
                >
                  <polygon
                    fill={data.sectionBackgroundColor || "#fff"}
                    points="0,0 90,0 50,100 0,100"
                  />
                </svg>

                {/* <div className="relative px-6 py-32  "> */}
                <div
                  className={getResponsiveClasses(
                    "relative px-6 py-32",
                    { mobile: "sm:py-40", desktop: "lg:px-8 lg:py-56 lg:pr-0" },
                    previewDevice
                  )}
                >
                  <div
                    className={getResponsiveClasses("mx-auto max-w-2xl", {
                      desktop: "lg:mx-0 lg:max-w-xl",
                    })}
                  >
                    <div
                      className={getResponsiveClasses("pointer-events-none", {
                        mobile: "sm:flex",
                      })}
                    >
                      {/* logo */}
                      {data.logoSrc && (
                        <img
                          src={data.logoSrc}
                          alt="Logomarca"
                          className="h-12 mb-4 pointer-events-none"
                        />
                      )}
                    </div>
                    <h1
                      style={{
                        color: data.titleColor,
                        fontFamily: data.titleFont,
                      }}
                      className={getResponsiveClasses(
                        "text-pretty text-5xl font-semibold tracking-tight",
                        { mobile: "sm:text-7xl" },
                        previewDevice
                      )}
                    >
                      {data.titleText}
                    </h1>
                    <p
                      style={{
                        color: data.subtitleColor,
                        fontFamily: data.subtitleFont,
                      }}
                      className={getResponsiveClasses(
                        "mt-8 text-pretty text-lg font-medium",
                        { mobile: "sm:text-xl/8" },
                        previewDevice
                      )}
                    >
                      {data.subtitleText}
                    </p>

                    {/* Formulário de captação */}
                    <form className="space-y-3 mt-6">
                      <div
                        className={getResponsiveClasses(
                          "grid grid-cols-1  gap-4",
                          { mobile: "", desktop: "lg:gap-6 md:grid-cols-2" },
                          previewDevice
                        )}
                      >
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

                    <div className="mt-4 flex items-center gap-x-6">
                      <a
                        style={{
                          backgroundColor: data.buttonColor,
                          color: data.buttonTextColor,
                        }}
                        href={data.buttonLink}
                        className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        {data.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"> */}
            <div
              className={getResponsiveClasses(
                "bg-gray-50",
                {
                  mobile: "",
                  desktop: "lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2",
                },
                previewDevice
              )}
            >
              <img
                alt=""
                src={data.backgroundImgSrc}
                // className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
                className={getResponsiveClasses(
                  "aspect-[3/2] object-cover",
                  { mobile: "", desktop: "lg:aspect-auto lg:size-full" },
                  previewDevice
                )}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
});
