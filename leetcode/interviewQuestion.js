const fs = require('fs');
// const readFuntion = new Promise((resolve, reject) => {
//     fs.readFile(__dirname+'/text.txt', 'utf-8', (err, data) => {
//         if (err) {
//             reject(err);
//         }
//         resolve(data);
//     })
// });

// readFuntion
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

// try {
//     const data = fs.readFileSync(__dirname+'/text.txt', 'utf-8');
//     console.log(data);
// } catch(err) {
//     console.log(err);
// }

// Promise.resolve(1)
//   .then((x) => x + 1)
//   .then((x) => { throw new Error('My Error') })
//   .catch(() => 1)
//   .then((x) => x + 1)
//   .then((x) => console.log(x))
//   .catch(console.error)

// let input = 'microSoftTeams';
// let output = '';
// for(let i=0; i < input.length; i++) {
//     let character = input.charAt(i);
//      if(character == character.toUpperCase()) {
//         let charLower = character.toLowerCase();
//         output += `_${charLower}`
//      } else output += character;
// }

// console.log(output);

let input = 'node technology';
let charCount = {};

for(const char of input) {
    charCount[char] = (charCount[char] || 0) + 1;
}
console.log(charCount);
// for(let key in charCount) {
//     if(charCount[key] > 1) {
//         console.log(key);
//     }
// }

const orderedObj = Object.keys(charCount).sort().reduce((obj, key) => {
    obj[key] = charCount[key];
    return obj;
}, {});

console.log(orderedObj);