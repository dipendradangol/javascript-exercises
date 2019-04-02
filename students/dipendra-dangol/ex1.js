/*
Write a JavaScript function to check whether an input is an array or not.

Test Data :
console.log(isArray('w3resource')); // false
console.log(isArray([1, 2, 4, 0])); // true
*/

function isArray(input) {
    return Array.isArray(input);
    
    if(typeof input === 'object') {
        return true
    } else {
        return false
    }
}

console.log(isArray('w3resource')); // false
console.log(isArray([1, 2, 4, 0])); // true     