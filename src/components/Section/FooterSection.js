import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export const FooterSection = ({ data, onUpdate }) => {
  return (
    <>
      {data.show && (
        <footer
          style={{ backgroundColor: data.sectionBackgroundColor }}
          className={`py-8 px-4`}
        >
          <div className="max-w-6xl mx-auto flex flex-col md:gap-20 md:flex-row md:justify-start items-start space-y-4 md:space-y-0">
            {/* Logomarca */}
            {data.logoSrc && (
              <img
                src={data.logoSrc}
                alt="Logomarca"
                className="w-32 h-auto mb-4 md:mb-0"
              />
            )}

            {/* Informações de Contato */}
            <div
              style={{ color: data.iconTextColor }}
              className={`flex flex-col items-center md:items-start space-y-4`}
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
