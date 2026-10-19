
const button = document.getElementById("myButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Bhai, JavaScript successfully kaam kar raha hai! 🚀";
    button.textContent = "You clicked me!";
});
