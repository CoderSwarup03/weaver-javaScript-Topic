//Marks calculat!!

// const input = '';
// function gread(input) {
//     if (input >= 100) {
//         console.log("A")
//     } else if (input >= 90 && input <= 99) {
//         console.log("B")
//     } else if (input >= 80 && input <= 89) {
//         console.log("c");
//     } else if (input >= 70 && input <= 79) {
//         console.log("D")
//     } else if (input >= 60 && input <= 69) {
//         console.log("E")
//     }
//     else if (input < 50) {
//         console.log("Fail")
//     }
//     if (input > 100 || input < 0) {
//         console.log("Enter the  inputber betweeen 0 - 100")
//     }
// }
// console.log(gread(-100));


// gread calculte app !!

const enterInput = document.querySelector('#input')
const result = document.querySelector('#textResult')
function gread(input) {
    result.innerHTML = ''  //older value remove
    if (input === 100) {
        result.innerHTML = "A"
        console.log(result);
    } else if (input >= 90 && input <= 99) {
        result.innerHTML = `Your Gread is A num is: ${input}`
    } else if (input >= 80 && input <= 89) {
        result.innerHTML = "B"
    } else if (input >= 70 && input <= 79) {
        result.innerHTML = "C"
    } else if (input >= 60 && input <= 69) {
        result.innerHTML = "D"
    } else if (input >= 50 && input <= 59) {
        result.imnnerHTML = "Fail"
    } else if (input < 50) {
        result.innerHTML = "Fail"
    }
    if (input > 100 || input < 0) {
        result.imnnerHTML = "Wrong Input Ex: 0 - 100";
    }
}

enterInput.addEventListener('input', function () {
    const value = (enterInput.value);
    console.log(value);
    gread(value);

})

// console.log(gread);