var base = document.querySelector("#base");
var height = document.querySelector("#height");
var submit = document.querySelector("#submit");
var message = document.querySelector("#message");

submit.addEventListener("click", clickHandler)

function clickHandler() {
    let hypotenuse = Math.sqrt(Math.pow(base.value, 2) + Math.pow(height.value, 2))
    message.innerText = "The length of hypotenuse is " + hypotenuse
}