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
          {/* <header className="absolute inset-x-0 top-0 z-50">
          <div className="mx-auto max-w-7xl">
            <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
              <nav
                aria-label="Global"
                className="flex items-center justify-between lg:justify-start"
              >
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu aria-hidden="true" className="size-6" />
                </button>
                <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm/6 font-semibold text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header> */}

          <div
            className="relative"
            style={{
              backgroundColor: data.sectionBackgroundColor,
            }}
          >
            <div className="mx-auto max-w-7xl">
              <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                <svg
                  // style={{
                  //   backgroundColor: data.sectionBackgroundColor,
                  // }}
                  // fill={data.sectionBackgroundColor}
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute inset-y-0 right-0 hidden h-full w-80 translate-x-1/2 transform lg:block"
                >
                  <polygon
                    fill={data.sectionBackgroundColor}
                    points="0,0 90,0 50,100 0,100"
                  />
                </svg>

                <div
                  // style={{
                  //   backgroundColor: data.sectionBackgroundColor,
                  // }}
                  className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0"
                >
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <div className="hidden sm:flex">
                      {/* logo */}
                      {data.logoSrc && (
                        <img
                          src={data.logoSrc}
                          alt="Logomarca"
                          className="h-12 mb-4"
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

                    {/* Botão call-to-action */}
                    {/* <a
                    style={{
                      backgroundColor: data.buttonColor,
                      color: data.buttonTextColor,
                    }}
                    href={data.buttonLink}
                    className={`inline-block w-full text-center mt-4 py-2 px-4 rounded`}
                  >
                    {data.buttonText}
                  </a> */}

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
            <div
              style={{
                backgroundImage: `url(${data.backgroundImgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
            >
              {/* <img
              alt=""
              src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
              className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
            /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
