//Marks calculat!!

const num = '';
function gread(num) {
    if (num >= 100) {
        console.log("A")
    } else if (num >= 90 && num <= 99) {
        console.log("B")
    } else if (num >= 80 && num <= 89) {
        console.log("c");
    } else if (num >= 70 && num <= 79) {
        console.log("D")
    } else if (num >= 60 && num <= 69) {
        console.log("E")
    }
    else if (num < 50) {
        console.log("Fail")
    }
    if (num > 100 || num < 0) {
        console.log("Enter the  number betweeen 0 - 100")
    }
}
console.log(gread(-100));
