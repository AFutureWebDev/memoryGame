document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'blueRedFloral',
            img: 'images/blueRedFloral.png'
        },
        {
            name: 'blueRedFloral',
            img: 'images/blueRedFloral.png'
        },
        {
            name: 'cactus',
            img: 'images/cactus.jpg'
        },
        {
            name: 'cactus',
            img: 'images/cactus.jpg'
        },
        {
            name: 'colorfulFloral',
            img: 'images/colorfulFloral.jpg'
        },
        {
            name: 'colorfulFloral',
            img: 'images/colorfulFloral.jpg'
        },
        {
            name: 'flowersAndLeaves',
            img: 'images/flowersAndLeaves.jpg'
        },
        {
            name: 'flowersAndLeaves',
            img: 'images/flowersAndLeaves.jpg'
        },
        {
            name: 'greenFloral',
            img: 'images/greenFloral.png'
        },
        {
            name: 'greenFloral',
            img: 'images/greenFloral.png'
        },
        {
            name: 'pinkBlueFlowers',
            img: 'images/pinkBlueFlowers.jpg'
        },
        {
            name: 'pinkBlueFlowers',
            img: 'images/pinkBlueFlowers.jpg'
        },
        {
            name: 'purpleFlowers',
            img: 'images/purpleFlowers.jpg'
        },
        {
            name: 'purpleFlowers',
            img: 'images/purpleFlowers.jpg'
        },
        {
            name: 'tropicalFeathers',
            img: 'images/tropicalFeathers.jpg'
        },
        {
            name: 'tropicalFeathers',
            img: 'images/tropicalFeathers.jpg'
        }
    ]

cardArray.sort(() => 0.5 - Math.random());

// Creating the game board
const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function createBoard() {
    for(let i =0; i < cardArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.style.animation = 'rollIn 1s'
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}

createBoard();

// Check for matches
function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    // Correct Match
    if(cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].style.animation = 'tada .75s';
        cards[optionTwoId].style.animation = 'tada .75s';
        // cards[optionOneId].setAttribute('src','images/black.png');
        // cards[optionTwoId].setAttribute('src', 'images/black.png');
        cardsWon.push(cardsChosen);

    // Incorrect Match
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        cards[optionOneId].style.animation = 'headShake .75s';
        cards[optionTwoId].style.animation = 'headShake .75s';
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = ' Congratulations! You found them all!'
    }
}



// Flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

});