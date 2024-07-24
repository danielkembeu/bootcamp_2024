
// Normal function
function greet(callback) {
    return callback;
}

// arrow functions
let arrowGreet = () => "Bonjour Josiane";

console.log(arrowGreet());
console.log(greet());

const calculateSalary = () => {
    // ...processing...
    const salaryValue = 200000;
    return salaryValue;
}


const mySalary = calculateSalary();
console.log({ mySalary });


// Exercice:

/**
 * 
 * Creez une fonction flechee nommee `addition`, qui prend en parametre, 2 nombres et qui effectue leur addition.
 * 
 * Create an arrow function named `addition` which takes 2 numbers as params and calculate their addition.
 * 
 * 
 * Global syntax:
 * const functionName = () => statement;
 * or
 * const functionName = () => {
 *      // list of statements;
 *      return something;
 * }
 */

const getFirstLetter = myName => myName[0];
