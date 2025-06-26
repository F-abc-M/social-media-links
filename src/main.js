// Cambia colores de fondo y texto cada 3 segundos
const colors = [
  { bg: '#9DC08B' },
  { bg: '#1B56FD' },
  { bg: '#FF9F00' },
  { bg: '#090040' }
];

let i = 0;

function changeColors() {
  const { bg } = colors[i];
  document.body.style.backgroundColor = bg;

  i = (i + 1) % colors.length;
}

setInterval(changeColors, 3000); // cada 3 segundos

// Primera llamada para que inicie sin esperar 3s
changeColors();
