
const item01Btn = document.getElementById("item01Btn");
const item02Btn = document.getElementById("item02Btn");
const item03Btn = document.getElementById("item03Btn");
const item04Btn = document.getElementById("item04Btn");
const item05Btn = document.getElementById("item05Btn");
const item06Btn = document.getElementById("item06Btn");
const item07Btn = document.getElementById("item07Btn");
const item08Btn = document.getElementById("item08Btn");
const item09Btn = document.getElementById("item09Btn");
const exitBtn = document.getElementById("exitBtn");

const popUpProduct = document.getElementById("popUpProduct");

const popUpTitle = document.getElementById("popUpTitle");



item01Btn.onclick = function () {
  popUpProduct.style.display = "block";
  popUpTitle.textContent = "Fulu Climbing";

};

item02Btn.onclick = function () {
  popUpProduct.style.display = "block";
  popUpTitle.textContent = "Rock Climbing";
};

item03Btn.onclick = function () {
  popUpProduct.style.display = "block";
  popUpTitle.textContent = "La Sportiva Tracer";
};

item04Btn.onclick = function () {
  popUpProduct.style.display = "block";
  popUpTitle.textContent = "Ripstop Voyger";
};

item05Btn.onclick = function () {
  popUpProduct.style.display = "block";
  popUpTitle.textContent = "Hiking Patrol";
};

item06Btn.onclick = function () {
  popUpProduct.style.display = "block";
  popUpTitle.textContent = "Peachell Technical";
};

item07Btn.onclick = function () {
  popUpProduct.style.display = "block";
  popUpTitle.textContent = "La Sportiva - Miura";
};

item08Btn.onclick = function () {
  popUpProduct.style.display = "block";
  popUpTitle.textContent = "La Sportiva Miura";
};

item09Btn.onclick = function () {
  popUpProduct.style.display = "block";
  popUpTitle.textContent = "La Sportiva Miura";
};

exitBtn.onclick = function () {
  popUpProduct.style.display = "none";
  popUpTitle.textContent = "La Sportiva Tarantula";
};