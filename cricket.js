let score = {
    Win: 0,
    Lost: 0,
    Tie: 0,
};
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
            score.Tie++;
            return `It's a tie`;
        }else if(computerMove === 'ball'){
            score.Win++;
            return 'User has won';
        }else{
            score.Lost++;
            return'Computer has won';
        }
    }else if(userMove === 'ball'){
        if(computerMove === 'bat'){
            score.Lost++;
            return 'Computer has won';
        }else if(computerMove === 'ball'){
            score.Tie++;
            return `It's a tie`;
        }else{
            score.Win++;
            return 'User has won';
        }
    }else{
        if(computerMove === 'bat'){
            score.Win++;
            return 'User has won';  
        }else if(computerMove === 'ball'){
            score.Lost++;
            return 'Computer has won';
        }else{
            score.Tie++;
            return `It's a tie`;
        }
    }
}

function showResult(userMove, computerMove,result){
    // console.log(`Win: ${score.Win}, Lost: ${score.Lost}, Tie: ${score.Tie}`);
    
    alert(`User chosen ${userMove}. Computer chosen ${computerMove}
    
        ${result}
    
        Win: ${score.Win}, Lost: ${score.Lost}, Tie: ${score.Tie}`);
}