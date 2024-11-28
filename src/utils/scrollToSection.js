/**
 * Faz o scroll suave até o elemento da seção referenciado.
 *
 * @param {boolean} showSection - Determina se o scroll deve ser executado.
 * @param {React.RefObject<HTMLElement>} sectionRef - Referência para o elemento alvo do scroll.
 */
export const scrollToSection = (showSection, sectionRef) => {
  if (showSection) {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
