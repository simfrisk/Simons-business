const joinBtn = document.getElementById("joinBtn");
const shopBtn = document.getElementById("shopBtn");
const burgerBtn = document.getElementById("burger-button");
const burgerMenu = document.getElementById("burger-menu");



joinBtn.onclick = function () {
  window.location.href = "html/newMember.html";

};

shopBtn.onclick = function () {
  window.location.href = "html/shop.html";
};

burgerBtn.onclick = function () {
  burgerMenu.style.display = "block";
};
