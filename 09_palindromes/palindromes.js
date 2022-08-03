const palindromes = function (inputString) {
    const strippedInputString = inputString.replace(/\W|_/g, '').toLowerCase()
    const reversed = strippedInputString
        .split('')
        .reverse()
        .join('')
    return strippedInputString===reversed
};

console.log(palindromes('A car, a man, a maraca'))

// Do not edit below this line
module.exports = palindromes;

