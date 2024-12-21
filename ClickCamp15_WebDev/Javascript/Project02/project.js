let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let result = document.querySelector("#result");

let input = prompt("Input String : ");

console.log("String : " + input);

rock.addEventListener('click', () => { gameFunc("rock") });
paper.addEventListener('click', () => { gameFunc("paper") });
scissor.addEventListener('click', () => { gameFunc("scissor") });

function gameFunc (playerChoice) {
    const choices = ["rock", "paper", "scissor"];
    const botChoices = choices[Math.floor(Math.random() * 3)]

    let temp_result;

    if (playerChoice == botChoices) {
        temp_result = "Its a tie! Player and Bot choose the same choice";
    }
    else if ( (playerChoice == "rock" && botChoices == "scissor") ||
    (playerChoice == "paper" && botChoices == "rock") || 
    ( playerChoice == "scissor" && botChoices == "paper" ) ) {
        temp_result = "You win!" + " Player Choice : " + playerChoice + " | Bot Choices : " + botChoices;
    } else {
        temp_result = "You lose!" + " Player Choice : " + playerChoice + " | Bot Choices : " + botChoices;
    }

    result.innerHTML = temp_result;
}

// let rockbtn = document.querySelector("#rock");
// let paperbtn = document.querySelector("#paper");
// let scissorbtn = document.querySelector("#scissor");
// let ans = document.querySelector("#ans");

// function game(pChoice) {
//     let choice = ["Rock", "Paper", "Scissor"];
//     let bot = choice[Math.floor(Math.random() * 3)];
//     if (pChoice == bot) {
//         ans.innerHTML = "Tie " + " | PChoice : " + pChoice + " | BotChoice : " + bot; 
//     } else if ((pChoice == "Rock" && bot == "Scissor") || (pChoice == "Paper" && bot == "Rock") || (pChoice == "Scissor" && bot == "Paper")) {
//         ans.innerHTML = "Win " + " | PChoice : " + pChoice + " | BotChoice : " + bot; 
//     } else {
//         ans.innerHTML = "Lose " + " | PChoice : " + pChoice + " | BotChoice : " + bot; 
//     }
// }

// rockbtn.addEventListener("click", () => {game("Rock")});
// paperbtn.addEventListener("click", () => {game("Paper")});
// scissorbtn.addEventListener("click", () => {game("Scissor")});