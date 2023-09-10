// Coding Steps:
// For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players.
// You do not need to do anything special when there is a tie in a round.
// Think about how you would build this project and write your plan down. Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.
// You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input inside of your browser's console.
// The completed project should, when executed, do the following:
// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point.
// Ties result in zero points for both Players.
// After all cards have been played, display the score and declare the winner.
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.

/**!SECTION
 * 
 * Classes:
 * //what does they look like (adjectives/constructor), what does it do (verbs/methods)
 * 
 * Deck
 * Card 
 * Player
 * Game // holds the actual game logic
 * 
 */

// Here I created a class for a card with a suit and rank
class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}


// Here I created a class for a deck that contains 52 cards
class Deck{
    constructor() {
        this.cards =[];
        
        const suits = ["Hearts", "Diamnds", "Clubs", "Spades"];
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

        for(const suit of suits) {
            for(const rank of ranks){
                this.cards.push(new Card(suit, rank));

            }
        }
    }

    
    // Here I made a method to shuffle the deck
    shuffle() {
        for (let i = this.cards.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];


        }
    
    }


     // Here I made a method to deal cards 
    dealToPlayers(player1, player2) {
        this.shuffle ();
        for (let i = 0; i < this.cards.length; i++) {
            if (i % 2 === 0) {
               player1.addCard(this.cards[i]);
 
            } else {
                player2.addCard(this.cards[i]); 
           
            }
        }
    
    }
}
    

// Here I created a class for a player with a hand of cards and points
class Player {
    constructor() {
        this.hand = [];
        this.points= 0;
    }



// Here I made a method to add a card to the player's hand
    addCard(card) {
        this.hand.push(card);
    }



// Here I made a method to play a card and return it
    playCard() {
        return this.hand.shift();
    }



// Here I made a method to give a point to the a player
    awardPoint() {
        this.points++;
    }

}



// Here I created two players and a deck, then deal cards to players
const player1 = new Player();
const player2 = new Player();
const deck = new Deck();
deck.dealToPlayers(player1, player2);



// Here it plays the game by iterating through turns
while (player1.hand.length > 0 && player2.hand.length > 0) {
    const card1 = player1.playCard();
    const card2 = player2.playCard();

    console.log(`Player 1 plays ${card1.rank} of ${card1.suit}, Player 2 plays ${card2.rank} of ${card2.suit}`);

    if(card1.rank > card2.rank) {
        player1.awardPoint();
        console.log('Player 1 wins this hand!');
    } else if (card2.rank > card1.rank) {
        player2.awardPoint();
        console.log('Player 2 wins this hand!');
    } else {
        console.log('It is a tie!');

    }

}

// Here it gives the final score and gives the winner
console.log(`Player 1 score ${player1.points}`);
console.log(`Player 2 score: ${player2.points}`);

if (player1.points > player2.points) {
    console.log('Player 1 wins the game!');
} else if (player2.points > player1.points) {
    console.log('Player 2 wins the game!');
}   else {
    console.log('It is a tied game');
}





