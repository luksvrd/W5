const buttons = document.querySelectorAll("button");
const count = document.querySelector("#count");

function handleButtonClick(event) {
  // Get the textContent of 'count' - turn it into a number
  const countValue = Number(count.textContent);

  // Which button was clicked? "increment" or "decrement"?
  if (event.target.id === "increment") {
    count.textContent = countValue + 1;
  } else if (event.target.id === "decrement") {
    // Don't let the count go below 0
    if (countValue > 0) {
      count.textContent = countValue - 1;
    }
  }
}

// Attach the event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
