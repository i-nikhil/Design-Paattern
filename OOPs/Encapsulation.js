class Employee {
    constructor(baseSalary, overtime, rate)
    {
        this.baseSalary = baseSalary;
        this.overtime = overtime;
        this.rate = rate;
    }
    getWage()
    {
        return this.baseSalary + (this.overtime * this.rate);
    }
};

let e1 = new Employee(100, 10, 20);
console.log(`Employee 1 wage = ${e1.getWage()}`);

let e2 = new Employee(85, 10, 15.35);
console.log(`Employee 1 wage = ${e2.getWage()}`);

//The best functions are those with no parameters - Robert C Martin

class Circle{
    constructor(radius)
    {
        this.radius = radius;
        this.area = 3.14*this.radius*this.radius;
        console.log(`Circle created with radius ${radius} cm`);
        console.log(this);
    }
    getArea = function()
    {
        console.log(`Area of circle is ${this.area} cm²`);
    }
}

let s1 = new Circle(1);
s1.getArea();
//properties can we added or deleted later
s1.location = {x:234314, y:-2343214}
delete s1.location.x;

let s2 = new Circle(2.4);
s2.getArea();
if('radius' in s2) console.log('s2 has radius')
for(let key in s2)
{
    //Printing only properties
    if(typeof(s2[key])!=='function') console.log(key, s2[key]);
}