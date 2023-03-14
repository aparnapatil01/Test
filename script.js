const createBoxBtnEle = document.querySelector('button');
const containerDiv = document.querySelector('#container');

createBoxBtnEle.addEventListener('click', () => {
  // Clear the previously painted boxes
  containerDiv.innerHTML = '';
  const inputEle = document.querySelector('input');
  const inputVal = +inputEle.value;
  if (inputVal) {
    createBoxes(inputVal);
    inputEle.value = '';
  }
});

function createBoxes(val) {
  for (let i = 0; i < val; i++) { // row
    const boxContainer = document.createElement('div');
    for (let j = 1; j <= val; j++) { // col
      const box = document.createElement('span');
      box.classList.add('box');
      boxContainer.appendChild(box);
    }
    containerDiv.appendChild(boxContainer);
  }
}

