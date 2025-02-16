const shopBtn = document.getElementById("shopBtn");
const joinBtn = document.getElementById("joinBtn");
const shopBtn2 = document.getElementById("shopBtn2");
const burgerBtn = document.getElementById("burger-button");
const burgerMenu = document.getElementById("burger-menu");


joinBtn.onclick = function () {
  window.location.href = "newMember.html";

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
};
