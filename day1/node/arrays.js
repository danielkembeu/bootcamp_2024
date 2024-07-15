let sampleArray = [
    [1, 2, 5],
    [7, 6, 10, [13, 11], 12],
    [3]
]

// print out 11.
// console.log(sampleArray[1][3])

let beforTaille = sampleArray.length;
console.log(beforTaille);


// Comment inserer un nouvel element dans le tableau ?

// How to insert a new element in the array.

sampleArray.push("Josiane");

let afterTaille = sampleArray.length;
console.log(afterTaille);

console.log(sampleArray);
let elementRetire = sampleArray.pop();

console.log(elementRetire);
console.log(sampleArray);

