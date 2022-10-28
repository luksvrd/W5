const html = document.querySelector("html");
const input = document.querySelector("input");

input.addEventListener("change", function () {
  html.classList.toggle("dark");
});
