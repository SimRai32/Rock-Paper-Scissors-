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
let player_Score = 0;
let computer_Score = 0;
function score(result){
    if (result == 1){
        computer_Score++;
        document.getElementById("results").innerHTML ="Score:"+" "+player_Score+"-"+computer_Score;
    }
    else if (result == 2){
        player_Score++;
        document.getElementById("results").innerHTML ="Score:"+" "+player_Score+"-"+computer_Score;
    }
    else if (result == 3){
        
        document.getElementById("results").innerHTML ="Score:"+" "+player_Score+"-"+computer_Score+" "+"Tie!!";
    }
}
function winner(playerScore,computerScore){
    if (playerScore == 5){
        document.getElementById("results").innerHTML ="Player Wins!"+" "+"Score:"+" "+player_Score+"-"+computer_Score;
        player_Score=0;
        computer_Score=0;
    }
    else if(computerScore == 5){
        document.getElementById("results").innerHTML ="Computer Wins!"+" "+"Score:"+" "+player_Score+"-"+computer_Score;
        player_Score=0;
        computer_Score=0;
    }
    
}
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>{
button.addEventListener("click", () =>{
    let test = playRound(button.value, computerPlay());
    score(test);
    winner(player_Score,computer_Score);
   
    });
});
