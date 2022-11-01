const form = document.querySelector("form");
const p = document.querySelector("p");

function createResponseMessage(contact) {
  return `
    Thank you ${contact.name} for your message!
    We will get back to you at ${contact.email}.
  `;
}

function handleSubmit(e) {
  e.preventDefault();

  const formInfo = {
    name: event.target.name.value,
    email: event.target.email.value,
  };

  p.innerText = createResponseMessage(formInfo);
}

form.addEventListener("submit", handleSubmit);
