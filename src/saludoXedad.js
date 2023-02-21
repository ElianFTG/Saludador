function saludar(genero, edad) {
    var pronom = "";
    if (genero === "Masculino" && edad > 30) {
        pronom = "Sr.";
      } else if (genero === "Femenino" && edad > 30) {
        pronom = "Sra.";
      }
    return pronom;
  }
  
  export default saludar;