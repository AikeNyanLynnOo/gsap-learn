gsap.fromTo(
  ".b2 h2",
  {
    y: 30,
    scale: 0.5,
  },
  {
    duration: "0.5",
    scale: 1,
    autoAlpha: 1,
    scrollTrigger: {
      trigger: ".b2 h2",
      markers: true,
      start: "top bottom-=200",
      end: "bottom+=20% top",
    },
  }
);
