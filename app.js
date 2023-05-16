// Definir los valores de las cartas
const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K','A'];

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

// Crear una lista para almacenar las cartas generadas originalmente
let cartasGeneradasOriginales = [];

function crearCarta(pintas, valores) {
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

  // Devolver el elemento de la carta
  return cartaElement;
}

const textarea = document.getElementById('inputc');
const boton = document.createElement('button');
boton.textContent = 'Enviar resultados';
document.body.appendChild(boton);

let cartaElement;
let cartasGeneradas = [];
let historial = [];
boton.addEventListener('click', function() {
  const cantidad = parseInt(textarea.value);

  // Generar las cartas aleatorias y copiarlas en la lista de cartas generadas originales
  for (let i = 0; i < cantidad; i++) {
    cartaElement = crearCarta(pintas, valores);
    cartasGeneradas.push(cartaElement);
    cartasGeneradasOriginales.push(cartaElement.cloneNode(true));
  }

  // Mostrar todas las cartas en el contenedor
  containerElement.innerHTML = '';

  cartasGeneradas.forEach(function(carta) {
    containerElement.appendChild(carta);
  });

  historial.forEach(function(carta) {
    containerElement.appendChild(carta.cloneNode(true));
  });
});

// Agregar evento click al botón Sort
const sortButton = document.getElementById('sortButton');
sortButton.addEventListener('click', function() {
  // Ordenar las cartas usando Selection Sort
  for (let i = 0; i < cartasGeneradas.length - 1; i++) {
    let indiceMin = i;
    for (let j = i + 1; j < cartasGeneradas.length; j++) {
      const cartaActual = cartasGeneradas[indiceMin];
      const cartaComprobar = cartasGeneradas[j];
      const valorActual = cartaActual.querySelector('.centro').textContent;
      const valorComprobar = cartaComprobar.querySelector('.centro').textContent;
      if (valores.indexOf(valorActual) > valores.indexOf(valorComprobar)) {
        indiceMin = j;
      }
    }
    if (indiceMin != i) {
      let temp = cartasGeneradas[i];
      cartasGeneradas[i] = cartasGeneradas[indiceMin];
      cartasGeneradas[indiceMin] = temp;

      // Mostrar las cartas después de cada movimiento
      setTimeout(() => {
        containerElement.innerHTML = '';
        cartasGeneradas.forEach(function(carta) {
          containerElement.appendChild(carta);
        });
      }, 100);
    }
  }

  // Mostrar las cartas ordenadas en el contenedor
  containerElement.innerHTML = '';
  cartasGeneradas.forEach(function(carta) {
    containerElement.appendChild(carta);
  });

  // Mostrar las cartas generadas originales en otro contenedor
  const containerOriginal = document.createElement('div');
  containerOriginal.classList.add('container');
  cartasGeneradasOriginales.forEach(function(carta) {
    containerOriginal.appendChild(carta);
  });
  document.body.appendChild(containerOriginal);
});
