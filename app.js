// const elScore = document.querySelector('#score')
const elNumbOne = document.querySelector('#numb_one')
const elNumbTwo = document.querySelector('#numb_two')
const elButton = document.querySelector('.btn')
const elInput = document.querySelector('#input')
const elForm = document.getElementById("form");
const elScore = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

elScore.innerText = `score: ${score}`;



// создание 2х рандомных чисел для умножения.
let random = Math.ceil(Math.random() * 10)
let random2 = Math.ceil(Math.random() * 10)

let numb1, numb2, solution
numb1 = elNumbOne.innerHTML = random
numb2 = elNumbTwo.innerHTML = random2

solution = numb1 * numb2



// 
elForm.addEventListener("submit", () => {
    const userAns = +elInput.value;
    if (userAns === solution) {
        score++;
        updateLocalStorage();
        console.log('cool!')
    } else {
        score--;
        updateLocalStorage();
        console.log('Nope.')
    }
});



function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}