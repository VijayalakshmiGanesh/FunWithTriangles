var angles = document.querySelectorAll(".angles")
var button = document.querySelector("#submit")
var output = document.querySelector("#message")

button.addEventListener("click", function check() {
    var angle1 = angles[0].value;
    var angle2 = angles[1].value;
    var angle3 = angles[2].value;
    //Null check
    if (!(angle1) || !(angle2) || !(angle3)) {
        alert("Enter all neccessary values")
        return
    } else if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) { //Negative values
        alert("Enter proper values")
        return
    }

    let sum = Number(angle1) + Number(angle2) + Number(angle3)
    if (sum === 180) {
        showMessage(" YAYYY.... The angles form a triangle");
    } else {
        showMessage("Better luck next time :/");
    }
});

function showMessage(msg) {
    output.innerText = msg;
}