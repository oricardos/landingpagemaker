import React, { useEffect, useRef } from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { getResponsiveClasses } from "../../utils/getResponsiveClasses";
import { usePreviewDevice } from "../../contexts/PreviewDeviceContext";
import { scrollToSection } from "../../utils/scrollToSection";

export const FooterSection = ({ data, onUpdate }) => {
  const previewDevice = usePreviewDevice();
  const sectionRef = useRef(null);

  // useEffect(() => {
  //   scrollToSection(data.show, sectionRef);
  // }, [data]);

  return (
    <>
      {data.show && (
        <footer
          ref={sectionRef}
          id="footer"
          style={{ backgroundColor: data.sectionBackgroundColor }}
          className={`py-8 px-4`}
        >
          <div
            className={getResponsiveClasses(
              "max-w-7xl mx-auto flex flex-col items-start gap-4",
              {
                desktop: "md:gap-20 md:flex-row md:justify-start  md:space-y-0",
              },
              previewDevice
            )}
          >
            {/* Logomarca */}
            {data.logoSrc && (
              <img
                src={data.logoSrc}
                alt="Logomarca"
                className={getResponsiveClasses(
                  "w-32 h-auto mb-4",
                  { desktop: "md:mb-0" },
                  previewDevice
                )}
              />
            )}

            {/* Informações de Contato */}
            <div
              style={{ color: data.iconTextColor }}
              className={`flex flex-col items-start space-y-4`}
            >
              {/* Endereço de E-mail */}
              <a
                href={`mailto:${data.email}`}
                className="flex items-center space-x-2"
              >
                <FaEnvelope />
                <span>{data.email}</span>
              </a>

              {/* WhatsApp */}
              <a
                href={data.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>

              {/* Instagram */}
              <a
                href={data.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};
