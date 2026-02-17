
let winner=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];
let turn='O';
let count=0;
let board_array=new Array(9).fill('E');
function checkWinner(){
    for(let [i1,i2,i3] of winner){
        if( board_array[i1]!='E' && (board_array[i1]===board_array[i2] && board_array[i3]===board_array[i2])){
            return 1;
        }
    }
    return 0;
}
const board=document.querySelector('.board');
// restart logic
const Restart=document.getElementById('restartButton');
Restart.addEventListener('click',()=>{
    const cell=document.getElementsByClassName('cell');
    Array.from(cell).forEach((value)=>{
        value.innerHTML="";
    });
    board_array = new Array(9).fill('E');
    turn='O';
    count=0;
    board.removeEventListener('click', win);
    board.addEventListener('click', win);
    document.getElementById('winning_message').innerHTML="";
});


// writing o and x to empty
board_array=new Array(9).fill('E');
document.getElementById('winning_message').innerHTML="";

// const board=document.querySelector('.board');

// board.addEventListener('click',(win)=>{
//     const cell=event.target;
//     // ab us cell k andar 0/x likho 
//     if(board_array[cell.id]==='E'){ // agar kuchh likha nahi hai tab likho 
//         document.getElementById('winning_message').innerHTML="";
//         if(turn==='O'){
//             cell.innerHTML='O';
//             turn='X';
//             board_array[cell.id]='O';
//             //winning logic
//             count++;
//             if(count>=5){
//                 if(checkWinner()){
//                     document.getElementById('winning_message').innerHTML="Winner is O";
//                     board.removeEventListener('click',(win));
//                 }
//                 else if(count==9){
//                     document.getElementById('winning_message').innerHTML="Match is draw";
//                 }
//             }
//         }
//         else{
//             cell.innerHTML='X';
//             turn='O';
//             count++;
//             board_array[cell.id]='X';
//             // wining logic 
//             if(count>=5){
//                 if(checkWinner()){
//                     document.getElementById('winning_message').innerHTML="Winner is X";
//                     board.removeEventListener('click',(win));
//                 }
//                 else if(count==9){
//                     document.getElementById('winning_message').innerHTML="Match is draw";
//                 }
//             }
//         }
//     }
//     else{
//         document.getElementById('winning_message').innerHTML="Box is Already filled click other box ";
//     }

// });

const win=(event)=>{
    const cell=event.target;
    // ab us cell k andar 0/x likho 
    if(board_array[cell.id]==='E'){ // agar kuchh likha nahi hai tab likho 
        document.getElementById('winning_message').innerHTML="";
        if(turn==='O'){
            cell.innerHTML='O';
            turn='X';
            board_array[cell.id]='O';
            //winning logic
            count++;
            if(count>=5){
                if(checkWinner()){
                    document.getElementById('winning_message').innerHTML="Winner is O";
                    board.removeEventListener('click', win);
                }
                else if(count==9){
                    document.getElementById('winning_message').innerHTML="Match is draw";
                }
            }
        }
        else{
            cell.innerHTML='X';
            turn='O';
            count++;
            board_array[cell.id]='X';
            // wining logic 
            if(count>=5){
                if(checkWinner()){
                    document.getElementById('winning_message').innerHTML="Winner is X";
                    board.removeEventListener('click', win);
                }
                else if(count==9){
                    document.getElementById('winning_message').innerHTML="Match is draw";
                }
            }
        }
    }
    else{
        document.getElementById('winning_message').innerHTML="Box is Already filled click other box ";
    }
}
board.addEventListener('click',win);

// hw rock paper scissor