let slots = [
    "","","",
    "","","",
    "","",""
];
let player1= "x";
let player2="o";
let turn = 1;
let countMoves = 0;
let gameOver = false;



$('.flex-item').click(function(event){
    if (gameOver === true ){
        $(this).off('click');
        console.log("no more playiong")
    } else {
        countMoves++;
        if (turn === 1) {
        
            event.target.innerHTML = player1;
            const position =$(event.target).attr("data-j")
            slots[position] = player1
            event.target.style.color = 'blue'
            turn ++;
            $(this).off('click');
        
        }else {
            event.target.innerHTML = player2;
            const position =$(event.target).attr("data-j")
            slots[position] = player2
            event.target.style.color = 'yellow'
            turn --;
            $(this).off('click');
        
        }
        console.log(slots);
        
        if (countMoves === 9) {
            console.log(' ties')
        }
        
       
    }
    if(winning()) {
        let winner = turn === 1 ? console.log('player1 has won') : console.log("player 2 has won");
        winner;
    }
     
})

function winning() {
        //check virtical
    if (slots[0] !== "" && slots[0] === slots[1] && slots[0] === slots[2]){
        console.log ('you won');
        
        gameOver = true
    }
    else if (slots[3] !=='' && slots[3] === slots[4] && slots[3] === slots[5]) {

        console.log ('you won');
        
        gameOver = true

    }  else if (slots[6] !=='' && slots[6] === slots[7] && slots[6] === slots[8]) {

        console.log ('you won');
        gameOver = true
        //check horizontal

    } else if (slots[0] !=='' && slots[0] === slots[3] && slots[0] === slots[6]) {

        console.log ('you won');
        gameOver = true

    } else if (slots[1] !=='' && slots[1] === slots[4] && slots[1] === slots[7]) {

        console.log ('you won');
        gameOver = true

    } else if (slots[2] !=='' && slots[2] === slots[5] && slots[2] === slots[8]) {

        console.log ('you won');
        gameOver = true
        //check diagonal
    } else if (slots[0] !=='' && slots[0] === slots[4] && slots[0] === slots[8]) {

        console.log ('you won');
        gameOver = true

    } else if (slots[2] !=='' && slots[2] === slots[4] && slots[2] === slots[6]) {

        console.log ('you won');
        gameOver = true
    }
}
   
  
    
$('#x').click(function () {
        
        player1 = 'o';
        player2 ='x'
        $('#x').removeClass('.btn-x');
        $('#o').addClass('.btn-o');
    
    
})

$('#o').click(function () {
  
        player1 = 'x';
        player2 ='o'
        $('#o').removeClass('.btn-o');
        $('#x').addClass('.btn-x');
})



