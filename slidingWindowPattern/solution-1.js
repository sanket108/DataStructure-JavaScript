/*
Sliding Window Pattern

This pattern involves creating a window which can either be an array or number from one position to another.

Depending on a certain condition, the window either increases or closes(and a new window created)

Very useful for keeping track of a subset of data in an array / string, etc.
*/

/* 
Problem statement : Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function shiuld calculate the maximum sum of n consecutive elements in the array.

*/

function maxSubarraySum(arr, num) {
    if ( num > arr.length ) {
        console.log(null);
        return null;
    }
    let max = -Infinity;
    for (let i=0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j=0; j < num; j++) {
            temp += arr[i+j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    console.log(max);
    return max;
}

maxSubarraySum([1,2,5,2,8,1,5],2); // 10
maxSubarraySum([1,2,5,2,8,1,5],4); // 17
maxSubarraySum([4,2,1,6],1); // 6
maxSubarraySum([4,2,1,6,2],4); // 13
maxSubarraySum([],4); // null

// insufficient solution
// time complexity: O(n^2)
// space complexity: 