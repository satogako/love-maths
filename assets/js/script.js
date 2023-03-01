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
                alert(`You clicked ${gameType} button!`);
            }
        })
        
    }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivideQuestion() {

}