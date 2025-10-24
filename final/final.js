// Jacob Phillips, 10/23/2025

let enteredNumber = document.getElementById('num');
let button = document.querySelector("button");

function additionLoop() {
    let addition = document.getElementById('add');

    for (let x = 0; x <= 10; x++) {
        
        additionString = x + " + " + enteredNumber.value + " = " + (x + parseInt(enteredNumber.value));
        addition.innerHTML += additionString + "<br>";
    }
}

function subtractionLoop() {
    let w = 0;
    let subtraction = document.getElementById('sub');

    while (w <= 10) {
        subtractionString = w + " - " + enteredNumber.value + " = " + (w - parseInt(enteredNumber.value));
        subtraction.innerHTML += subtractionString + "<br>";
        w += 1;
    }
}

function multiplicationLoop() {
    let y = 0;
    let multiplication = document.getElementById('mult');

    do {
        multiplicationString = y + " * " + enteredNumber.value + " = " + (y * parseInt(enteredNumber.value));
        multiplication.innerHTML += multiplicationString + "<br>";
        y += 1;
    } while (y <= 10);
}

function divisionLoop() {
    let z = 0;
    let division = document.getElementById('div');

    do {
        divisionString = z + " / " + enteredNumber.value + " = " + (z / parseFloat(enteredNumber.value)).toFixed(2);
        division.innerHTML += divisionString + "<br>";
        z += 1;
    } while (z <= 10);
}

function allTheLoops() {
    additionLoop();
    subtractionLoop();
    multiplicationLoop();
    divisionLoop();
}

button.addEventListener('click', allTheLoops);