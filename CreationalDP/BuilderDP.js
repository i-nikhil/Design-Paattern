/**
 * Used to construct complex objects step by step. Creating new
 * instance with some base properties and then add more properties
 * to the object as needed.
 */

class Person{
    #name
    #weight
    #height
    #gender
    constructor(name, weight, height, gender)
    {
        this.#name = name
        this.#weight= weight
        this.#height = height
        this.#gender = gender
    }
}

class PersonBuilder{
    #name
    #weight
    #height
    #gender
    constructor(name, gender)
    {
        this.#name = name
        this.#gender = gender
    }
    setWeight(weight)
    {
        this.#weight = weight
        return this
    }
    setHeight(height)
    {
        this.#height = height
        return this
    }
    build()
    {
        return new Person(this.#name, this.#weight, this.#height, this.#gender)
    }
}

let person1 = new PersonBuilder('Nikhil', 'male').setWeight(70).setHeight(5.8).build()
console.log(person1);

let person2 = new PersonBuilder('Ritesh', 'male')
console.log(person2)

person2.setWeight(69).setHeight(5.9)
console.log(person2)

person2 = person2.build()
console.log(person2)