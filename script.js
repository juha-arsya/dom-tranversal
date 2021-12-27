// Event Handling
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

// DOM Travensal
// const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (event) {
//     // close[i].parentElement.style.display = "none";
//     event.target.parentElement.style.display = "none";
//   });
// }

// close.forEach(function (el) {
//   el.addEventListener("click", function (event) {
//     event.target.parentElement.style.display = "none";
//     event.preventDefault();
//     event.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (event) {
//     alert("ok");
//   });
// });

// Lebih Efektif

const container = document.querySelector(".container");

container.addEventListener("click", function (event) {
  if (event.target.className == "close") {
    event.target.parentElement.style.display = "none";
    event.preventDefault();
  }
});
