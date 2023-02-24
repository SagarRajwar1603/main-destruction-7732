let loginForm = document.getElementById("login");
let registerForm = document.getElementById("register");

let loginPopUpBtn = document.getElementById("login-btn");
let popUp = document.getElementById("form-section");

let clickBody = document.querySelector("body");

let loginBtn = document.getElementById("logBtn");
let registerBtn = document.getElementById("regBtn");

let closePopup = document.getElementById("close-btn");

let swapBtn = document.getElementById("swap-logo");

let swapDep = document.getElementById("swapDep");

let swapAri = document.getElementById("swapAri");

registerBtn.addEventListener("click", () => {
  registerForm.style.left = "22px";
  loginForm.style.left = "-450px";
  loginBtn.style.background = "none";
  loginBtn.style.color = "black";
  loginBtn.style.border = "2px solid black";
  registerBtn.style.background =
    "linear-gradient(90deg,rgba(255,137,53,1)6%,rgba(217.97,152,1)100%";
  registerBtn.style.color = "white";
  registerBtn.style.border = "none";
});
loginBtn.addEventListener("click", () => {
  loginForm.style.left = "22px";
  registerForm.style.left = "500px";
  loginBtn.style.background = "rgb(61, 184, 209)";
  loginBtn.style.color = "white";
  loginBtn.style.border = "none";
  registerBtn.style.background = "none";
  registerBtn.style.color = "black";
  registerBtn.style.border = "2px solid black";
});

// popup login button function

loginPopUpBtn.addEventListener("click", () => {
  popUp.style.top = "50%";
  popUp.style.transform = "translate(-50%, -50%)scale(1)";
  popUp.style.visibility = "visible";
});

closePopup.addEventListener("click", () => {
  popUp.style.visibility = "hidden";
});

let  swapDepDetail = document.getElementById("swapDet")
let swapAriDetails = document.getElementById("swapADri");
swapBtn.addEventListener("click", () => {
  let x = swapDep.innerText;
  let depDet = swapDepDetail.innerText;

  swapDep.innerText = swapAri.innerText;
  swapAri.innerText = x;

  swapDepDetail.innerText = swapAriDetails.innerText;
  swapAriDetails.innerText = depDet
});

// 

// slidingImg
// slidingImg
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];


productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})




