// Fecha objetivo del temporizador
const targetDate = new Date('December 14, 2024 18:30:00').getTime();
let countdownInterval; // Variable para controlar el intervalo

function updateCountdown() {
  const now = new Date().getTime(); // Hora actual
  const timeRemaining = targetDate - now; // Diferencia en milisegundos

  if (timeRemaining > 0) {
    // Cálculo de días, horas, minutos y segundos restantes
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Actualizar los valores en el HTML
    document.getElementById('days').textContent = days.toString().padStart(2, '0') + ' d';
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0') + ' h';
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0') + ' m';
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0') + ' s';
  } else {
    // Temporizador finalizado: mostrar mensaje
    document.querySelector('.countdown').innerHTML = "<h2>¡El evento ha comenzado!</h2>";
    clearInterval(countdownInterval); // Detener el intervalo
  }
}

// Configuración inicial al cargar la página
window.onload = function () {
  // Iniciar el temporizador
  countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Llamar inmediatamente para mostrar el temporizador al cargar

  // Configurar el botón para enviar mensaje por WhatsApp
  document.getElementById('enviarWhatsApp').addEventListener('click', function () {
    const mensaje = document.getElementById('mensaje').value.trim(); // Obtener mensaje del input y eliminar espacios

    if (!mensaje) {
      alert('Por favor, escribe un mensaje antes de enviarlo.');
      return;
    }

    const numeroWhatsApp = ',58672467'; // Número de WhatsApp
    const enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(enlace, '_blank'); // Abrir el enlace en una nueva pestaña
  });
};
