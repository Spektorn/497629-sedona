var btn = document.querySelector(".search-btn");
var popup = document.querySelector(".search");
var arrivaldate = popup.querySelector("[name=arrival-date]");

btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("search-hidden");
    arrivaldate.focus();
  });