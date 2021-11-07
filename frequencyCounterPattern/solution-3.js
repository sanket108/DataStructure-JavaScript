/*
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

Edge case : (Ask this question in interview)
1) All are lowercase letter (don't warry about capital letter)
2) No space, periods, punctuation, numbers  allowed
*/

function validAnagramMySolution(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let eachChar of str1) {
        frequencyCounter1[eachChar] = (frequencyCounter1[eachChar] || 0) + 1;
    }
    for (let eachChar of str2) {
        frequencyCounter2[eachChar] = (frequencyCounter2[eachChar] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

function validAnagramOtherSolution(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

console.log(validAnagramMySolution('ketsAn', 'sanket'));
console.log(validAnagramOtherSolution('sanket','ketsan'));