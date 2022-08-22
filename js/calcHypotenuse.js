var base = document.querySelector("#base");
var height = document.querySelector("#height");
var submit = document.querySelector("#submit");
var message = document.querySelector("#message");

submit.addEventListener("click", clickHandler)

function clickHandler() {

    var b = base.value;
    var h = height.value;

    //Null check
    if (!(b) || !(h)) {
        alert("Enter all neccessary values")
        return
    } else if (b <= 0 || h <= 0) { //Negative values
        alert("Enter proper values")
        return
    }

    let hypotenuse = Math.sqrt(Math.pow(b, 2) + Math.pow(h, 2))
    message.innerText = "The length of hypotenuse is " + hypotenuse
}