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
