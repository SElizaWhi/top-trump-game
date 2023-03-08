class Card{
   
  constructor(cardName, roles, awards, nominations, funFact){
      this.cardName = cardName
      this.roles = roles
      this.awards = awards
      this.nominations = nominations
      this.funFact = funFact
  } 
  
  }

const deck =[
new Card("George Clooney", 81, 95, 206, "Was voted `Sexiest Man Alive` by People magazine in 1997."),
new Card("Natalie Portman", 71, 94, 155, "Is trained in ballet, jazz, and tap dancing."),
new Card("Viola Davis", 94, 115, 230, "Named one of Time magazine's 100 Most Influential People in the World in 2012."),
new Card("Kate Winslet", 70, 104, 178, "Her performance in Eternal Sunshine of the Spotless Mind (2004) is her personal favorite."),
new Card("Anthony Hopkins", 147, 71, 128, "His early ambition was to be a concert pianist."),
new Card("Meryl Streep", 94, 178, 376, "As of 2018, she is the most nominated actress with 21 Academy Award nominations."),
new Card("Joaquin Pheonix", 57, 71, 190, "He is the second actor to win an Academy Award for playing a comic book character."),
new Card("Sandra Bullock", 59, 81, 122, "Hates musicals and vows to never participate in one."),
new Card("Daniel Day-Lewis", 30, 148, 95, "Has dual citizenship between the United Kingdom and Ireland."),
new Card("Julianne Moore", 107, 116, 163, "Received a star on the Hollywood Walk of Fame on October 3, 2013."),
new Card("Samuel L. Jackson", 204, 47, 95, "Was an usher at Dr. Martin Luther King, Jr.'s funeral."),
new Card("Glenn Close", 97, 74, 125, "Has won three Tony Awards for her work on Broadway."),
new Card("Dustin Hoffman", 87, 64, 54, "He was considered for the role of Michael Corleone in The Godfather (1972)."),
new Card("Salma Hayek", 85, 20, 51, "Salma fluently speaks Arabic, Spanish, Portuguese and English."),
new Card("Tom Holland", 39, 25, 35, "Has a very strong fear of spiders"),
new Card("McKenna Grace", 74, 3, 11, "Is a vegetarian and an animal rights activist."),
new Card("Leonardo DiCaprio", 52, 102, 263, "He is an environmental conservationist and often advocates and supports natural causes."),
new Card("Scarlett Johansson", 76, 70, 236, "Suffers from a morbid fear of birds and cockroaches."),
new Card("Keanu Reeves", 111, 13, 36, "Loves ballroom dancing."),
new Card("Hugh Jackman", 66, 33, 107, "Got a degree in journalism before turning to acting."),
]

const playerHand = document.getElementById("player-hand");
const computerHand = document.getElementById("computer-hand");
const startButton = document.getElementById("start-button");
const categoryButtons = document.querySelectorAll(".category-button");
let playerCards = [];
let computerCards = [];
let index =0;


function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let shuffledDeck = deck[i];
    deck[i] = deck[j];
    deck[j] = shuffledDeck;
  }
  return deck;
}

function displayCards(playerCard, computerCard) {
  playerHand.innerHTML = ``;
  computerHand.innerHTML = ``;
  
    playerHand.innerHTML += `
      <div class="card">
    <h2>${playerCard.cardName}</h2>
    <ul>
      <li>Roles: ${playerCard.roles}</li>
      <li>Awards: ${playerCard.awards}</li>
      <li>Nominations: ${playerCard.nominations}</li>
    </ul>
    <p>Fun fact: ${playerCard.funFact}</p>
    <p>Cards in your hand: ${playerCards.length}</p>
    </div>
  `;

    computerHand.innerHTML += `
  <div class="card">
    <h2>${computerCard.cardName}</h2>
    <ul>
      <li>Roles: ${computerCard.roles}</li>
      <li>Awards: ${computerCard.awards}</li>
      <li>IMDB score: ${computerCard.nominations}</li>
      </ul>
      <p>Fun fact: ${computerCard.funFact}</p>
      <p>Cards in your hand: ${computerCards.length}</p>
    </div>
  `;
}

function endGame(playerCards, computerCards) {
  if (playerCards.length > 0 && computerCards.length > 0) {
    // display the first card from each player's hand
    displayCards(playerCards[0], computerCards[0]);
  } else {
    let winner = "";
    if (playerCards.length === 0) {
      winner = "Computer";
    } else if (computerCards.length === 0) {
      winner = "Player";
    }
    // display the game over message with the winner
    playerHand.innerHTML = `
      <div class="game-over">
        <h2>Game Over</h2>
        <p>Winner: ${winner}</p>
        <button id="restart-button">Restart</button>
      </div>
    `;
    computerHand.innerHTML = "";
    // add a click event listener to the restart button
    document.querySelector("#restart-button").addEventListener("click", () => {
      // reload the page
      location.reload();
    });
  }
}

function comparingHands(playerValue, computerValue){
    if (playerValue > computerValue) {
      playerCards.push(computerCards.shift());
      playerCards.push(playerCards.shift());
      console.log("You won this round")
      endGame(playerCards, computerCards);
      
    } else if (computerValue > playerValue) {
      computerCards.push(playerCards.shift());
      computerCards.push(computerCards.shift());
      console.log("The computer won this round")
      endGame(playerCards, computerCards);     
    } else {
      console.log("It's a tie!")
      playerCards.push(playerCards.shift());
      computerCards.push(computerCards.shift());
      endGame(playerCards, computerCards);

    }
  }



    startButton.addEventListener("click", () => {
  const shuffledDeck = shuffle(deck);
  for (let i = 0; i < shuffledDeck.length; i++) {
    i % 2 === 0
      ? playerCards.push(shuffledDeck[i])
      : computerCards.push(shuffledDeck[i]);
  }
  displayCards(playerCards[0], computerCards[0]);
  document.querySelector('#start-button').disabled = true;
});


categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.value;
 console.log(playerCards[index], computerCards[index])
    const playerValue = playerCards[index][selectedCategory];
    const computerValue = computerCards[index][selectedCategory];
comparingHands(playerValue, computerValue);
  });
});
