// Função contador regressivo
function iniciarContador() {
  const destino = new Date("2025-08-18T16:00:00").getTime();

  const intervalo = setInterval(() => {
    const agora = new Date().getTime();
    const diferenca = destino - agora;

    if (diferenca <= 0) {
      clearInterval(intervalo);
      document.querySelector('.countdown').innerHTML = "🎉 Chegou o dia! 🎉";
      return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = dias;
    document.getElementById("hours").textContent = horas;
    document.getElementById("minutes").textContent = minutos;
    document.getElementById("seconds").textContent = segundos;
  }, 1000);
}

iniciarContador();

const confettiCount = 40;

for (let i = 0; i < confettiCount; i++) {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');

  const size = Math.random() * 8 + 6; // entre 6px e 14px
  confetti.style.width = `${size}px`;
  confetti.style.height = `${size}px`;

  confetti.style.left = `${Math.random() * 100}vw`;
  confetti.style.animationDuration = `${3 + Math.random() * 3}s`;
  confetti.style.animationDelay = `${Math.random() * 5}s`;

  // Variação de cores em tons de rosa
  const hue = Math.floor(Math.random() * 40 + 320);
  confetti.style.backgroundColor = `hsl(${hue}, 70%, 75%)`;

  document.body.appendChild(confetti);
}


const audio = document.getElementById('audioPlayer');

window.addEventListener('click', () => {
  if (audio.muted) {
    audio.muted = false;
    audio.play();
  }
});

