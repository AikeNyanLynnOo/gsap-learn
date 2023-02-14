const h1 = document.querySelector(".home-mountains h1");
const mountains = document.querySelector(".home-mountains img");

gsap.to(mountains, {
  y: 10,
  scrollTrigger: {
    trigger: "mountains-scroll",
    scrub: true,
  },
});
gsap.to(h1, {
  y: 500,
  scrollTrigger: {
    trigger: "mountains-scroll",
    scrub: true,
  },
});
