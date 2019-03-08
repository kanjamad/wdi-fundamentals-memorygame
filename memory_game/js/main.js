
var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "./images /queen-of-hearts.png"
        
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "./images /queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "./images /king-of-hearts.png"
    },  
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "./images /king-of-diamonds.png"
    }
];
var cardsInPlay = [];

var checkForMatch = function(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
        } else {
            alert("Sorry, try again.");
        }
};

var flipCard = function () {
    var cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    // Displaying the Front Image
    this.setAttribute('src', cards[cardId].cardImage);
    // where you are checking to see if two cards have been played,
    if (cardsInPlay.length === 2){
        checkForMatch();
    }
};

// Creating the Board
var createBoard = function(){
    for (var i = 0; i < cards.length; i++){
        // Creating Each Card
        var cardElement = document.createElement('img');
        // Adding the Card Image and ID
        cardElement.setAttribute('src', './images /back.png');
        cardElement.setAttribute('data-id', i);
        // Finalizing the Card
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
};

createBoard();


// Reset button

var button = document.getElementById("button");
button.addEventListener("click", function(){
    console.log("reset is working");
    // document.getElementById('game-board').innerHTML = "";
    
})