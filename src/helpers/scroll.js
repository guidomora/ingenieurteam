export const scrollToSection = () => {
  const section = document.getElementById("contact");
  window.scrollTo({
    behavior: "smooth",
    top: section.offsetTop,
  });
};

export const scrollToSection2 = () => {
  setTimeout(() => {
    const section = document.getElementById("contact");
    window.scrollTo({
      behavior: "smooth",
      top: section.offsetTop,
    });
  }, 100);
};

export const scrollToSectionDown = () => {
  setTimeout(() => {
    const section = document.getElementById("contact");

    window.scrollTo({
      behavior: "smooth",
      top: section.offsetTop + 1,
    });
  }, 400);
};
