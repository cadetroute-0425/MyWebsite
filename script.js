
const button = document.getElementById("myButton");
const message = document.getElementById("message");

const clickSound = new Audio("click-sound.mp3");

button.addEventListener("click", function () {
    clickSound.currentTime = 0;

    clickSound.play().catch(error => {
        console.log("Sound play nahi ho paya:", error);
    });

    message.textContent =
        "mistri maanjaaoo , kaanun se upr ho tum 🚀";

    button.textContent = "You clicked me!";
});
