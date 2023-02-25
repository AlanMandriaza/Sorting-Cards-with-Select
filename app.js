const pinta = ['♦', '♥', '♠', '♣'];
const valor = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const containerElement = document.querySelector('#container');
const buttonElement = document.getElementById('buttonElement');

buttonElement.addEventListener('click', function () {
  const divElement = document.createElement('div');
  

  divElement.classList.add('row','card');


  const randomPinta = pinta[Math.floor(Math.random() * pinta.length)];
  const randomValor = valor[Math.floor(Math.random() * valor.length)];

  const arribaElement = document.createElement('div');
  arribaElement.classList.add('col', 'arriba');
  arribaElement.textContent = randomPinta;

  
  if(randomPinta === '♦' || randomPinta === '♥') {
    arribaElement.style.color = 'red';
  } else if (randomPinta === '♠' || randomPinta === '♣') {
    arribaElement.style.color = 'black';
  }
  
  

  const centroElement = document.createElement('div');
  centroElement.classList.add('col', 'centro');
  centroElement.textContent = randomValor;

  const abajoElement = document.createElement('div');
  abajoElement.classList.add('col', 'abajo');
  abajoElement.textContent = randomPinta;

  if(randomPinta === '♦' || randomPinta === '♥') {
    abajoElement.style.color = 'red';
  } else if (randomPinta === '♠' || randomPinta === '♣') {
    abajoElement.style.color = 'black';
  }

  divElement.appendChild(arribaElement);
  divElement.appendChild(centroElement);
  divElement.appendChild(abajoElement);

  containerElement.appendChild(divElement);
});
