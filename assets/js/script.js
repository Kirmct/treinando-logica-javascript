// variaveis
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
let btnIncrement = document.getElementById('incrementBtn');
let btnDecrement = document.getElementById('decrementBtn');


// eventos
btnIncrement.addEventListener('click', increment, false);
btnDecrement.addEventListener('click', decrement);



function increment(e) {
    if (currentNumber >= 10) {
        alert("Só sabemos contar até 10!!")
        console.log(currentNumber);
    }
    else {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
        if (currentNumber >= 0) {
            document.getElementById('currentNumber').style.color = 'black';
        }
    }
}

function decrement() {

    if (currentNumber < -9) {
        alert("Existe número menos que esse???")
    }
    else {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;

        if (currentNumber < 0) {
            document.getElementById('currentNumber').style.color = 'red';
        }
    }

}