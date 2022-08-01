/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function minimalHeaviestSetA(arr) {
    // Write your code here
    let minimalSetA = [];
    let sumSetA = 0;
    if (arr.length == 1) {
        return arr;
    } else if (arr.length == 2) {
        if (arr[0] > arr[1]) {
            return [arr[0]];
        } else {
            return [arr[1]];
        }
    } else {
        arr.sort((a,b) => a - b);
        for (let i = arr.length - 1; i >= 0; i--) {
            minimalSetA.push(arr[i]);
            sumSetA += arr[i];
            let sumSetB = 0;
            for (let j = i - 1; j >= 0; j--) {
                sumSetB += arr[j]
            }
            if (sumSetA > sumSetB) {
                return minimalSetA;
            }
        }
    }

};

let nums = [15];
console.log(minimalHeaviestSetA(nums));