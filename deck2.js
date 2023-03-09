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
  new Card("BTS", 7, 24, 506, "Their discography and adjacent work references literature, philosophy and psychological concepts, and includes an alternate universe storyline."),
  new Card("GOT7", 7, 21, 57, "The group gained attention also for their live performances, which often include elements of martial arts tricking and street dancing.."),
  new Card("Stray Kids", 8, 15, 53, "The group was formed by JYP Entertainment through the 2017 reality show of the same name."),
  new Card("BtoB", 6, 4, 18, "They donated ₩50 Million to help the victims of the Pohang earthquake."),
  new Card("Red Velvet", 5, 16, 59, "Are the fifth most streamed K-pop artist worldwide on Spotify."),
  new Card("Black Pink", 4, 11, 101, "They became the most-subscribed music group on YouTube in September 2019."),
  new Card("Big Bang", 4, 37, 137, "Dubbed the 'Kings of K-pop', they helped spread the Korean Wave internationally and are considered one of the most influential acts in K-pop."),
  new Card("Ateez", 8, 13, 17, "They are ambassadors for Polished Man, an initiative raising funds for trauma prevention and trauma recovery programs for young survivors of violence."),
  new Card("Twice", 9, 28, 114, "The first female Korean act to simultaneously top both Billboard's World Albums and World Digital Song Sales charts."),
  new Card("Seventeen", 13, 17, 92, "Seventeen is considered a self-producing idol group, with the members actively involved in all aspects of their music and performances."),
  new Card("EXO", 9, 29, 176, "In 2021, Exo became 'sextuple million sellers', meaning the band has sold over one million copies apiece for six different albums."),
  new Card("MONSTA X", 6, 22, 55, "They are known for their aggressive style, combining elements of hip hop, EDM and pop."),
  new Card("Super Junior", 10, 31, 171, "The group are acclaimed for their vocal harmonization and unison as each member contributes a different range in their choruses."),
  new Card("Day6", 4, 14, 5, " All of the members are heavily involved in writing, composing and producing the band's music."),
  new Card("iKon", 6, 18, 33, "Their hit single 'Love Scenario' topped the Gaon Digital Chart for a record-breaking six weeks"),
  new Card("NCT", 23, 8, 94, "The group is divided into four different sub-units: NCT U, NCT 127, NCT Dream, and WayV."),
  new Card("WINNER", 4, 13, 17, "The band has cumulatively held over 100 concerts."),
  new Card("ITZY", 5, 9, 33, "They are the first K-pop girl group to achieve a 'Rookie Grand Slam'"),
  new Card("Mamamoo", 4, 16, 44, "Prior to their official debut, Mamamoo collaborated with several artists."),
  new Card("Girls' Generation", 8, 25, 125, "They are the first Asian girl group to achieve five music videos with over 100 million views on YouTube."),
  ]
  
  const playerHand = document.getElementById("player-hand");
  const computerHand = document.getElementById("computer-hand");
  const startButton = document.getElementById("start-button");
  const categoryButtons = document.querySelectorAll(".category-button");
  let playerCards = [];
  let computerCards = [];
  let index = 0;
  let computerChoice = 0;
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
        <li>Members: ${playerCard.roles}</li>
        <li>Albums: ${playerCard.awards}</li>
        <li>Awards: ${playerCard.nominations}</li>
      </ul>
      <p>Fun fact: ${playerCard.funFact}</p>
      <p>Cards in your hand: ${playerCards.length}</p>
      </div>
    `;
  
    computerHand.innerHTML += `
    <div class="card">
      <h2>${computerCard.cardName}</h2>
      <ul>
        <li>Members: ${computerCard.roles}</li>
        <li>Albums: ${computerCard.awards}</li>
        <li>Awards: ${computerCard.nominations}</li>
        </ul>
        <p>Fun fact: ${computerCard.funFact}</p>
        <p>Cards in your hand: ${computerCards.length}</p>
      </div>
    `;
  }
  
  function endGame(playerCards, computerCards) {
    if (playerCards.length > 0 && computerCards.length > 0) {
     
      displayCards(playerCards[0], computerCards[0]);
    } else {
      let winner = "";
      if (playerCards.length === 0) {
        winner = "Computer";
      } else if (computerCards.length === 0) {
        winner = "Player";
      }
      
      playerHand.innerHTML = `
        <div class="game-over">
          <h2>Game Over</h2>
          <p>Winner: ${winner}</p>
          <button id="restart-button">Restart</button>
        </div>
      `;
      computerHand.innerHTML = "";
      
      document.querySelector("#restart-button").addEventListener("click", () => {
        
        location.reload();
      });
    }
  }
  
  function comparingHands(playerValue, computerValue) {
    if (playerValue > computerValue) {
      computerHand.style.display = 'none';
      playerCards.push(computerCards.shift());
      playerCards.push(playerCards.shift());
      console.log("You won this round");
      computerHand.style.display = 'none';
      endGame(playerCards, computerCards);
    } else if (computerValue > playerValue) {
      computerHand.style.display = 'none';
      computerCards.push(playerCards.shift());
      computerCards.push(computerCards.shift());
      console.log("The computer won this round");
      endGame(playerCards, computerCards);
    } else {
      computerHand.style.display = 'none';
      console.log("It's a tie!");
      playerCards.push(playerCards.shift());
      computerCards.push(computerCards.shift());
      endGame(playerCards, computerCards);
    }
  }
  
  startButton.addEventListener("click", () => {
    computerHand.style.display = 'none';
    const shuffledDeck = shuffle(deck);
    for (let i = 0; i < shuffledDeck.length; i++) {
      i % 2 === 0
        ? playerCards.push(shuffledDeck[i])
        : computerCards.push(shuffledDeck[i]);
    }
    displayCards(playerCards[0], computerCards[0]);
    document.querySelector("#start-button").disabled = true;
  });
  
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.value;
      const playerValue = playerCards[index][selectedCategory];
      const computerValue = computerCards[index][selectedCategory];
      computerHand.style.display = 'inline-block';
      setTimeout(() => {
        comparingHands(playerValue, computerValue);
      }, 5000);
    });
  });
  
  