// 3. Car Description Class.

// Create a class called Car with three properties: company, model, and year. The class should have a method called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an instance of the Car class and call the getDescription method.

// Expected Output

// console.log(myCar.getDescription());
// Output: This is a 2022 Skoda Rapid.

class Car{
    constructor(company, model, year){
        this.c = company;
        this.m = model;
        this.y = year;
    }
    getDesription(){
        return `this is a ${this.y} ${this.c} ${this.m}`
    }
}
const c = new Car("Oddi", "Rapid", 2022);

console.log(c.getDesription());