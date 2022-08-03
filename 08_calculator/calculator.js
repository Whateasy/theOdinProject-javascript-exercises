const add = function(inputOne, inputTwo) {
  return inputOne + inputTwo
};

const subtract = function(inputOne, inputTwo) {
	return inputOne - inputTwo
};

const sum = function(inputArray) {
	return inputArray.reduce((a, b ) => a + b, 0)
};

const multiply = function(inputArray) {
  // return inputArray.reduce((a, b ) => a * b)

  //conditional ternary operator
  return inputArray.length
      ? inputArray.reduce((accumulator, nextItem) => accumulator * nextItem)
      : 0;
};

const power = function(inputNumber, power) {
  let result = inputNumber
  for(let i = 1; i < power ; i++){
    result = result * inputNumber
    }
  return result
};

const factorial = function(inputNumber) {
  if (inputNumber ===0) return 1;
  let newArray = []
    do  {
      newArray.push(inputNumber)
      inputNumber = inputNumber - 1
    } while (inputNumber > 0);

    return multiply(newArray)
};

console.log('factorial', factorial(10))

const recurseFactorial = function(inputNumber) {
  if (inputNumber ===0) {
    return 1
  } else {
    return (inputNumber * recurseFactorial(inputNumber-1))
  }
}

console.log('recursive', recurseFactorial(10))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
