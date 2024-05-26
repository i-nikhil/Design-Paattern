/**
 * Module or Reveal design pattern helps in creating self contained independent components
 * that helps in loose coupling and well structured code. It provides encapsulation and abstraction.
 * Module Pattern = IIFE(better namespace management) + Closures(better encapsulation)
 */

const myModule = (function() {
    // Private variables and functions
    let privateVariable = "I am private";

    function privateMethod() {
        console.log(privateVariable);
    }

    return {
        // Public variables and functions
        publicVariable: "I am public",

        publicMethod: function() {
            console.log("Accessing private variable from public method:");
            privateMethod();
        }
    };
})();

// Usage
console.log(myModule.publicVariable); // Output: I am public
myModule.publicMethod(); // Output: Accessing private variable from public method: I am private

// Trying to access private members directly will fail
console.log(myModule.privateVariable); // Output: undefined
myModule.privateMethod(); // TypeError: myModule.privateMethod is not a function
