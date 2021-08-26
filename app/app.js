// Global

// var health= 100;
var enemyName = "person";
let player1Hits = 0
let player2Hits = 0
var characters = {

    
    ken: {
        name: "Ken",
        health: 120,
        special: "SHORYUKEN",
        mobility: 35
    },
    
    ryu: {
        name: "Ryu",
        health: 100,
        special: 'HADOUKEN',
    
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
    }if (action === "special"){
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
    }if (action === "special"){
        characters.ken.health -= 15
    }
    player2Hits++
    update()
}

function depleteHealthBar(){
    
}

function playerWins(){
    if (characters.ryu.health <= 0){
        Swal.fire({
            title: 'KEN WINS!',
            text: 'Go home and be a family man',
            imageUrl: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/street-fighter-ii/sticker_16.png?353dcca039ddfedacfe541638970c0fd&d=200x200',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'Custom image',
          })
        characters.ryu.health = 100
        characters.ken.health = 120
        update()  
    }else if(characters.ken.health <=0){
        // @ts-ignore
        Swal.fire({
            title: 'RYU WINS!',
            text: 'Go home and be a family man',
            imageUrl: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/street-fighter-ii/sticker_18.png?353dcca039ddfedacfe541638970c0fd&d=200x200',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'Custom image',
          })
        characters.ryu.health = 100
        characters.ken.health = 120
        update() 
    }
      
}

function update(){
    document.getElementById('player1Health').innerText = characters.ken.health.toString()
    document.getElementById("player1Name").innerText = characters.ken.name
    document.getElementById("player1Hits").innerText = player1Hits.toString()
    document.getElementById("player1Special").innerText = characters.ken.special

    document.getElementById('player2Health').innerText = characters.ryu.health.toString()
    document.getElementById("player2Name").innerText = characters.ryu.name
    document.getElementById("player2Hits").innerText = player2Hits.toString()
    document.getElementById("player2Special").innerText = characters.ryu.special
    playerWins()
}
update()