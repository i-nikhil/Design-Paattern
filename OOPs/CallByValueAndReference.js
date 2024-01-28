//value type - number, boolean, string, undefined, null
let x = 10
let y = x //premitive (copy by value)
x = 12
console.log(y)

//reference type - array, object, function
let a = [10,20]
let b = a //non-premitive (copy by reference)
a[1] = 90
console.log(b)

let p = {value: 10}
let q = p
p.value = 20
console.log(q)

let num = 10, num1 = {val: 10}
function increase(a, b) {a++; b.val++;}
increase(num, num1)
console.log(num, num1)