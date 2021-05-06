let count = 0;

const buttons = document.querySelectorAll('button');
const value = document.getElementById('value');

//forEach loop
buttons.forEach(function(button) {

    button.addEventListener('click', function(e) {
        //Get the target
        let onClick = e.target.className;
        if (onClick === 'btn-decrease') {
            count--;
        } else if (onClick === 'btn-increase') {
            count++;
        } else if (onClick === 'btn-reset') {
            count = 0;
        }

        // Change text color
        if (count < 0) {
            value.style.color = 'red';
        } else if (count > 0) {
            value.style.color = 'green';
        } else {
            value.style.color = 'black';
        }

        value.textContent = count;

    })
})

// My Solution

/*
const value = document.getElementById('value');
const buttonDecrease = document.querySelector('.btn-decrease');
const buttonReset = document.querySelector('.btn-reset');
const buttonIncrease = document.querySelector('.btn-increase');

buttonDecrease.addEventListener('click', function() {
    count--;
    countValue();
    console.log(value.style.color);
})

buttonReset.addEventListener('click', function(){
    count = 0;
    countValue();
}) 

buttonIncrease.addEventListener('click', function() {
    count++;
    countValue();
})

function countValue() {
    value.textContent = count;
    if (count < 0) {
        value.style.color = 'red';
    } else if (count > 0) {
        value.style.color = 'green';
    } else {
        value.style.color = 'black';
    }
}
*/

