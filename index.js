let turn="X";
let clickBtn=new Audio("ting.mp3");
let end=new Audio("Pikachu.mp3");
let isGameOver=false;
// document.getElementById('img').style.display="none";
const changeTurn=()=>{
    return turn==="X"?"0":"X";
}


//win logic
const checkWin=()=>{
    let elems = document.getElementsByClassName('box');
    let wins=[
        [0,1,2,4,4,0],
        [3,4,5,4,12.2,0],
        [6,7,8,4,20.2,0],
        [0,3,6,-4,12.2,90,8.4],
        [1,4,7,4.1,12.2,90,8.4],
        [2,5,8,12.1,12.2,90],
        [0,4,8,4,12.3,45],
        [2,4,6,4,12.5,135]
    ]
    wins.forEach(e=>{
        if((elems[e[0]].innerText===elems[e[1]].innerText) && (elems[e[1]].innerText===elems[e[2]].innerText) && (elems[e[0]].innerText!=="")){
            document.getElementById('part').innerText=changeTurn() + " won....";
            isGameOver=true;
            document.getElementsByTagName('img')[0].style.width="20vw";
            document.querySelector("#line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector("#line").style.width ="16.5vw";
            end.play();
            
        }
        
    })

}


//on going the game
let elems = document.getElementsByClassName('box');
console.log(elems);
Array.from(elems).forEach(e => {
    console.log("the e is:")
    console.log(e);
    e.addEventListener('click', function () {
        // document.getElementById('img').style.display="none";
        if (e.innerText == "") {
            clickBtn.play();
            e.innerText = turn;
            turn=changeTurn();
            checkWin();
            if(!isGameOver){
                document.getElementById('part').innerText="Turn of "+turn;
            }
        }
    })
})

//reset button

let button=document.getElementById('btn');
button.addEventListener('click',function(){
    let elems = document.getElementsByClassName('box');
    Array.from(elems).forEach(e=>{
        e.innerText="";
    })
    isGameOver=false;
    turn="X";
    document.getElementById('part').innerText="Turn of X";
    document.getElementsByTagName('img')[0].style.width="0";
    document.querySelector("#line").style.width ="0";
    end.pause();
})
