// const findTheOldest = function(people) {
//     const deriveAge = (a, b) => b - a;
//     let maxAge = 0;
//     let maxIndex = '';
//     people.filter(person => {
//         const now = new Date();
//         const maxYear = person.yearOfDeath ? person.yearOfDeath : now.getFullYear()
//         const age = [person.yearOfBirth, maxYear].reduce(deriveAge)
//         if (age > maxAge){
//             maxAge = age;
//             maxIndex = (people.indexOf(person))
//         }
//     })
//     return (people[maxIndex])
// };

// const findTheOldest = function(people) {
//     const deriveAge = (a, b) => b - a;
//     const ages = people.map(person => {
//         const now = new Date();
//         const maxYear = person.yearOfDeath ? person.yearOfDeath : now.getFullYear()
//         return [person.yearOfBirth, maxYear].reduce(deriveAge)
//     })
//
//     const maxAge = ages.reduce((a, b) => Math.max(a, b))
//     return people[ages.indexOf(maxAge)]
// };

const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath)
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
        return oldestAge > currentAge ? oldestPerson : currentPerson
    })
};

function getAge(birth, death){
    const now = new Date();
    const maxYear = death ? death : now.getFullYear()
    return maxYear - birth
}

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
