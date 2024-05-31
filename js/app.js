async function getContent() {
    try {
        const response = await fetch('data/content.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        data.sections.forEach(element => {
            const content = document.querySelector('.content');
            content.innerHTML += `
            <div id="contentContainer">
                <div id="imgContainer">
                    <img src="${element.imagePath}" alt="${element.altText}">
                </div>
                <div id="contentText">
                    <h1>${element.title}</h1>
                    <p>${element.description}</p>
                    <a href="#">${element.linkText}</a>
                </div>
            </div>
            `
        });

    } catch (error) {
        console.error('Error fetching the content:', error);
      }
}

getContent();

// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
  }
  console.log(higherOrder(2)(3)(10))

  const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.score > 80)
  console.log(scoresGreaterEighty)

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: 10 },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: 11 },
]

countries.forEach(country => console.log(country));
names.forEach(name => console.log(name));
const countryToUpperCase = countries.map(country => country.toUpperCase());
const countriesLength = countries.map(country => country.length)

console.log(countryToUpperCase);
console.log(countriesLength);

const squared = numbers.map(num => num ** 2);
console.log(squared);

const namesToUpperCase = names.map(name => name.toUpperCase());
console.log(namesToUpperCase);
console.log(names)

products.map(product => console.log(product.price))

const land = countries.filter(country => {
    let lowerCase = country.toLowerCase();
    return !lowerCase.includes('land');
});

console.log(land);

const prices = products.filter(product => product.price)

function decipherMessage(encryptedMessage, cipherKey) {
    const arr = encryptedMessage.split('');

    for (let i = 0; i < cipherKey.length; i++) {
            arr.forEach(char => char[cipherKey[i]])
    }

    console.log(arr.join(''));
}

decipherMessage('world', [3, 2, 4, 0, 1]);


const showOptions = () => {
  const options = ['Rock', 'Paper', 'Scissors'];
  const display = document.querySelector('.display');
  display.innerHTML = '';  
  options.forEach(option => {
      display.innerHTML += `
        <p>${option}...</p>
      `
  });
};

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const getComputerChoice = () => {
  const options = ['Rock', 'Paper', 'Scissors'];
  const randomChoice = Math.floor(Math.random() * options.length);

  return options[randomChoice];
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie";
  }

  if (
    (userChoice === 'Rock' && computerChoice === 'Scissors') || (userChoice === 'Paper' && computerChoice
      === 'Rock') || (userChoice === 'Scissors' && computerChoice === 'Paper')) {
        return 'You win!!'
  }

  return "You lose"
}

const playGame = (userChoice) => {
  const display = document.querySelector('.display');
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  display.innerHTML = `
    <p>You selected: ${userChoice}</p>
    <p>Computer selected: ${computerChoice} </p>
    <p>${result}</p>
  `
}

const rockClick = () => playGame('Rock');
const paperClick = () => playGame('Paper');
const scissorsClick = () => playGame('Scissors');

rockBtn.addEventListener('click', rockClick);
paperBtn.addEventListener('click', paperClick);
scissorsBtn.addEventListener('click', scissorsClick);


console.log(getComputerChoice());


function countTiffanyBracelets(num) {
  let count = 0;
  let binary = num.toString(2);

  for (let digit of binary) {
      if (digit === '1') {
          count += 1;
      }
  }

  console.log(count);
}


countTiffanyBracelets(3);







