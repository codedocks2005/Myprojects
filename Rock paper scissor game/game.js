let userscore = 0;
let computerscore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const computerscorepara = document.querySelector("#computer-score");



const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    // rock,paper,scissors
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    
};

const drawgame = () => {

    msg.innerText = "Your game was draw , Play again !";
    msg.style.backgroundColor = "brown";
};

const showwinner = (userwin, userchoice, computerchoice) => {
    if(userwin){
 userscore++;
 userscorepara.innerText = userscore ;
 msg.innerText = `You win ! ${userchoice} beats ${computerchoice}`;
 msg.style.backgroundColor = "green";
    }
    else {
        computerscore++ ;
        computerscorepara.innerText = computerscore ;
        
        msg.innerText = `You lost !  ${computerchoice} beats ${userchoice}`;   
        msg.style.backgroundColor = "red";  
    }
};

const playgame = (userchoice) => {

// Generate computer choice  => Modular way of programming 

const computerchoice = gencompchoice();

if(userchoice == computerchoice){
    // Draw game 
    drawgame();
}else{
    let userwin = true ;
    if(userchoice == "rock") {
        // scissor , paper
       userwin = computerchoice == "paper" ?   false :  true ;
    }else if(userchoice == "paper"){
        // rock , scissors 
        userwin = computerchoice == "scissors" ? false : true ;
    }else if (userchoice == "scissors"){
        // rock , paper
        userwin = computerchoice == "rock" ? false : true ;
    }
    showwinner(userwin, userchoice, computerchoice);
}
};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");

playgame(userchoice);
    });
});