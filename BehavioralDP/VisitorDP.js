/**
 * Less popular pattern in Javascript
 * Allows to add new operations and methods to an object
 * without actually changing/refactoring the object itself.
 * The new functionality is kept in a seperate object(Visitor).
 * Useful when we want to extend an object.
 */

class Employee
{
    #name
    #salary
    constructor(name, salary)
    {
        this.#name = name
        this.#salary = salary
    }
    get salary(){
        return this.#salary
    }
    set salary(amount){
        this.#salary = amount
    }
    accept(func){
        func(this)
    }
}

let e1 = new Employee('Nikhil', 10000)

let hike = function(emp){
    emp.salary = emp.salary*1.8
}

console.log(`Current salary: $${e1.salary}`)
e1.accept(hike)
console.log(`Hiked salary: $${e1.salary}`)