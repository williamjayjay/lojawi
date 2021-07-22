const glide1 = document.getElementById("glide1");
const glide2 = document.getElementById("glide2");
const glide3 = document.getElementById("glide3");
const glideAny = document.getElementById("glideAny");
const glideAny2 = document.getElementById("glideAny2");


if (glide1)
  new Glide(glide1, {
    type: "carousel",
    startAt: 0,
    autoplay: 3000,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "linear",
  }).mount();

if (glide2 )
  new Glide(glide2, {
    type: "carousel",
    startAt: 0,
    perView: 5,
    hoverpause: true,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      1200: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
    },
  }).mount();

  if (glideAny )
  new Glide(glideAny, {
    type: "carousel",
    startAt: 0,
    perView: 8,
    hoverpause: true,
     autoplay: 4000,
    animationDuration: 400,
    animationTimingFunc: "linear",

    breakpoints: {
      1200: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
    },
  }).mount();

  if (glideAny2 )
  new Glide(glideAny2, {
    type: "carousel",
    startAt: 0,
    perView: 6,
    hoverpause: true,
      autoplay: 500,
    animationDuration: 1000,
    animationTimingFunc: "linear",

    breakpoints: {
      1200: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
    },
  }).mount();



  

if (glide3) {
  new Glide(glide3, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    rewin: false,
    autoplay: 3000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      998: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();
}
