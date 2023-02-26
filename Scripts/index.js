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

let formEl = document.querySelector("form");
let loginInput = document.getElementById("loginInput");

let adminBtn = document.getElementById("admin-btn");

let searchFlight = document.getElementById("search-btn");

// form validation

// let newData =

window.addEventListener("load", () => {
  if (localStorage.getItem("user")) {
    loginPopUpBtn.innerText = localStorage.getItem("user");
  } else {
    loginPopUpBtn.innerText = loginPopUpBtn.innerText;
  }
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = loginInput.value;

  localStorage.setItem("user", data);
  loginPopUpBtn.innerText = localStorage.getItem("user");

});


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
  if (loginPopUpBtn.innerText != "Login or create account") {
    console.log("im clcik");
    popUp.style.display = "none";
  }
  popUp.style.top = "50%";
  popUp.style.transform = "translate(-50%, -50%)scale(1)";
  popUp.style.visibility = "visible";
});

closePopup.addEventListener("click", () => {
  popUp.style.visibility = "hidden";
});

let swapDepDetail = document.getElementById("swapDet");
let swapAriDetails = document.getElementById("swapADri");
swapBtn.addEventListener("click", () => {
  let x = swapDep.innerText;
  let depDet = swapDepDetail.innerText;

  swapDep.innerText = swapAri.innerText;
  swapAri.innerText = x;

  swapDepDetail.innerText = swapAriDetails.innerText;
  swapAriDetails.innerText = depDet;
});

//

// slidingImg
// slidingImg
const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

adminBtn.addEventListener("click", () => {
  if (loginInput.value != "" && loginInput.value === "gomytrip@gmail.com") {
    window.location.assign("../Admin/Admin.html");
  }
});

searchFlight.addEventListener("click",()=>{
  window.location.assign("./Pages/flight.html");
})