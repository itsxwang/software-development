

import promptSync from 'prompt-sync';
const prompt = promptSync();

// console.log(`Hello, ${name}!`);


// ---------------------------------------------------------------
// Greet

// Ask for the user's name
// const name = prompt('What is your name? '); //! uncomment it 

// -------------------------------------------------------
// deck functionality

function createDeck() {
    const suits = ['♠', '♥', '♦', '♣'];  // Spades, Hearts, Diamonds, Clubs
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']; // Card values
    const deck = [];

    // for every suit it runs
    for (const suit of suits) {
        valuelabel: for (let value of values) {
            if (value === 'J' || value === 'Q' || value === 'K') {
                deck.push({ suit, value : '10' });  // Convert J, Q, K to 10
                continue valuelabel;
            }
            deck.push({ suit, value });  // Create a card object and add it to the deck
        }
    }

    return deck;

}


// Example usage
const deck = createDeck();
// console.log(deck); // Prints the full deck of 52 cards


function shuffleArray(array:typeof deck) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

const shuffled_Array = shuffleArray(deck);

// ---------------------------------------------------------------
let playerMoney = 100;
// ---------------------------------------------------------------

// ---------------------------------------------------------------
// Bet functionality
function placeBet() {
    const bet = Number(prompt("Place your bet: "));
    if (isNaN(bet)) {
        console.log("Invalid bet. Please enter a number.",'\n');
        placeBet();
    } else if (bet > playerMoney) {
        console.log(`You bet more money than you have. You have $${playerMoney}.`, '\n');
        placeBet();
    }
    else if (bet <= 0) {
        console.log(`You bet less money than you have. You have $${playerMoney}.`, '\n');
        placeBet();
    } else {
        playerMoney -= bet;
        console.log(`You bet $${bet} . Left: $${playerMoney}.`, '\n');
    }
}
// ---------------------------------------------------------------
function giveCards() {
    const playerCard = [shuffled_Array.pop(),shuffled_Array.pop()];
    const dealerCard = [shuffled_Array.pop(),shuffled_Array.pop()];    
        

    console.log(`Your hand: ${playerCard[0]!.value}, ${playerCard[1]!.value}. (Total: ${playerCard[0]!.value  + playerCard[1]!.value})`);
    console.log(`Dealer's hand: ${dealerCard[0]!.value}, [hidden]`);

}

placeBet();
giveCards();