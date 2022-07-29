const removeFromArray = function(targetsArray, ...removesArray) {
        return targetsArray.filter(target => !removesArray.includes(target))
};

// Do not edit below this line
module.exports = removeFromArray;
