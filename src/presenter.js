const first = document.querySelector("#nombre");
const second = document.querySelector("#genero");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = first.value;
  var gender;
  if (second.value === "Masculino") {
    gender = "Sr."
  } else {
    gender = "Sra."
  }
  div.innerHTML = "<p>" + "Hola " + gender +" " + name + "</p>";

});
