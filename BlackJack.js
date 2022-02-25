
let cards = []
let sum = 0
let blackjack = false
let stillalive = false
let massage = " "
let chips = 100

let cards1 = document.getElementById("cards")
let MessageEl = document.getElementById("text-el")
let sumEl = document.getElementById("sum")
let playerEl = document.getElementById("player")

    let person = prompt("Please enter your name")
        
    let player = {
    name: person
    }
    

function startgame(){
    if (chips > 0){
        stillalive = true

        let firstcard = rencard()
        let secondcard = rencard()
        
        cards = [firstcard , secondcard]
        sum = firstcard + secondcard

        playerEl.textContent = player.name + ": $"+ chips

        rendergame()
    }
    else{
        document.querySelector('body').textContent = "GAME OVER"
    }
    
}

function rencard(){
    let rcard = Math.floor(Math.random()*13)+1
    console.log(player.chips)
    
    if (rcard === 1){
       return 11
    }
    else if(rcard > 10){
        return 10
    }
    else {
        return rcard
    }
}

function rendergame(){
    
    cards1.innerText = "Cards :"
    for (let i = 0 ; i < cards.length ; i++){
        cards1.innerText +=  " "+cards[i] 
    }
    
    sumEl.textContent = "Sum :" + sum
    if (sum<=20){
        massage = 'Do you wanna draw a new card'
    }
    else if (sum === 21){
        massage = "you're got BlackJack!"
        blackjack = true
        chips += 50 
    }
    else {
        massage = "You're out of the game"
        stillalive = false
        chips -= 50
    }
    
    MessageEl.textContent = massage
    console.log(cards)
}

function newcard(){
    if (stillalive === true){
        let ncard = rencard()
        sum += ncard
        cards.push(ncard)
        rendergame() 
    }
   
}

function newgame(){
    startgame()
}