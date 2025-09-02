// let input = document.querySelector('#input')
// let btn = document.querySelector('#btn')
// let output = document.querySelector('#output')

// input.addEventListener('click', () => {
//     console.log(input.value)
//     output.innerHTML = input.value;
//     input.innerHTML = '';
// })

// input.addEventListener("keyup", (dets) => {
//     if (dets.key === 'Enter') {
//         output.innerHTML = input.value;
//         input.innerHTML = '';
//     }
// })



let increment = document.querySelector('#inc')
let decrement = document.querySelector('#decrement')
let reset = document.querySelector('#reset')
let output = document.querySelector('#output')

let count = 0;

function plus() {
    count++;
    output.innerHTML = count;
    if (count > 0) {
        output.style.color = 'green'
    }
}

function dec() {
    count--;
    output.innerHTML = count
    if (count < 0) {
        output.style.color = 'red'
    }
}

function res() {
    count = 0
    output.innerHTML = 0;
    output.style.color = 'gray'
}

increment.addEventListener('click', plus)
decrement.addEventListener('click', dec)
reset.addEventListener('click', res)
