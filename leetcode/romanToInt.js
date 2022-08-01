/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let romanObj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    if(!s.length) {
        return 0;
    }
    if(s.length >=1 && s.length <= 15) {
        let eachCharArr = s.split('');
        let replaceInt = eachCharArr.map(eachElm => {
            if(romanObj.hasOwnProperty(eachElm)) {
                return romanObj[eachElm]
            }
        });

        let sum = 0;
        let previousElm = undefined;
        replaceInt.forEach(ele => {
            console.log(previousElm, ele);
            if(!previousElm) {
                previousElm = ele;
                sum = ele;
            } else if (previousElm >= ele) {
                sum += ele;
                previousElm = ele;
            } else if (previousElm < ele) {
                sum = ((sum - previousElm) + (ele - previousElm));
                previousElm = ele;
            }
        });
        return sum;
    }   
};

console.log(romanToInt('III'));
console.log(romanToInt('III'));
console.log(romanToInt('III'));