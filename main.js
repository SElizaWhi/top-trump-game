class Card{
   
    constructor(cardName, roles, awards, imdbScore, funFact){
        this.cardName = cardName
        this.roles = roles
        this.awards = awards
        this.imdbScore = imdbScore
        this.funFact = funFact
    } 
    }

const cards =[
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
let playerCards = [];
let computerCards = [];


function shuffle (cards) {
for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let shuffledCards = cards[i];
    cards[i] = cards[j];
    cards[j] = shuffledCards;
  }
  return cards;
}

function displayHands() {
    playerHand.innerHTML = ``;
    computerHand.innerHTML =``;
    for (let i = 0; i < playerCards.length; i++) {
        playerHand.innerHTML +=`
        <div class="card">
      <h2>${playerCards[i].cardName}</h2>
      <ul>
        <li>Roles: ${playerCards[i].roles}</li>
        <li>Awards: ${playerCards[i].awards}</li>
        <li>IMDB score: ${playerCards[i].imdbScore}</li>
      </ul>
      <p>Fun fact: ${playerCards[i].funFact}</p>
      </div>
    `;
  
    computerHand.innerHTML +=`
    <div class="card">
      <h2>${computerCards[i].cardName}</h2>
      <ul>
        <li>Roles: ${computerCards[i].roles}</li>
        <li>Awards: ${computerCards[i].awards}</li>
        <li>IMDB score: ${playerCards[i].imdbScore}</li>
        </ul>
        <p>Fun fact: ${playerCards[i].funFact}</p>
      </div>
    `;
    }
    }


  startButton.addEventListener("click", () => {
    const shuffledCards = shuffle(cards);
    for (let i = 0; i < shuffledCards.length; i++) {
      i % 2 === 0 ? playerCards.push(shuffledCards[i]) : computerCards.push(shuffledCards[i]);
      };
      displayHands();
    });

  
  
  const categoryButtons = document.querySelectorAll(".category-button");
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.textContent.trim();
  
     
      const playerValue = playerCards[0][selectedCategory];
      const computerValue = computerCards[0][selectedCategory];

      
  
      if (playerValue > computerValue) {
        playerCards.push(computerCards[0]);
        computerCards.shift();
      
  
      } else if (computerValue > playerValue) {
        computerCards.push(playerCards[0]);
        playerCards.shift();
    
      } else {
        playerCards.shift();
        computerCards.shift();
        
      }
  
      if (playerCards.length === 0) {
        console.log("Game over. You lose!");
      } else if (computerCards.length === 0) {
        console.log("Game over. You win!");
      } else {
        displayHands();
      }
    });
  });