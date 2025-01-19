gsap.to(".more svg", {
  scale: 0,
  duration: 0.2,
  delay: 0,
  width: 100,
  dispaly: "none",
  scrollTrigger: {
    trigger: ".more svg",
    scroller: "body",
    // markers:true,
    start: "top 80%",
    end: "top 78%",
    scrub: 2,

  }
})
gsap.to(" .cont .name", {
  scale: 1.8,
  duration: 1,
  delay: 0,
  dispaly: "none",
  scrollTrigger: {
    trigger: ".cont .name",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 90%",
    scrub: 2,
  }

})

let a = document.querySelector(".partRight .signUp");
let b = document.querySelector(".partRight .login");
let c = document.querySelector(".partRight .login a");
let d = document.querySelector(".signUp a");

// 
a.addEventListener("mouseenter", () => {
  b.style.backgroundColor = "transparent";
  c.style.color = "#c0e8f4";
})
d.addEventListener("mouseenter", () => {
  b.style.backgroundColor = "transparent";
  c.style.color = "#c0e8f4";
})

// 
a.addEventListener("mouseout", () => {
  b.style.backgroundColor = "#c0e8f4";
  c.style.color = "#211373";
})

b.addEventListener("mouseenter", () => {
  b.style.backgroundColor = "transparent";
  c.style.color = "#c0e8f4";
})

b.addEventListener("mouseout", () => {
  b.style.backgroundColor = "#c0e8f4";
  c.style.color = "#211373";
})

c.addEventListener("mouseenter", () => {
  b.style.backgroundColor = "transparent";
  c.style.color = "#c0e8f4";
})

c.addEventListener("mouseout", () => {
  b.style.backgroundColor = "#c0e8f4";
  c.style.color = "#211373";
})
