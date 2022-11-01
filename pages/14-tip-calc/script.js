// TODO:
// TODO: Write a function to calculate the total amount
// TODO: Output the information showing voff, the tip amount and the total in 'p' tags
const form = document.querySelector("form");

function handleSubmit(e) {
  e.preventDefault();

  const submission = {
    total: e.target.total.value,
    tip: e.target.tip.value,
  };
}

form.addEventListener("submit", handleSubmit);
