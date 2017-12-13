var btn = document.querySelector(".search-btn");
var popup = document.querySelector(".search");

popup.classList.add("search-hidden");

btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (popup.classList.contains("search-hidden")) {
        popup.classList.remove("search-hidden");
        popup.classList.add("search-visible");
        }
    else {
        popup.classList.toggle("search-invisible");
        popup.classList.toggle("search-visible");
        }
    });