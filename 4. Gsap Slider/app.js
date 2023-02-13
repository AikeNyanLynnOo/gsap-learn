const counterEle = document.querySelector(
  ".container .counter span:nth-child(1)"
);

const prevBtn = document.querySelector(".container-btns .btn-prev");
const nextBtn = document.querySelector(".container-btns .btn-next");

const slides = Array.from(document.querySelectorAll(".slide"));

prevBtn.addEventListener("click", () => {
  const counter = +counterEle.textContent;
  let moveTo;
  if (counter > 1) {
    moveTo = counter - 1;
  } else {
    moveTo = 3;
  }
  // set counter to html
  counterEle.textContent = moveTo;

  gsap.fromTo(
    slides[counter - 1],
    {
      x: 0,
    },
    {
      x: "100%",
      duration: 0.2,
      ease: "power2.out",
    }
  );
  gsap.fromTo(
    slides[moveTo - 1],
    {
      x: "-100%",
    },
    {
      x: 0,
      duration: 0.5,
      ease: "back.out(1)",
    }
  );
});
nextBtn.addEventListener("click", () => {
  const counter = +counterEle.textContent;
  let moveTo;
  if (counter < 3) {
    moveTo = counter + 1;
  } else {
    moveTo = 1;
  }
  // set counter to html
  counterEle.textContent = moveTo;

  gsap.fromTo(
    slides[counter - 1],
    {
      x: 0,
    },
    {
      x: "-100%",
      duration: 0.2,
      ease: "power2.out",
    }
  );
  gsap.fromTo(
    slides[moveTo - 1],
    {
      x: "100%",
    },
    {
      x: 0,
      duration: 0.5,
      ease: "back.out(1)",
    }
  );
});
