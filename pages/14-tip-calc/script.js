// TODO: Output the information showing voff, the tip amount and the total in 'p' tags
const form = document.querySelector("form");

function calcTotalWithTip(total, tipPct) {
  return total + total * (tipPct / 100);
}

function handleSubmit(e) {
  e.preventDefault();

  const submission = {
    total: e.target.total.value,
    tip: e.target.tip.value,
  };
}

form.addEventListener("submit", handleSubmit);
