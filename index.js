var dice1 = 0;
var dice2 = 0;
var result;

function startState() {

    dice1 = 0;
    dice2 = 0;

}



function diceRoll(player) {


    if (player === 1) {
        dice1 = Math.floor(Math.random() * 6) + 1;
        var rand_img1 = "dice" + dice1 + ".png";
        document.querySelector(".img1").src = "images/" + rand_img1;

    }
    else if (player === 2) {
        dice2 = Math.floor(Math.random() * 6) + 1;
        var rand_img2 = "dice" + dice2 + ".png";
        document.querySelector(".img2").src = "images/" + rand_img2;

    }




    if (dice1 !== 0 && dice2 !== 0) {

        if (dice1 > dice2) {
            result = "Player 1 wins!";


        } else if (dice2 > dice1) {
            result = "Player 2 wins!";


        } else {
            result = "It's a tie!";

        }

        document.querySelector("h1").textContent = result;
        startState();

    }
    else {
        result = "Next Player...";
        document.querySelector("h1").textContent = result;

    }




}


document.querySelectorAll('.btn')[0].onclick = function () { diceRoll(1) };


document.querySelectorAll('.btn')[1].onclick = function () { diceRoll(2) };





