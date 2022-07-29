// const reverseString = function(inputString) {
//         let newString = '';
//     console.log(inputString.length)
//     console.log(inputString[0])
//         for (let i = inputString.length-1; i>=0; i--){
//             console.log(inputString[i])
//             newString = newString + inputString[i];
//         }
//         return newString
// };

const reverseString = function(inputString) {
    return inputString.split("").reverse().join("")
}

// Do not edit below this line
module.exports = reverseString;
