let lvl = document.querySelector(".lvl");
let seconds = document.querySelector(".seconds");
let startBtn = document.querySelector(".start");
let theWord = document.querySelector(".the-word");
let input = document.querySelector(".input");
let upcomingWords = document.querySelector(".upcoming-words");
let time = document.querySelector(".time span");
let got = document.querySelector(".got");
let total = document.querySelector(".total");
let finish = document.querySelector(".finish");
let btn = document.querySelector(".ref");
let select = document.getElementById("select");

const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing",
];

const lvls = {
    Easy: 5,
    Normal: 3,
    Hard: 2,
};
let defaultLvl = "Easy";
let defaultSecond = lvls[defaultLvl];
lvl.innerHTML = defaultLvl;
seconds.innerHTML = defaultSecond;
total.innerHTML = words.length;
time.innerHTML = seconds.innerHTML;

input.onpaste = function () {
    return false;
};

btn.onclick = function () {
    location.reload();
};

startBtn.onclick = function () {
    if (input.value == "") {
        this.remove();
        input.focus();
        upcomingWords.innerHTML = "";
        showWordsInArea();
    }
};

function showWordsInArea() {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    let randomWordIndex = words.indexOf(randomWord);
    theWord.innerHTML = randomWord;
    words.splice(randomWordIndex, 1);
    words.forEach((e) => {
        let div = document.createElement("div");
        let divContent = document.createTextNode(e);
        div.appendChild(divContent);
        upcomingWords.appendChild(div);
    });
    challengeTime();
}

function challengeTime() {
    time.innerHTML = defaultSecond;
    let count = setInterval(() => {
        time.innerHTML--;
        if (time.textContent === "0") {
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.value = "";
                upcomingWords.innerHTML = "";
                got.innerHTML++;
                if (words.length > 0) {
                    showWordsInArea();
                } else {
                    let span = document.createElement("span");
                    let spanContent = document.createTextNode("you win");
                    span.appendChild(spanContent);
                    span.classList.add("good");
                    finish.appendChild(span);
                }
            } else {
                let span = document.createElement("span");
                let spanContent = document.createTextNode("Game over");
                span.appendChild(spanContent);
                span.classList.add("bad");
                finish.appendChild(span);
            }
            clearInterval(count);
        }
    }, 1000);
}
