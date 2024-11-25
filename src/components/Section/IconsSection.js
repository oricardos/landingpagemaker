import React from "react";
import * as HeroiconsSolid from "@heroicons/react/20/solid";
import { getResponsiveClasses } from "../../utils/getResponsiveClasses";
import { usePreviewDevice } from "../../contexts/PreviewDeviceContext";

const RenderIcon = ({ icon, iconColor, index }) => {
  // busca o icone
  const IconComponent = HeroiconsSolid[icon];

  // valida se existe
  if (!IconComponent) {
    console.warn(`Ícone "${icon}" não encontrado em lucide-react.`);
    return null;
  }

  return (
    <div className={`flex text-[${iconColor}]`} key={index}>
      <IconComponent color={iconColor} className="size-6" />
    </div>
  );
};

export const IconsSection = ({ data, onUpdate }) => {
  const previewDevice = usePreviewDevice();
  return (
    <>
      {data.show && (
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
              {/* <dl className=" "> */}
              <dl
                className={getResponsiveClasses(
                  "grid max-w-xl grid-cols-1 gap-x-8 gap-y-10",
                  { desktop: "lg:max-w-none lg:grid-cols-2 lg:gap-y-16" },
                  previewDevice
                )}
              >
                {data.icons.map((feature, index) => {
                  return (
                    <div key={index} className="relative pl-16">
                      <dt
                        style={{
                          color: data.iconTitleColor,
                          fontFamily: data.iconTextFont,
                        }}
                        className="text-base/7 font-semibold"
                      >
                        <div
                          style={{
                            backgroundColor: data.iconBackgroundColor,
                          }}
                          className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg"
                        >
                          {feature.icon && (
                            <RenderIcon
                              key={index}
                              icon={feature.icon}
                              iconColor={data.iconColor}
                              index={index}
                            />
                          )}
                        </div>
                        {feature.iconTitle}
                      </dt>
                      <dd
                        style={{
                          color: data.iconSubtitleColor,
                          fontFamily: data.iconTextFont,
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
