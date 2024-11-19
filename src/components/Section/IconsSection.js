import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import React from "react";

const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]

export const IconsSection = ({ data, onUpdate }) => {
  return (
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
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          {data.titleText}
        </h2>
        <h3 className="mt-6 text-lg/8 text-gray-600">
          {data.subtitleText}
        </h3>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {data.icons.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                  <feature.icon aria-hidden="true" className="size-6 text-white" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
  );
};
