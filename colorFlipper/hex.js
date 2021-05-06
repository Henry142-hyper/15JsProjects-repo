const hexColors = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const button = document.querySelector('#btn');
const color = document.querySelector('#color');

button.addEventListener('click', function() {
    bgColor = "#"

    for (var i = 0; i < 6; i++) {
        bgColor += hexColors[randomNumber()];
    }
    document.body.style.backgroundColor = bgColor;
    color.textContent = bgColor;
})

function randomNumber() {
    return Math.floor(Math.random() * hexColors.length)
}