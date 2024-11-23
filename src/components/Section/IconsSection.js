import React from "react";
import * as Icons from "lucide-react";

export const IconsSection = ({ data, onUpdate }) => {
  // console.log(data);
  return (
    <>
      {data.show && (
        // <section className={`py-8 ${data.sectionBackgroundColor}`}>
        //   <div className="max-w-5xl mx-auto flex justify-around items-center">
        //     {data.icons.slice(0, 5).map((item, index) => (
        //       <div key={index} className="flex flex-col items-center space-y-2">
        //         {/* Ícone */}
        //         <div className={`text-4xl ${data.iconColor}`}>{item.icon}</div>

        //         {/* Título abaixo do ícone */}
        //         <p className={`text-center ${data.iconColor}`}>{item.title}</p>
        //       </div>
        //     ))}
        //   </div>
        // </section>
        <div
          style={{ backgroundColor: data.sectionBackgroundColor }}
          className="py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2
                style={{ color: data.titleColor, fontFamily: data.titleFont }}
                className="mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl lg:text-balance"
              >
                {data.titleText}
              </h2>
              <h3
                style={{
                  color: data.subtitleColor,
                  fontFamily: data.subtitleFont,
                }}
                className="mt-6 text-lg/8"
              >
                {data.subtitleText}
              </h3>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {data.icons.map((feature, index) => {
                  // console.log("aqui: ", feature);
                  return (
                    <div key={index} className="relative pl-16">
                      <dt
                        style={{
                          color: data.iconTitleColor,
                          fontFamily: data.iconTitleFont,
                        }}
                        className="text-base/7 font-semibold"
                      >
                        <div
                          style={{
                            backgroundColor: data.iconBackgroundColor,
                          }}
                          className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg"
                        >
                          {/* {feature.icon ? (
                            <feature.icon
                              style={{ color: data.iconColor }}
                              aria-hidden="true"
                              className="size-6"
                            />
                          ) : null} */}
                          {feature.icon && Icons[feature.icon]
                            ? React.createElement(Icons[feature.icon], {
                                style: { color: data.iconColor },
                                "aria-hidden": "true",
                                className: "size-6",
                              })
                            : null}
                        </div>
                        {feature.iconTitle}
                      </dt>
                      <dd
                        style={{
                          color: data.iconSubtitleColor,
                          fontFamily: data.iconSubtitleFont,
                        }}
                        className="mt-2 text-base/7"
                      >
                        {feature.iconSubtitle}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
