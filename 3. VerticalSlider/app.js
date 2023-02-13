const TL = new gsap.timeline({ repeat: -1 });

const verticalTxts = document.querySelectorAll(".vertical-slider p");

window.addEventListener("load", () => {
  TL.from(verticalTxts, {
    y: 100,
    autoAlpha: 0,
    duration: 0.75,
    stagger: 0.75,
  }).to(
    verticalTxts,
    {
      y: -100,
      autoAlpha: 0,
      duration: 0.75,
      stagger: 0.75,
    },
    0.75
  );
});
