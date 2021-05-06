const simpleColors = ['red', 'blue', 'brown', 'yellow', 'pink', 'antiquewhite', 'green'];

const button = document.querySelector('#btn');
const color = document.querySelector('#color')

button.addEventListener('click', function() {
    bgColor = simpleColors[randomNumber()];
    document.body.style.backgroundColor = bgColor;
    color.textContent = bgColor;
})

function randomNumber() {
    return Math.floor(Math.random() * simpleColors.length)
}