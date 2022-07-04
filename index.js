/* eslint-disable no-magic-numbers */
// #1
function calculateSum(arr) {
    let sum = 0;
    arr.forEach(function(item){
        sum += item;
    })
    return sum;
}

console.log(calculateSum([1,2,3,4,5])); //15

// #2
function isTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return false;
    }
    if (a+b > c && a+c > b && c+b > a) {
        return true;
    } else {
        return false;
    }    
}

console.log(isTriangle(5,6,7)); //true
console.log(isTriangle(2,9,3)); //false

// #3
function isIsogram(word) {
    let a, b;
    word = word.toLowerCase();
        for(a = 0; a < word.length; a++) {
            for(b = a + 1; b < word.length; b++) {
                if(word[a] === word[b]) {
                return false;
                }
            }
        }
    return true;
}

console.log(isIsogram('Dermatoglyphics')); //true
console.log(isIsogram('abab')); //false

// #4
function isPalindrome(word) {
    let regexp = /[^A-Za-z0-9]/g;
    let lowRegWord = word.toLowerCase().replace(regexp, '');
    let reverseWord = lowRegWord.split('').reverse().join(''); 
    return reverseWord === lowRegWord;
}

console.log(isPalindrome('Dermatoglyphics')); //false
console.log(isPalindrome('abbabba')); //true

// #5
function showFormattedDate(dateObj) {
    let day = dateObj.getDate();
    let month = dateObj.toLocaleString('en-US', {month: 'long'});
    let year = dateObj.getFullYear();
    if (day < 10) {
        day = '0' + day;
    } 
    if (month < 10) {
        month = '0' + month;
    } 
    dateObj = day + ' of ' + month + ', ' + year;
    return dateObj;
}

console.log(showFormattedDate(new Date('05/12/22'))); //'12 of May, 2022'

// #6
const letterCount = (str, letter) => {
    let count = 0;
    for (let position = 0; position < str.length; position++) {
        if (str.charAt(position) === letter) {
            count += 1;
        }
    }
    return count;
}

console.log(letterCount('abbaba', 'b')); //3

// #7
function countRepetitions(arr) {
    let counts = {};    
    arr.forEach(function (x) { 
        counts[x] = (counts[x] || 0) + 1; 
    });
    return counts;
}

console.log(countRepetitions(['banana', 'apple', 'banana'])); // { banana: 2, apple: 1 }

// #8
function calculateNumber(arr) {
    let num = parseInt((arr + '').replace(/[^01]/gi, ''), 2);
    return num;
}

console.log(calculateNumber([0, 1, 0, 1])); //5
console.log(calculateNumber([1, 0, 0, 1])); //9
