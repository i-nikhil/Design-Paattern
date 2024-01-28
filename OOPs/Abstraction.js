class Circle{
    #radius; //private fields
    #area;
    constructor(radius)
    {
        this.#radius = radius;
        this.#area = this.#calculateArea();
        console.log(`Circle created with radius ${radius} cm`);
        console.log(this);
    }
    #calculateArea() //private method
    {
        return 3.14*this.#radius*this.#radius
    }
    get area() //getter
    {
        return this.#area;
    }
    set radius(radius) //setter
    {
        this.#radius = radius;
        this.#area = this.#calculateArea();
    }
}

let s1 = new Circle(13);
console.log(`Area of circle is ${s1.area} cm²`);

s1.radius = 20;
console.log(`Area of circle is ${s1.area} cm²`);

s1.area = -1
console.log(s1.area, s1.radius);


class Employee
{
    #name;
    #age;
    #salary;
    #absentdays;
    #netSalary;

    constructor(name, age, salary, absentdays)
    {
        this.#name = name,
        this.#age = age,
        this.#salary = salary,
        this.#absentdays = absentdays,
        this.#netSalary = this.#calculateNet()
    }
    #calculateNet()
    {
        return Math.round((30-this.#absentdays)*(this.#salary/30.0));
    }
    set name(name)
    {
        this.#name = name;
    }
    get netSalary()
    {
        return this.#netSalary;
    }

    get toString()
    {
        console.log(`Employee Details:\n\nName: ${this.#name}\nAge: ${this.#age}\nNetSalary: ${this.#netSalary}`);
    }
}

let e1 = new Employee('Nikhil', 25, 100000, 2.5);
e1.name = "Nikhil Prakash";
e1.toString;
