var base = document.querySelector("#base");
var height = document.querySelector("#height");
var submit = document.querySelector("#submit");
var message = document.querySelector("#message");

submit.addEventListener("click", clickHandler)

function clickHandler() {
    let area = (base.value * height.value) / 2
    message.innerText = "The area of triangle is " + area;
}