import { useEffect, useRef, useState } from "react";

/**
 * Hook customizado para fazer scroll automático até uma seção da página.
 * Executa o scroll apenas quando o valor de `show` muda.
 *
 * @param {boolean} show - Indica se a seção deve ser exibida (ativar o scroll).
 * @returns {React.RefObject<HTMLElement>} - Referência para o elemento da seção.
 */
export const useScrollToSection = (show) => {
  const sectionRef = useRef(null);
  const [prevShow, setPrevShow] = useState(show);

  useEffect(() => {
    if (show !== prevShow) {
      scrollToSection(show, sectionRef);
      setPrevShow(show);
    }
  }, [show, prevShow]);

  return sectionRef;
};

/**
 * Faz o scroll suave até o elemento da seção referenciado.
 *
 * @param {boolean} showSection - Determina se o scroll deve ser executado.
 * @param {React.RefObject<HTMLElement>} sectionRef - Referência para o elemento alvo do scroll.
 */
export const scrollToSection = (showSection, sectionRef) => {
  if (showSection && sectionRef?.current) {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
