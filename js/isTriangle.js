var angles = document.querySelectorAll(".angles")
var button = document.querySelector("#submit")
var output = document.querySelector("#message")

button.addEventListener("click", function check() {
    let sum = Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value)
    if (sum === 180) {
        showMessage(" YAYYY.... The angles form a triangle");
    } else {
        showMessage("Better luck next time :/");
    }
});

function showMessage(msg) {
    output.innerText = msg;
}