let currMoleTile;
let currPlantTile;
let score=10;
let gameOver=false;
window.onload=function(){
    setGame();
}

function setGame(){
    for(let i=0;i<9;i++){
        let title=document.createElement("div");
        title.id=i.toString();
        title.addEventListener("click",selectTile);
    
        document.getElementById("board").appendChild(title);
       

    }
   
    setInterval(setMole,1000);
    setInterval(setPlant,2000);

}
function getRandomTile(){
    
  let num=Math.floor(Math.random()*9);
  return num.toString();
}

function setMole(){
    
    if(gameOver){
        return
    }
   
    console.log("its working");
    if(currMoleTile){
        console.log("if block executive");
        currMoleTile.innerHTML="";
    }

    let mole=document.createElement("img");
    mole.src="image/monty-mole.png";
    
    let num=getRandomTile();
    if(currPlantTile && currPlantTile.id==num){
        return;
    }
    currMoleTile=document.getElementById(num);
    currMoleTile.appendChild(mole);
   
   
    
}
function setPlant(){
   
    if(gameOver){
        return
    }
    if(currPlantTile){
        currPlantTile.innerHTML="";
    }
    Tile=document.createElement("img");
    Tile.src="image/piranha-plant.png"
    let num=getRandomTile();
    if(currMoleTile && currMoleTile.id==num){
        reuturn;
    }
    currPlantTile=document.getElementById(num)
    currPlantTile.appendChild(Tile);
}
function selectTile(){
    if(gameOver){
        return;
    }
    if(this==currMoleTile){
        score+=10;
        document.getElementById("score").innerText=score.toString();
    }
    else if(this==currPlantTile){
        gameOver=true;
        document.getElementById("score").innerText="Game Over";
    }

}


