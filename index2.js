// yourTurn();

let ting=new Audio("ting.mp3");

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

const computerTurn=()=>{

setInterval(function () {
    let a = Math.floor(Math.random() * 9);
    let elems = document.getElementsByClassName('box');
    if (elems[a].innerText === "") {
        elems[a].innerText = "0";
        ting.play();
        yourTurn();
    }
}, 5000)

}

const yourTurn=()=>{
    let elems1=document.getElementsByClassName('box');
    Array.from(elems1).forEach(e=>{
        e.addEventListener('click',function(){
            if(e.innerText===""){
                e.innerText="X";
                ting.play();
                document.getElementById('part').innerText="Turn of 0";
                computerTurn();
            }
        })
    })
}

yourTurn();

