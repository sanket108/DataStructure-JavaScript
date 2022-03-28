/*

Problem: count unique values

Implement a function called countUniqueValues which accepts a sorted array, and counts the
unique values in the array. There can be negative numbers in the array, but it will always be sorted.

moving 2 pointers in same direction
*/

// My Solution
// function countUniqueValues(sortArr) {

//     let i = 0;
//     let j = 1;
//     if(sortArr.length === 0) {
//         console.log(0);
//         return;
//     }
//     while(j !== sortArr.length) {
//         if(sortArr[i] === sortArr[j]) {
//             j++;
//         } else {
//             i++;
//             sortArr[i] = sortArr[j];
//         }
//     }
//     console.log(i+1);

// }

function countUniqueValues(sortArr) {
    if(sortArr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < sortArr.length; j++) {
        if( sortArr[i] !== sortArr[j]) {
            i++;
            sortArr[i] = sortArr[j];
        }
    }
    return i + 1;
}

// time complexity: O(n)
// space complexity: O(n)

countUniqueValues([1,1,1,1,1,2]); // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2,-1,-1,0,1]); // 4