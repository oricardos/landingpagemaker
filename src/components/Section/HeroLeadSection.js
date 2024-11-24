import React from "react";

export const HeroLeadSection = ({ data, onUpdate }) => {
  return (
    <>
      {data.show && (
        <div
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
              <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute inset-y-0 right-0 hidden h-full w-80 translate-x-1/2 transform lg:block"
                >
                  <polygon
                    fill={data.sectionBackgroundColor || "#fff"}
                    points="0,0 90,0 50,100 0,100"
                  />
                </svg>

                <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <div className="hidden sm:flex pointer-events-none">
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
                      className="text-pretty text-5xl font-semibold tracking-tight sm:text-7xl"
                    >
                      {data.titleText}
                    </h1>
                    <p
                      style={{
                        color: data.subtitleColor,
                        fontFamily: data.subtitleFont,
                      }}
                      className="mt-8 text-pretty text-lg font-medium sm:text-xl/8"
                    >
                      {data.subtitleText}
                    </p>

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
            <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                alt=""
                src={data.backgroundImgSrc}
                className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
              />
            </div>
            {/* <div
              style={{
                backgroundImage: `url(${data.backgroundImgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
              //  className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
            >
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};
