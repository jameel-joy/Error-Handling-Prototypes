/*4. Employee Class Challenge.

Create a class called Employee with three properties: name, position, and salary. The class should have a method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and call the getSalary method.

Expected Output:
console.log(employee1.getSalary()); // Output: 80000
*/

class Employee{
    constructor(name, pos, sal){
        this.n = name;
        this.p = pos;
        this.s = sal;
    }
    getSalary(){
        return `${this.s}`
    }
}

const emp = new Employee("jameel", "manager", 200000);

console.log(emp.getSalary());