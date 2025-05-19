const tweet = document.getElementById("tweet");
const contador = document.getElementById("contador");
const enviar = document.getElementById("enviar");
const limite = 280;

tweet.addEventListener("input", () => {
  const caracteresDigitados = tweet.value.length;
  const restantes = limite - caracteresDigitados;

  contador.textContent = `${restantes} caracteres restantes`;

  if (restantes <= 20) {       
    contador.classList.add('limite');    
  } else {
    contador.classList.remove("limite");
  }

// Desativa o botão se ultrapassar o limite
  if (restantes === 0 || caracteresDigitados === 0) {
    enviar.disabled = true;
  } else {
    enviar.disabled = false;
  }
});