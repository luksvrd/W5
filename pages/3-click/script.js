const html = document.querySelector("html");
// html.classList.toggle("dark");

const darkModeButton = document.querySelector("button");
const main = document.querySelector("main");

darkModeButton.addEventListener("click", function () {
  html.classList.toggle("dark");
});

main.addEventListener("click", function (event) {
  if (
    event.target.matches("button") &&
    event.target.textContent === "Lottery"
  ) {
    console.log("You clicked the lottery button");
  }
});
