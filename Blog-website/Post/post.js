let a = document.querySelector(".vwOpt");
let b = document.querySelector(".vw .opt");
let id = 0;
let c = document.querySelector(".crOpt");
let d = document.querySelector(".cr .opt");
let id2 = 0;
a.addEventListener("click", () => {
  if (id == 0) {
    b.style.display = "block";
    id++;
  }
  else {
    b.style.display = "none";
    id--;
  }
})

c.addEventListener("click", () => {
  if (id2 == 0) {
    d.style.display = "block";
    id2++;
  }
  else {
    d.style.display = "none";
    id2--;
  }
})



// 

// create post
let create = document.querySelector(" .ct");
let main1 = document.querySelector(".sec2 .main1");
let saveD = document.querySelector(" .st");

saveD.addEventListener("click", () => {
  main1.style.marginTop = "-51%";

})
// 
let vwPs = document.querySelector(" .vwP");

vwPs.addEventListener("click", () => {
  main1.style.marginTop = "-103%";

})
// 
let yrPs = document.querySelector(" .yrP");

yrPs.addEventListener("click", () => {
  main1.style.marginTop = "-157%";

})
// 
let stsP = document.querySelector(" .statusP");

stsP.addEventListener("click", () => {
  main1.style.marginTop = "-208%";

})
// 
let fontSt = document.querySelector(".textchg .fnts");
let fontS = document.querySelector(".textchg .fnt");

let page1 = document.querySelector(".pages .page22");
let page2 = document.querySelector(".pages .page11");

fontS.addEventListener("click", () => {

  page1.style.display = "block";


})

fontSt.addEventListener("click", () => {

  page2.style.display = "block";


})

let allP1 = document.querySelectorAll(".page22 p");

for (let i = 0; i < 4; i++) {
  allP1[i].addEventListener("click", () => {
    page1.style.display = "none";
  })
}
let allP2 = document.querySelectorAll(".page11 p");


for (let i = 0; i < 4; i++) {
  allP2[i].addEventListener("click", () => {
    page2.style.display = "none";
  })
}
