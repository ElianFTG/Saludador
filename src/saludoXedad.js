function saludar(genero, edad) {
    var pronom = "";
    if (genero === "Male" && edad > 30) {
        pronom = "Mr.";
      } else if (genero === "Female" && edad > 30) {
        pronom = "Mrs.";
      }
    return pronom;
  }
  
  export default saludar;