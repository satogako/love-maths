//Wait for the DOM to finish loading before runing the game
//Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type') === 'submit') {
                alert('You  submit!')
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
        
    }

    //runGame('addition');
})

function runGame(gameType) {

    //Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2); 
    } else {
        alert(`Uknown game type: ${gameType}`);
        throw `Uknown game type: ${gameType}. Aborting!`
    }  
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivideQuestion() {

}