const src = [
  "ressources/spartan.svg",
  "ressources/castle.svg",
  "ressources/da-vinci.svg",
  "ressources/airplane.svg",
];

const dates = ["-3300 | 476", "476 | 1492", "1492 | 1792", "1792 | AJD"];

const sections = document.querySelectorAll(".section");

ScrollTrigger.create({
  trigger: ".sections",
  pin: ".tooltip",
  start: "top 40%",
  end: "bottom 50%",
  // markers: true,
});

sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      gsap.set(".tooltip-img", {
        attr: {
          src: src[index],
        },
      });
      gsap.set(".tooltip p", {
        textContent: dates[index],
      });
    },
    onEnterBack: () => {
      gsap.set(".tooltip-img", {
        attr: {
          src: src[index],
        },
      });
      gsap.set(".tooltip p", {
        textContent: dates[index],
      });
    },
  });
});
