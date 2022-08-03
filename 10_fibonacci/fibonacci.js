const fibonacci = function(pos) {
    if (pos < 0) return "OOPS";
    if (pos === 0) return 0;
    let posInt = pos;
    if (typeof pos === 'string'){
        posInt = parseInt(pos);
    }
    const sequence = [];
    for(let i=0; posInt >= i; i++){
        if(sequence.length === 0 || sequence.length === 1) {
            sequence.push(1)
        } else {
            const insertNum = sequence[i-1] + sequence[i-2]
            sequence.push(insertNum)
        }
    }
    return sequence[posInt-1]
};

console.log(fibonacci('24'));

// Do not edit below this line
module.exports = fibonacci;
