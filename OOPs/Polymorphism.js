// Function overriding - Runtime polymorphism
class Shape{
    display(){
        console.log(`This is a generic shape`)
    }
}

class Circle extends Shape
{
    display(){
        console.log(`This is a Circle`);
    } 
}

class Square extends Shape
{
    display(){
        console.log(`This is a square`);
    }
}

new Shape().display();
new Square().display();
new Circle().display();

// Funtion overloading - Compiletime polymorphism
/*
JavaScript doesn't support function overloading directly,
so the last defined function with a given name takes precedence.
*/
class Poly{
    getSum(a, b)
    {
        console.log(a+b);
    }
    getSum(a, b, c)
    {
        console.log(a+b+c);
    }
    getSum(a, b, c, d) //overwrites the above two functions
    {
        console.log(a+b+c+d);
    }
}

let p = new Poly();
p.getSum(1, 2); //NaN
p.getSum(1, 2, 3); //NaN
p.getSum(1, 2, 3, 4); //10