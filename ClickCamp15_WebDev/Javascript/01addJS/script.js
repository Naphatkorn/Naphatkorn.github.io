let rock = document.querySelector("#r");
let paper = document.querySelector("#p");
let sci = document.querySelector("#s");

function game(player) {
    const choice = ["rock", "paper", "scissor"];
    const bot = choice[Math.floor(Math.random() * 3)];
    if (player == bot) {
        ans.innerHTML = "Tie " + "Player Choice : " + player + " | Bot Choice : " + bot;
    } else if ((player == "rock" && bot == "scissor") || (player == "paper" && bot == "rock") || (player == "scissor" && bot == "paper")) {
        ans.innerHTML = "Win " + "Player Choice : " + player + " | Bot Choice : " + bot;
    } else {
        ans.innerHTML = "Lose " + "Player Choice : " + player + " | Bot Choice : " + bot;
    }
}

rock.addEventListener("click", () => {game("rock")});
paper.addEventListener("click", () => {game("paper")});
sci.addEventListener("click", () => {game("scissor")});