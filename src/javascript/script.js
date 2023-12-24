window.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector(".intro");
  const logo = document.querySelector(".logo");
  const text = document.querySelector(".text-content");
  const container = document.querySelector(".intro-container");
  const content = document.querySelector(".content-container");

  gsap.registerPlugin(ScrollTrigger);

  function createStar(location) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "vw";
    star.style.top =
      location === "screen"
        ? Math.random() * 100 + "vh"
        : 100 + Math.random() * 100 + "vh";
    star.innerText = "✦";
    document.querySelector(".intro-container").appendChild(star);
  }

  for (let i = 0; i < 50; i++) {
    createStar("screen");
    createStar("under-screen");
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: true,
      start: "top top",
      end: "+=5000",
    },
    onComplete: () => {
      const canvas = document.querySelector("#confeti");
      const jsConfetti = new JSConfetti({ canvas });
      jsConfetti.addConfetti({
        confettiColors: ["#ff0000", "#00ff00", "#0000ff"],
      });
    },
  });

  tl.fromTo(intro, { opacity: 1 }, { opacity: 0, duration: 2 });
  tl.fromTo(logo, { opacity: 0 }, { opacity: 1, duration: 2 });
  tl.fromTo(logo, { scale: 1 }, { scale: 0, duration: 2 });
  tl.fromTo(
    text,
    { tranform: "rotateX(20deg) translateY(85%)" },
    {
      transform: "rotateX(20deg) translateY(-60%)",
      duration: 7,
    }
  );
  tl.fromTo(text, { opacity: 1 }, { opacity: 0, duration: 2 });
  tl.fromTo(content, { opacity: 0 }, { opacity: 1, duration: 0.6 });

  const stars = document.querySelectorAll(".star");

  tl.fromTo(
    stars,
    { transform: "translateY(0)" },
    { transform: "translateY(-100vh)", duration: 6 }
  );

  const earth = document.querySelector(".earth");
  tl.fromTo(
    earth,
    { transform: "translateY(100vh)" },
    { transform: "translateY(0)", duration: 4, delay: -4 }
  );

  const endor = document.querySelector(".endor");
  tl.fromTo(
    endor,
    { transform: "translateX(100vw)" },
    { transform: "translateX(0)", duration: 4, delay: 4 }
  );

  const bear = document.querySelector(".bear");
  tl.fromTo(
    bear,
    { transform: "translateX(90vw)" },
    { transform: "translateX(0)", duration: 4, delay: -4 }
  );

  const description1 = document.querySelector(".description1");
  const description1Text = description1.innerText;
  tl.fromTo(
    description1,
    {
      text: "",
    },
    {
      text: description1Text,
      duration: 8,
      delay: 0,
      ease: "none",
    }
  );

  const man = document.querySelector(".man");
  tl.fromTo(
    man,
    { transform: "translateX(100vw)" },
    { transform: "translateX(0)", duration: 4, delay: -4 }
  );

  const endor4 = document.querySelector(".endor4");
  tl.fromTo(
    endor4,
    { transform: "translateY(100vh)" },
    { transform: "translateX(0)", duration: 4, delay: 2 }
  );

  const soldiers = document.querySelectorAll(".soldiers");
  tl.fromTo(
    soldiers,
    { transform: "translateY(100vw)" },
    { transform: "translateY(0)", duration: 4, delay: -3.8 }
  );

  const bear2 = document.querySelector(".bear2");
  tl.fromTo(
    bear2,
    { transform: "translateY(100vw)" },
    { transform: "translateY(0)", duration: 4, delay: -3.8 }
  );

  const description2 = document.querySelector(".description2");
  const description2Text = description2.innerText;
  tl.fromTo(
    description2,
    {
      text: "",
    },
    {
      text: description2Text,
      duration: 8,
      delay: 0,
      ease: "none",
    }
  );

  const endor3 = document.querySelector(".endor3");
  tl.fromTo(
    endor3,
    { transform: "translateX(100vw)" },
    { transform: "translateX(0)", duration: 4, delay: 2 }
  );

  const troopers = document.querySelectorAll(".stormtrooper1, .stormtrooper2");
  tl.fromTo(
    troopers,
    { transform: "translateX(100vw)" },
    { transform: "translateY(0)", duration: 4, delay: -3.8 }
  );

  const bear3 = document.querySelector(".bear3");
  tl.fromTo(
    bear3,
    { transform: "translate(-100vw, 100vh) scale(2)" },
    { transform: "translate(0, 0) scale(0.7)", duration: 6, delay: 0 }
  );

  const trooper1 = document.querySelector(".stormtrooper1 > img");
  const trooper2 = document.querySelector(".stormtrooper2 > img");
  tl.fromTo(
    trooper1,
    { rotate: "0deg", transform: "translateX(0)", scale: 0.4 },
    {
      rotate: "720deg",
      transform: "translateX(100vw) translateY(-30vh)",
      scale: 0.4,
      duration: 8,
      delay: 0,
    }
  );
  tl.fromTo(
    trooper2,
    { rotate: "0deg", transform: "translateX(0)", scale: 0.4 },
    {
      rotate: "-720deg",
      transform: "translateX(-100vw) translateY(-30vh)",
      scale: 0.4,
      duration: 8,
      delay: -8,
    }
  );

  const soldiers2 = document.querySelectorAll(".soldiers2");
  tl.fromTo(
    soldiers2,
    { transform: "translateY(100vw)" },
    { transform: "translateY(0)", duration: 4, delay: -3.8 }
  );

  const endor2 = document.querySelector(".endor2");
  tl.fromTo(
    endor2,
    { transform: "translateY(100vh)" },
    { transform: "translateX(0) ", duration: 4, delay: 4 }
  );

  const description3 = document.querySelector(".description3");
  const description3Text = description3.innerText;
  tl.fromTo(
    description3,
    {
      text: "",
    },
    {
      text: description3Text,
      duration: 8,
      delay: 0,
      ease: "none",
    }
  );
});
