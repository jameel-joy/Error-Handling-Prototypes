/*

9. Check the presence using closures.

Create a numberChecker function that takes an array of numbers as an argument and returns a function. The returned function should take another number as an argument and return true if the number is in the array, and false otherwise.


*/
function numberChecker(number){
    return function(num){
        return number.includes(num);
    }
}
const arr = [1,2,3,4]
const checknumber = numberChecker(arr)

console.log(checknumber(3));
console.log(checknumber(6));