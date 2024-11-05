import React from "react";

export const IconsSection = ({ data, onUpdate }) => {
  return (
    <section className={`py-8 ${data.sectionBackgroundColor}`}>
      <div className="max-w-5xl mx-auto flex justify-around items-center">
        {data.icons.slice(0, 5).map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            {/* Ícone */}
            <div className={`text-4xl ${data.iconColor}`}>{item.icon}</div>

            {/* Título abaixo do ícone */}
            <p className={`text-center ${data.iconColor}`}>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
