import saludar from "./saludoXedad";
import saludarHora from "./saludarXhora";

const first = document.querySelector("#nombre");
const second = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = first.value;
  
  div.innerHTML = "<p>" +  saludarHora() + " " + saludar(second.value, edad.value) + name + "</p>";

});
