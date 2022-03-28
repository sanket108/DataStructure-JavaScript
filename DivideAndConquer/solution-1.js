/*
Divide and Conquer

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can tremendously decrease time complexity 
*/

/* 
Problem statement : Given a "sorted" array of integers, write a function called search, that accepts a values and returns the index where the value
        passed to the function is located. If the value is not found, return -1.

*/
/* Linear Search */

function search(arr, value) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return -1;
}

search([1,2,3,4,5,6],4); // 3
search([1,2,3,4,5,6],5); // 4
search([1,2,3,4,5,6],11); // -1

// insufficient solution
// time complexity: O(n)
// space complexity: 