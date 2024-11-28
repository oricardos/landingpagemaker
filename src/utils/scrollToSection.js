export const scrollToSection = (showSection, sectionRef) => {
  if (showSection) {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
