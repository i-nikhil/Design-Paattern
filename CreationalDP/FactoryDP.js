/**
 * Manufactures different object at a centralized location
 * rather than creating it on the fly
 */

class Employee
{
    #name
    #type
    constructor(name, type)
    {
        this.#name = name
        this.#type = type
    }
    get display()
    {
        console.log(`${this.#name} is a ${this.#type}`)
    }
}

class Developer extends Employee
{
    constructor(name)
    {
        super(name, 'Developer')
    }
}

class Tester extends Employee
{
    constructor(name)
    {
        super(name, 'Tester')
    }
}

class Manager extends Employee
{
    constructor(name)
    {
        super(name, 'Manager')
    }
}

class EmployeeFactory
{
    createEmployee(name, type)
    {
        switch(type)
        {
            case 'Developer': return new Developer(name)
            case 'Tester': return new Tester(name)
            case 'Manager': return new Manager(name)
            default: throw new Error('Invalid Employee Type')
        }
    }
}

const factory = new EmployeeFactory();
factory.createEmployee('Nikhil', 'Developer').display;
factory.createEmployee('Praveen', 'Tester').display;
factory.createEmployee('Prince', 'Manager').display;
factory.createEmployee('Someone', 'Invalid').display;
