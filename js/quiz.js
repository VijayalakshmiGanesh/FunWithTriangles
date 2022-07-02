var form = document.querySelector(".quiz-questions");
var submit = document.querySelector("#submit");
var output = document.querySelector("#score");

submit.addEventListener("click", clickHandler)

const answers = ["90°", "right-angled", "one right angle", "Equilateral triangle", "100°", "30°", "a + b + c", "no", "45°"];

function clickHandler() {
    let index = 0;
    let score = 0;
    var results = new FormData(form);
    for (let selectedAnswer of results.values()) {
        if (selectedAnswer === answers[index]) {
            score++;
        }
        index++;
    }

    output.innerText = "Your score is " + score
}