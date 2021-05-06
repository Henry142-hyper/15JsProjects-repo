const simpleColors = ['red', 'blue', 'brown', 'yellow', 'pink', 'antiquewhite', 'green'];

// Select
const button = document.querySelector('#btn');
const color = document.querySelector('#color')

// Access
button.addEventListener('click', function() {
    bgColor = simpleColors[randomNumber()];
    document.body.style.backgroundColor = bgColor;
    color.textContent = bgColor;
})

// Generate Random numbers
function randomNumber() {
    return Math.floor(Math.random() * simpleColors.length)
}