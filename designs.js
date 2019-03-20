const colorInput = document.querySelector("#colorPicker");

const gridHeight = document.querySelector('#inputHeight');
const gridWidth = document.querySelector('#inputWidth');
const gridCanvas = document.querySelector('#pixelCanvas');

function clickedBox(e) {
 // const color = colorInput.value;
  e.target.style.backgroundColor = colorInput.value;
}

function makeGrid() {
  // Your code goes here!
  gridCanvas.innerHTML = '';

 // const fragment = document.createDocumentFragment();

  for (let i = 0; i < gridHeight.value; i++) {
    let tr = gridCanvas.insertRow(i);


    for (let z = 0; z < gridWidth.value; z++) {
      let td = tr.insertCell(z);
    //  tr.appendChild(td);

    td.addEventListener("click", clickedBox);

    }


   // fragment.appendChild(tr);
}


 // gridCanvas.appendChild(fragment);
};


 document.querySelector('form').addEventListener('submit', function(e){
   e.preventDefault();
  makeGrid();
});
