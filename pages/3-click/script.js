const html = document.querySelector("html");
// html.classList.toggle("dark");

const darkModeButton = document.querySelector("button");

darkModeButton.addEventListener("click", function () {
  html.classList.toggle("dark");
});
