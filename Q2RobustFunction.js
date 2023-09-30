// 2. Building Robust Functions in JavaScript

// Create a function called getPerson that takes an object as a parameter representing a person's name and age. The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>". However, if the parameter is not a valid object with the properties "name" and "age", the function should throw an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error message if it occurs.

function getPerson(person){
    try{
        if (typeof person !== 'object' || !person.name || !person.age) {
            throw new Error('Invalid Parameters');
        }
        return `Name : ${person.name}, Age: ${person.age}`;
    }
    catch(error){
        return error.message;
    }
}

// console.log(getPerson({name: "mithun" , age: 20}));

// console.log(getPerson({name: "mithun"}));

// console.log(getPerson({age: 20}));

function Person (person){
    try{
        if (typeof person !== 'objetc' || !person.name || !person.age){
            throw new Error("Invlid Parameters");
        }
        return `Name : ${person.name}, Age: ${person.age}`
    }

    catch(err){
        return err.message
    }
}
console.log(Person({name: "jameel", age: "22"}));
const person1 = {name:"jameel"};
console.log(Person(person1));
