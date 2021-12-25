const CARDS = document.getElementsByClassName("card");
const FrontImages = document.getElementsByClassName("front-img");
const cardsContainer = document.getElementById("cards-container");
let shuffledArray = [];
let counter = 0;


const IMAGES = [
    {
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
        team: "Barcelona"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
        team: "Barcelona"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/640px-Real_Madrid_CF.svg.png",
        team: "Real Madrid"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/640px-Real_Madrid_CF.svg.png",
        team: "Real Madrid"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
        team: "Bayern Munich"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
        team: "Bayern Munich"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png",
        team: "Chelsea"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png",
        team: "Chelsea"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png",
        team: "Manchester United"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png",
        team: "Manchester United"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/490px-Logo_of_AC_Milan.svg.png",
        team: "Milan"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/490px-Logo_of_AC_Milan.svg.png",
        team: "Milan"
    }
];



function displayCards() {
    shuffledArray = IMAGES.sort((a, b) => 0.5 - Math.random());

    for (let i = 0; i < shuffledArray.length; i++) {
        cardsContainer.innerHTML +=
            `<article class="card" data-team=${shuffledArray[i].team}>
                <img class="front-img" src='${shuffledArray[i].img}' alt="">
                <img class="back-img" src="https://projects.fivethirtyeight.com/soccer-predictions/images/champions-league-logo.png?v=13de7574" alt="">
            </article>`
    }
}
displayCards();



let hasFlipped = false;
let lockCard = false;
let firstCard;
let secondCard;


for (const card of CARDS) {
    card.addEventListener("click", flipped)
}


function flipped() {
    if (lockCard) return;
    if (this == firstCard) return;

    this.classList.toggle("flip");

    if (!hasFlipped) {
        hasFlipped = true;
        firstCard = this;
        return;
    }
    else {
        hasFlipped = false;
        secondCard = this;
        checkForMatch();
    }
}




function checkForMatch() {
    let isMatch = firstCard.dataset.team == secondCard.dataset.team;
    isMatch ? disableCards() : unFlipCard();    
}
function disableCards() {
    firstCard.removeEventListener("click", flipped);
    secondCard.removeEventListener("click", flipped);
    counter++;
    checkCounter();
}
function unFlipCard() {
    lockCard = true;
    setTimeout(() => {
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        lockCard = false;
    }, 1000);
}

function checkCounter() {
    if (counter == IMAGES.length / 2) {
        setTimeout(() => {
            alert("you win");
            location.reload();
        }, 1000);
    }
}