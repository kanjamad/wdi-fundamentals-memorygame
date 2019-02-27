// ####################1st###############################
// var each card
// value of "queen" or "king"
// Total 4 card
// 2 should have value = "queen"
// 2 should have value = "king"
// They will represent your cards (e.g., "queen" card).
// Name your variables cardOne, cardTwo, cardThree, and cardFour.

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("User flipped " + cardThree);

// ######################################################
// ####################2nd###############################

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen");
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped king");
// add logic to check to see if two cards have been played
// Write an if statement that checks to see if the length
//  of the cardsInPlay array is 2.
/*
if (cardsInPlay.length === 2){
// Now we'll want to add logic that checks for equality 
// between the two cards in the cardsInPlay array.
    alert("You found a match!");
} else {
    alert("Sorry, try again.");
}
*/



if (cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
} else {
    alert("Sorry, try again.");
}
