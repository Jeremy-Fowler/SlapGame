// Global

var health= 100;
var enemyName = "person";
let player1Hits = 0
let player2Hits = 0
var characters = {

    
    ken: {
        name: "Ken",
        health: 120,
        attacks: {
            kick: 20,
            punch: 15,
            shoryuken: 30,
            hadouken: 40
        },
        mobility: 35
    },
    
    ryu: {
        name: "Ryu",
        health: 100,
        attacks: {
            kick: 15,
            punch: 10,
            shoryuken: 25,
            hadouken: 60
        },
        mobility: 55
    },
}
    
    
    // Functions
    
    // function slap(){
        //     health -= 1
        //     hits++
        //     update()
    
// }
// function kick(){
//     health -= 10
//     hits++
//     update()

// }
// function punch(){
//     health -= 5
//     hits++
//     update()

// }

function player1Attack(action){
    if(action === "slap"){
        characters.ryu.health -= 1
    }if (action === "punch"){
        characters.ryu.health -= 5
    }if (action === "kick"){
        characters.ryu.health -= 10
    }
    player1Hits++
    update()
}
function player2Attack(action){
    if(action === "slap"){
        characters.ken.health -= 1
    }if (action === "punch"){
        characters.ken.health -= 5
    }if (action === "kick"){
        characters.ken.health -= 10
    }
    player2Hits++
    update()
}

function update(){
    document.getElementById('player1Health').innerText = characters.ken.health.toString()
    document.getElementById("player1Name").innerText = characters.ken.name
    document.getElementById("player1Hits").innerText = player1Hits.toString()

    document.getElementById('player2Health').innerText = characters.ryu.health.toString()
    document.getElementById("player2Name").innerText = characters.ryu.name
    document.getElementById("player2Hits").innerText = player2Hits.toString()
}
update()