function handleClick(event) {
  console.log("click", event.target.textContent);
}

document.querySelector("main").addEventListener("click", handleClick);
