let slots = [
    "","","",
    "","","",
    "","",""
];
let player1= "x";
let player2="o";
let turn = 1;
let countMoves = 0;



$('.flex-item').click(function(event){

    countMoves++;
    if (turn === 1) {
        
        event.target.innerHTML = player1;
       const position =$(event.target).attr("data-j")
        slots[position] = player1
        event.target.style.color = 'blue'
        turn ++;
    }else {
        event.target.innerHTML = player2;
        const position =$(event.target).attr("data-j")
        slots[position] = player2
        event.target.style.color = 'yellow'
        turn --;
    }
    console.log(slots);
        winning();
            

        
})

function winning() {
        //check virtical
    if (slots[0] !== "" && slots[0] === slots[1] && slots[0] === slots[2]){
        console.log ('you won');
    }
    else if (slots[3] !=='' && slots[3] === slots[4] && slots[3] === slots[5]) {

        console.log ('you won');

    }  else if (slots[6] !=='' && slots[6] === slots[7] && slots[6] === slots[8]) {

        console.log ('you won');
        //check horizontal

    } else if (slots[0] !=='' && slots[0] === slots[3] && slots[0] === slots[6]) {

        console.log ('you won');

    } else if (slots[1] !=='' && slots[1] === slots[4] && slots[1] === slots[7]) {

        console.log ('you won');

    } else if (slots[2] !=='' && slots[2] === slots[5] && slots[2] === slots[8]) {

        console.log ('you won');
        //check diagonal
    } else if (slots[0] !=='' && slots[0] === slots[4] && slots[0] === slots[8]) {

        console.log ('you won');

    } else if (slots[2] !=='' && slots[2] === slots[4] && slots[2] === slots[6]) {

        console.log ('you won');
    }
}
   
  
    
$(':button').click(function () {
    if (this.id == 'x') {
        player1 = 'x';
        player2 ='o'
        $('#x').removeClass('btn-x');
        $('#o').addClass('btn-o');
    }
    else if (this.id == 'o') {
        player2 = 'x';
        player1= 'o';
        $('#x').addClass('btn-x');
        $('#o').removeClass('btn-o');
    }
})


