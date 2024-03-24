let elDiceOne = document.getElementById('dice1');
let elDiceTwo = document.getElementById('dice2');
let elComeOut = document.getElementById('roll');

elComeOut.onclick = function () {
    rollDice();
};

function rollDice() {
    // Elimina las clases de mostrar del elemento de los dados
    elDiceOne.classList.remove('show-1', 'show-2', 'show-3', 'show-4', 'show-5', 'show-6');
    elDiceTwo.classList.remove('show-1', 'show-2', 'show-3', 'show-4', 'show-5', 'show-6');

    // Genera números aleatorios para los dados
    let diceOne = Math.floor((Math.random() * 6) + 1);
    let diceTwo = Math.floor((Math.random() * 6) + 1);

    // Muestra los dados girando durante un tiempo antes de mostrar el resultado
    setTimeout(function() {
        // Muestra el resultado de los dados
        elDiceOne.classList.add('show-' + diceOne);
        elDiceTwo.classList.add('show-' + diceTwo);
    }, 500);
}