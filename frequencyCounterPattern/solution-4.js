let arr1 = ['sanket', 'panda'];
let arr2 = ['SanTek', 'Andpe'];

function anagram(arr1, arr2) {

    let frequencyArr1 = {};
    let frequencyArr2 = {};
    if(arr1.length !== arr2.length) {
        return false;
    }

    for (let val of arr1) {
        val = val.toLowerCase().split('').sort().join('');
        frequencyArr1[val] = (frequencyArr1[val] || 0) + 1;
    }
    for (let val of arr2) {
        val = val.toLowerCase().split('').sort().join('');
        frequencyArr2[val] = (frequencyArr2[val] || 0) + 1;
    }
    console.log('frequency -->', frequencyArr1);
    console.log('frequency -->', frequencyArr2);
    for (let key in frequencyArr1) {
        if(!(key in frequencyArr2)) {
            return false;
        }
        if(frequencyArr2[key] !== frequencyArr1[key]){
            return false;
        }
    }
    return true;
}

console.log(anagram(arr1, arr2));