var btn = document.querySelector(".search-btn");
var popup = document.querySelector(".search");
var arrivaldate = popup.querySelector("[name=arrival-date]");

popup.classList.toggle("search-hidden");

btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("search-anim");
    popup.classList.toggle("search-hidden");
  });