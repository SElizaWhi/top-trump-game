class Card{
   
  constructor(cardName, roles, awards, imdbScore, funFact){
      this.cardName = cardName
      this.roles = roles
      this.awards = awards
      this.imdbScore = imdbScore
      this.funFact = funFact
  } 
  }

const deck =[
new Card("George Clooney", 81, 95, 94, "Was voted `Sexiest Man Alive` by People magazine in 1997."),
new Card("Natalie Portman", 71, 94, 8, "Is trained in ballet, jazz, and tap dancing."),
new Card ("Viola Davis", 94, 115, 344, "Named one of Time magazine's 100 Most Influential People in the World in 2012."),
new Card ("Kate Winslet", 70, 104, 104, "Her performance in Eternal Sunshine of the Spotless Mind (2004) is her personal favorite."),
new Card("Anthony Hopkins", 147, 71, 127, "His early ambition was to be a concert pianist."),
new Card("Meryl Streep", 94, 178, 113, "As of 2018, she is the most nominated actress with 21 Academy Award nominations."),
new Card("Joaquin Pheonix", 57, 71, 92, "He is the second actor to win an Academy Award for playing a comic book character."),
new Card("Sandra Bullock", 59, 81, 13, "Hates musicals and vows to never participate in one."),
new Card("Daniel Day-Lewis", 30, 148, 114, "Has dual citizenship between the United Kingdom and Ireland."),
new Card("Julianne Moore", 107, 116, 258, "Received a star on the Hollywood Walk of Fame on October 3, 2013."),
new Card("Samuel L. Jackson", 204, 47, 90, "Was an usher at Dr. Martin Luther King, Jr.'s funeral."),
new Card("Glenn Close", 97, 74, 471, "Has won three Tony Awards for her work on Broadway."),
new Card("Dustin Hoffman", 87, 64, 240, "He was considered for the role of Michael Corleone in The Godfather (1972)."),
new Card("Salma Hayek", 85, 20, 22, "Salma fluently speaks Arabic, Spanish, Portuguese and English."),
new Card("Tom Holland", 39, 25, 2, "Has a very strong fear of spiders"),
new Card("McKenna Grace", 74, 3, 54, "Is a vegetarian and an animal rights activist."),
new Card("Leonardo DiCaprio", 52, 102, 18, "He is an environmental conservationist and often advocates and supports natural causes."),
new Card("Scarlett Johansson", 76, 70, 27, "Suffers from a morbid fear of birds and cockroaches."),
new Card("Keanu Reeves", 111, 13, 56, "Loves ballroom dancing."),
new Card("Hugh Jackman", 66, 33, 113, "Got a degree in journalism before turning to acting."),
]

const playerHand = document.getElementById("player-hand");
const computerHand = document.getElementById("computer-hand");
const startButton = document.getElementById("start-button");
const categoryButtons = document.querySelectorAll(".category-button");
let playerCards = [];
let computerCards = [];
let score = 0;


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
      <li>IMDB score: ${playerCard.imdbScore}</li>
    </ul>
    <p>Fun fact: ${playerCard.funFact}</p>
    </div>
  `;

    computerHand.innerHTML += `
  <div class="card">
    <h2>${computerCard.cardName}</h2>
    <ul>
      <li>Roles: ${computerCard.roles}</li>
      <li>Awards: ${computerCard.awards}</li>
      <li>IMDB score: ${playerCard.imdbScore}</li>
      </ul>
      <p>Fun fact: ${playerCard.funFact}</p>
    </div>
  `;
}

startButton.addEventListener("click", () => {
  const shuffledDeck = shuffle(deck);
  for (let i = 0; i < shuffledDeck.length; i++) {
    i % 2 === 0
      ? playerCards.push(shuffledDeck[i])
      : computerCards.push(shuffledDeck[i]);
  }
  displayCards(playerCards[0]);
});


categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.textContent.trim();

    const playerValue = playerCards[0][selectedCategory];
    const computerValue = computerCards[0][selectedCategory];

    if (playerValue > computerValue) {
      playerCards.push(computerCards[0]);
      computerCards.pop();
      displayCards(playerCards[0], computerCards[0] /*, activePlayer*/);
      document.getElementById('playerCards').innerHTML = "Score: " + score;
    } else if (computerValue > playerValue) {
      computerCards.push(playerCards[0]);
      playerCards.pop();
      displayCards(playerCards[0], computerCards[0] /*, activePlayer*/);
    } else {
      playerCards.shift();
      computerCards.shift();
    }

    if (playerCards.length === 0) {
      console.log("Game over. You lose!");
    } else if (computerCards.length === 0) {
      console.log("Game over. You win!");
    } else {

      console.log("Player cards" + playerCards.length);

      /*displayCards(playerCards[currentPlayCard], computerCards[currentComCard])*/
    }
  });
});
