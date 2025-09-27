// Jacob Phillips, 9.27.2025
// Adapted from https://javascript30.com
/* 
    What was new:
    Array methods: some(), every(), find(), findIndex(), slice(), splice()
    Spread method ...
    Property literals: essentially variables but with curly braces, different from template literals that use `${}` syntax

    Improvements:
    Added a new name to the "people" array
    Used the sort() method to sort the people born from oldest to youngest
*/

// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
    { name: 'Lucida', year: 1996}
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// const isAdult = people.some(function(person) {
//     const currentYear = (new Date()).getFullYear();
//     if(currentYear - person.year >= 19) {
//         return true;
//     }
// });

const isAdult = people.some(person => ((new Date()).
    getFullYear()) - person.year >= 19);

console.log({isAdult});
// Array.prototype.every() // is everyone 19 or older?

const allAdults = people.every(person => ((new Date()).
    getFullYear()) - person.year >= 19);
    console.log({allAdults});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
// const comment = comments.find(function(comment) {
//     if(comment.id === '823423') {
//         return true;
//     }
// });
const comment = comments.find(comment => 
    comment.id === 823423
);

console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

// comments.splice(index, 1);

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];

// Sort the new names from oldest to youngest

const ordered = people.sort((a, b) => a.year > b.year ? 1 : -1);
console.log(ordered);