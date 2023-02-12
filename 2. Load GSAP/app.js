const loadContainer = document.querySelector(".load-container");
const imagesContainer = document.querySelector(".images-container");
const blocTxt = document.querySelector(".bloc-txt");
const blocTxtH2 = document.querySelector(".bloc-txt h2");

const flipImg1 = document.querySelector(".flip-img1");
const flipImg2 = document.querySelector(".flip-img2");
const flip = document.querySelector(".flip");

window.addEventListener("load", () => {
  const TL = new gsap.timeline();

  TL.to(imagesContainer, {
    duration: 1.8,
    height: 400,
    ease: "power4.out",
  })
    .to(
      blocTxt,
      {
        duration: 0.9,
        height: 80,
        ease: "power4.out",
      },
      "-=0.6"
    )
    .to(
      blocTxtH2,
      {
        duration: 0.5,
        y: 0,
        ease: "back.out",
      },
      "-=0.4"
    )
    .to(flip, { y: "0", duration: 0.4 }, "-=0.3")
    .to(flip, { y: "-100%", duration: 0.5, delay: 0.15 }, "-=0.1")
    .to(loadContainer, {
      duration: 1.5,
      autoAlpha: 0,
      ease: "power1.out",
    });
});
