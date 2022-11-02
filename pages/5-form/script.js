const checkboxes = document.querySelectorAll('input[type="checkbox"]');

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  // 'target' is like a caller-id for the event. Who caused this submit event?
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // We need to add the checkboxes to the data object
  data.toppings = formData.getAll("toppings");

  console.log(data);
});
