// Global

var health= 100;
var enemyName = "person";
let hits = 0
var characters = {

    
    ken: {
        name: "Ken",
        health: 120,
        attacks: {
            kick: 20,
            punch: 15,
            uppercut: 30,
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
            uppercut: 25,
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

function attack(action){
    if(action === "slap"){
        ken.health -= 1
    }if (action === "punch"){
        ken.health -= 5
    }if (action === "kick"){
        ken.health -= 10
    }
    hits++
    update()
}

function update(){
    document.getElementById('health').innerText = ken.health
    document.getElementById("enemyName").innerText = ken.name
    document.getElementById("hits").innerText = hits
}
update()