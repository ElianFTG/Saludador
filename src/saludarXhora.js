function saludarHora() {
    let fechaActual = new Date();
    const horaActual = fechaActual.getHours();
    var horaDia = "";
    if (horaActual >= 6 && horaActual < 12) {
        horaDia = "Buenos dias";
      } else if (horaActual > 12 && horaActual < 19) {
        horaDia = "Buenas Tardes";
      } else {
        horaDia = "Buenas noches"
      }
    return horaDia;
  }
  
  export default saludarHora;