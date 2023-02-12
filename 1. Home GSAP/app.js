// navs
const navs = document.querySelectorAll(".container-nav a");
const navImgs = document.querySelectorAll("nav img");

const h1 = document.querySelector("h1");
const middleLine = document.querySelector(".middle-line");
const grapeImg = document.querySelector(".home-content img");
const discoverBtn = document.querySelector(".home-content button");

window.addEventListener("load", () => {
  const TL = new gsap.timeline();

  TL.from(h1, {
    duration: 0.5,
    y: -50,
    autoAlpha: 0,
  })
    .to(
      middleLine,
      {
        duration: 0.3,
        height: 300,
      },
      "-=0.1"
    )
    .from(
      grapeImg,
      {
        duration: 0.3,
        y: -30,
        autoAlpha: 0,
      },

      "-=0.1"
    )
    .from(
      discoverBtn,
      {
        duration: 0.3,
        y: -30,
        autoAlpha: 0,
      },
      "-=0.1"
    )
    .fromTo(
      navs,
      {
        y: -100,
      },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
      },
      "-=0.4"
    )
    .fromTo(
      navImgs,
      {
        y: -100,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.3,
        delay: 0.4,
      }
    );
});
