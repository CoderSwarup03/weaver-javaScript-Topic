// window.alert("Hellow World");

// one input box when im create some thing showing in the below!!
const input = document.querySelector('#getInput');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');




btn.addEventListener('click', () => {
    output.innerHTML = input.value
    alert('Clicked Here')
})

// how to write the program the when enter the submit the data

input.addEventListener('keyup', (dets) => {
    if (dets.key === 'Enter') {
        output.innerHTML = input.value;
    }
})



