// const repeatString = function(string, iteration) {
//     if(string==='') return '';
//     if(iteration===0) {
//         return ''
//     } else if (iteration<0) {
//         return 'ERROR'
//     } else {
//         let outputString = string;
//         for(let i=1; i<iteration; i++) {
//             outputString = outputString + string;
//         }
//         return outputString
//     }
// };

const repeatString = function(string, iteration) {
    if (iteration<0) {
        return 'ERROR'
    } else {
    return string.repeat(iteration)
    }
}

// Do not edit below this line
module.exports = repeatString;
