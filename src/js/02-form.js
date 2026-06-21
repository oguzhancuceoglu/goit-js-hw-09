const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";
populateForm();
form.addEventListener("input", onFormInput);
form.addEventListener("submit", onFormSubmit);

function onFormInput(event) {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const formData = savedData ? JSON.parse(savedData) : { email: "", message: "" };
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.elements.email.value = email || "";
    form.elements.message.value = message || "";
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  const emailValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();

  if (emailValue === "" || messageValue === "") {
    alert("Lütfen tüm alanları doldurun!");
    return;
  }

  console.log({
    email: emailValue,
    message: messageValue
  });

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}