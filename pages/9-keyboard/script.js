const QWERTY = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");

const keyboardDiv = document.querySelector("div");
const showLettersBtn = document.querySelector("button");

QWERTY.forEach((key) => {
  const button = document.createElement("button");

  button.setAttribute("type", "button");
  button.classList.add("letter");
  button.textContent = key;

  keyboardDiv.appendChild(button);
});

showLettersBtn.addEventListener("click", () => {
  keyboardDiv.classList.remove("hidden");
});

// TODO: Leverage 'keyboardDiv' and BUBBLING to update the 'textarea' value
