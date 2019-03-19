const colorInput = document.querySelector("#colorPicker");

const gridHeight = document.querySelector('#inputHeight');
const gridWidth = document.querySelector('#inputWidth');
const gridCanvas = document.querySelector('#pixelCanvas');

function clickedBox(event) {
  const color = colorInput.value;
  event.target.style.backgroundColor = color;
}

function makeGrid() {
  // Your code goes here!
  gridCanvas.innerHTML = '';

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < gridHeight.value; i++) {
    const tr = document.createElement('tr');

    for (let z = 0; z < gridWidth.value; z++) {
      const td = document.createElement('td');
      tr.appendChild(td);
    }

    tr.addEventListener('click', clickedBox);
    fragment.appendChild(tr);
  }
  gridCanvas.appendChild(fragment);
};

document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid();
});
