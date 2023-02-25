// Definir los valores de las cartas
const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Definir las pintas de las cartas
const pintas = [
  { simbolo: '♦', color: 'red' },
  { simbolo: '♥', color: 'red' },
  { simbolo: '♠', color: 'black' },
  { simbolo: '♣', color: 'black' }
];

// Obtener los elementos HTML
const containerElement = document.querySelector('#container');
const buttonElement = document.getElementById('buttonElement');

// Agregar evento click al botón
buttonElement.addEventListener('click', function() {

  // Crear un nuevo elemento de carta
  const cartaElement = document.createElement('div');
  cartaElement.classList.add('row', 'card');

  // Seleccionar una pinta y un valor al azar
  const pintaAleatoria = pintas[Math.floor(Math.random() * pintas.length)];
  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

  // Crear los elementos para la carta
  const arribaElement = document.createElement('div');
  arribaElement.classList.add('col', 'arriba');
  arribaElement.textContent = pintaAleatoria.simbolo;
  arribaElement.style.color = pintaAleatoria.color;

  const centroElement = document.createElement('div');
  centroElement.classList.add('col', 'centro');
  centroElement.textContent = valorAleatorio;

  const abajoElement = document.createElement('div');
  abajoElement.classList.add('col', 'abajo');
  abajoElement.textContent = pintaAleatoria.simbolo;
  abajoElement.style.color = pintaAleatoria.color;

  // Agregar los elementos a la carta
  cartaElement.appendChild(arribaElement);
  cartaElement.appendChild(centroElement);
  cartaElement.appendChild(abajoElement);

  // Agregar la carta al contenedor
  containerElement.appendChild(cartaElement);
});
