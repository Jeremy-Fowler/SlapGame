// Global

var health= 100;
var enemyName = "person";
let hits = 0

// Functions

function slap(){
    health -= 1
    hits++
    update()
    
}
function kick(){
    health -= 10
    hits++
    update()

}
function punch(){
    health -= 5
    hits++
    update()

}

function attack(action){
    if(action === "slap"){
        health
    }
}

function update(){
    document.getElementById('health').innerText = health
    document.getElementById("enemyName").innerText = enemyName
    document.getElementById("hits").innerText = hits
}
update()