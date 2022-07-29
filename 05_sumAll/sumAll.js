const sumAll = function(inputOne, inputTwo) {
    if(typeof inputOne !== 'number' || typeof inputTwo !== 'number' ) return 'ERROR';
    if( inputOne < 0 || inputTwo < 0 ) return 'ERROR';
    let largerNumber;
    if(inputOne > inputTwo){
        largerNumber = inputOne;
    } else {
        largerNumber = inputTwo;
    }
    return (inputOne + inputTwo) * largerNumber / 2
};

// Do not edit below this line
module.exports = sumAll;
