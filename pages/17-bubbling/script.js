function handleClick(event) {
  if (event.target.matches("button")) {
    console.log("click", event);
  }
}

document.querySelector("main").addEventListener("click", handleClick);
