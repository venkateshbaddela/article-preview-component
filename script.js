const container = document.querySelector(".container");
const btn = document.querySelector(".rgt-bot__btn");
const box = document.querySelector(".fly-box");
const img = document.querySelector(".rgt-bot__img");

box.classList.add("hidden");
box.style.display = "none";

btn.addEventListener("click", function () {
  if (box.classList.contains("hidden")) {
    box.classList.remove("hidden");
    box.style.display = "flex";
    btn.style.backgroundColor = "hsl(214, 17%, 51%)";
    img.style.fill = "hsl(210, 46%, 95%)";
  } else {
    box.classList.add("hidden");
    box.style.display = "none";

    btn.style.backgroundColor = "hsl(210, 46%, 95%)";
    img.style.fill = "hsl(214, 17%, 51%)";
  }
});
