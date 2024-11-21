import React from "react";

export const HeroSection = ({ data, onUpdate }) => {
  return (
    <>
      {data.show && (
        // <section
        //   className={`flex gap-8 items-center justify-center p-8 ${data.sectionBackgroundColor}`}
        //   style={{
        //     backgroundColor: data.backgroundColor,
        //     backgroundImage: data.backgroundImgSrc
        //       ? `url(${data.backgroundImgSrc})`
        //       : undefined,
        //     backgroundSize: "cover",
        //   }}
        // >
        //   {/* Imagem sobreposta do lado esquerdo */}
        //   {data.overlayImgSrc && (
        //     <img
        //       src={data.overlayImgSrc}
        //       alt="Imagem de sobreposição"
        //       className="object-cover"
        //       style={{ width: "33%" }}
        //     />
        //   )}

        //   {/* Bloco de texto */}
        //   <div className="w-2/4 text-left space-y-4 relative z-10">
        //     {/* Subtítulo */}
        //     <h3 className={`${data.subtitleFont} ${data.subtitleColor}`}>
        //       {data.subtitleText}
        //     </h3>

        //     {/* Título */}
        //     <h1 className={`${data.titleFont} ${data.titleColor}`}>
        //       {data.titleText}
        //     </h1>

        //     {/* Texto descritivo */}
        //     <p className={`${data.contentFont} ${data.contentColor} mt-4`}>
        //       {data.contentText}
        //     </p>

        //     {/* Botão call-to-action */}
        //     <a
        //     style={{ backgroundColor: data.buttonColor, color: data.buttonTextColor }}
        //       href={data.buttonLink}
        //       className={`inline-block mt-6 py-2 px-4 rounded`}
        //     >
        //       {data.buttonText}
        //     </a>
        //   </div>
        // </section>

        <section>
          <div
            style={{
              backgroundColor: data.sectionBackgroundColor,
            }}
            className="relative"
          >
            <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
              <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                  <img
                    src={data.overlayImgSrc}
                    alt="Imagem de sobreposição"
                    className="absolute inset-0 size-full object-cover"
                    // style={{ width: "33%" }}
                  />
                  {/* <img
                alt=""
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
                className="absolute inset-0 size-full bg-gray-50 object-cover"
              /> */}
                </div>
              </div>
              <div className="px-6 lg:contents">
                <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
                  {/* <p className="text-base/7 font-semibold text-indigo-600">
                Deploy faster
              </p> */}
                  <h1
                    style={{
                      color: data.titleColor,
                      fontFamily: data.titleFont,
                    }}
                    className="mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl"
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
