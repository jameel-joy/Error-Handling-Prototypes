/*

6. Using Static Method to Add Two Numbers with Calculator Class

Create a class called Calculator with a static method called add. The add method should take two numbers as arguments and return their sum. Instantiate the Calculator class and call the add method.

Expected Output:

console.log(result); // Output: 15

*/

class Calculator{
    static add(a,b){
        return a + b
    }
}
const c = new Calculator.add(10,5);

console.log(Calculator.add(10,5));