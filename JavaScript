// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Simple fade-in animation
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight / 1.2;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) section.classList.add("visible");
  });
});
