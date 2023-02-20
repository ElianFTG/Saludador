const first = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = first.value;
  div.innerHTML = "<p>" + "Hola " + name + "</p>";
});
