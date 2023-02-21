function saludarHora() {
    let fechaActual = new Date();
    const horaActual = fechaActual.getHours();
    var horaDia = "";
    if (horaActual >= 6 && horaActual < 12) {
        horaDia = "Good Morning";
      } else if (horaActual > 12 && horaActual < 19) {
        horaDia = "Good afternoon";
      } else {
        horaDia = "Good evening"
      }
    return horaDia;
  }
  
  export default saludarHora;