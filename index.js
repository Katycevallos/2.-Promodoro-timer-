const start1 = document.getElementById("start");         
const stop1 = document.getElementById("stop"); 
const restart1 = document.getElementById("reset"); 
const timer1 = document.getElementById("timer"); 
const timerInput1 = document.getElementById("time-input")

let interval; 
let timeLeft = 0; 

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60); 
    let seconds = timeLeft % 60; 

    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    
      timer1.innerHTML = formattedTime;
}


function startTimer() {
    const inputTime = parseInt(timerInput1.value); // Obtener el valor del input en minutos
    if (isNaN(inputTime) || inputTime < 1 || inputTime > 60) {
      alert("Por favor ingresa un número entre 1 y 60.");
      return; // Si el valor no es válido, no continuar
    }
    timeLeft = inputTime * 60; // Convertimos los minutos a segundos
    updateTimer();
    timerInput1.value = '';
    interval = setInterval(() => {
      timeLeft--; // Reducir el tiempo
      updateTimer();
  
      // Si el tiempo llega a cero, detener el temporizador
      if (timeLeft === 0) {
        clearInterval(interval);
        alert("¡El tiempo ha terminado!");
        timeLeft = 0;
        updateTimer();
      }
    }, 1000);
  }
  function stopTimer() {
    clearInterval(interval);
  }
  function resetTimer() {
    clearInterval(interval);
    timeLeft = 0;
    updateTimer();
  }
  
  start1.addEventListener("click", startTimer);
  stop1.addEventListener("click", stopTimer);
  restart1.addEventListener("click", resetTimer);