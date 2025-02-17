const joinBtn = document.getElementById("joinBtn");
const shopBtn = document.getElementById("shopBtn");
const shopBtn2 = document.getElementById("shopBtn2");
const burgerBtn = document.getElementById("burger-button");
const burgerMenu = document.getElementById("burger-menu");
const burgerLine01 = document.getElementById("burger-line-01");
const burgerLine03 = document.getElementById("burger-line-03");


joinBtn.onclick = function () {
  window.location.href = "html/newMember.html";

};

shopBtn.onclick = function () {
  window.location.href = "html/shop.html";
};

shopBtn2.onclick = function () {
  window.location.href = "html/shop.html";
};

burgerBtn.onclick = function () {
  burgerMenu.classList.toggle("open");
  burgerBtn.style.color = burgerBtn.style.color === "gray" ? "black" : "gray";
  burgerLine01.classList.toggle("line-01");
  burgerLine03.classList.toggle("line-03");
};
