/*
This pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(n^2) operations with arrays / strings

PROBLEM STATEMENT : Write a function called Same, which accepts to arrays and the function should return.
True, if every value in the array has its corresponding value squared in the second array.
So in the first array there's a bunch of values and we want to know if the second array has the exact
same values but squared. But the order doesn't matter, so it doesn't have to be identical, just squared.
It could be mixed up, but the frequency of of values must be the same.
*/

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) { // n-times iteration
        let currentIndex = arr2.indexOf(arr1[i] ** 2); // n-times iteration
        if (currentIndex === -1) {
            return false;
        }
        arr2.splice(currentIndex, 1);
    }
    return true;
}

let arr1 = [1, 2, 3];
let arr2 = [9, 1, 1];

console.log(same(arr1, arr2));