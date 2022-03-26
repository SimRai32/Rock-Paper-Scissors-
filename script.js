function computerPlay(){
    choices = ["Rock", "Paper", "Scissors"];
    return(choices[Math.floor(Math.random()*3)]);
  }


function playRound(playerSelection, computerSelection){
    x = 0;
    playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerChoice == "Rock"){
        if (computerSelection == "Paper"){
            x = 1;
        }
        else if (computerSelection == "Scissors"){
            x = 2;
        }
       
    }
    else if (playerChoice == "Paper"){
        if (computerSelection == "Scissors"){
            x = 1;
        }
        else if (computerSelection == "Rock"){
            x = 2;
        }
        
    }
    else if (playerChoice == "Scissors"){
        if (computerSelection == "Rock"){
            x = 1;
        }
        else if (computerSelection == "Paper"){
            x = 2;
        }
          

    }
    else{
        return ("I do not understand");
    }
    if (x == 1){
        return 1;
    }
    else if (x == 2){
        return 2;
    }
    else{
        return 3;
    }
    

}

function game(){
    Player = 0;
    Computer = 0;
    for (i=0;i<5;i++){
        playerChoice=prompt("Choose between Rock, Paper, or Scissors!");
        Winner=playRound(playerChoice,computerPlay());
        if (Winner == 1){
            Player++;
            console.log(("You Win!"));
        }
        else if (Winner == 2){
            Computer++;
            console.log("You Lose!");
        }
        else{
            console.log("It's a tie!");
            continue;
        }
    }
    if(Player > Computer){
        console.log("You won"+" "+Player+"-"+Computer+"!!");
    }
    else if(Player < Computer){
        console.log("You lose"+" "+Player+"-"+Computer+"!!");
    }
    else{
        console.log("It's a tie!!"+" "+Player+"-"+Computer+"!!");
    }
}
game();