function computerGenerateChoice(){
    
    let randomNumber = Math.random() * 3; // This function generate random number  between 0 to 3
    
    if(randomNumber > 0 && randomNumber <= 1){
        return 'bat';
    }else if(randomNumber > 1 && randomNumber <= 2){
        return 'ball';
    }else{
        return 'stump';
    }
}

function getResultMsg(userMove, computerMove){
    if(userMove === 'bat'){
        if(computerMove === 'bat'){
            return `It's a tie`;
        }else if(computerMove === 'ball'){
            return 'User has won';
        }else{
            return'Computer has won';
        }
    }else if(userMove === 'ball'){
        if(computerMove === 'bat'){
            return 'Computer has won';
        }else if(computerMove === 'ball'){
            return `It's a tie`;
        }else{
            return 'User has won';
        }
    }else{
        if(computerMove === 'bat'){
            return 'User has won';  
        }else if(computerMove === 'ball'){
            return 'Computer has won';
        }else{
            return `It's a tie`;
        }
    }
}

function showResult(userMove, computerMove,result){
    
    alert(`User chosen ${userMove}. Computer chosen ${computerMove} -> ${result}`);
}