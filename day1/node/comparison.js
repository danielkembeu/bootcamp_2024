// /**
//  * Here we'll have a basic comprehension of the logical operations using JS.
//  */

// const { out } = require("./basics");

// let stringifyNumber = "23";
// let realNumber = 23;

// out(stringifyNumber == realNumber);




/**
 * 
 * In an entreprise, you receive a bonus of 10% on your salary when your age is between 26 and 32; 25% for those who are between 36 and 44. And No bonuses for those who are less than 26 and more than 44.
 * 
 * The salary for the first interval is $4000/month and for the second, $8000/month. Else, it's $3000.
 * 
 * Calculate the salary for Yvan who is 28, for Ben who is 40 and for Tanya who is 31 after 6 years of service in that entreprise.
 */


// =================================================== EXERCICE'S CORRECTION ====================================================


const bonuses = [0, 0.1, 0.25];
const salaries = [3000, 4000, 8000];

// default: [< 26 and > 44]
// pro: [>= 26 and <=32]
// expert: [>= 36 and <= 44]
const intervalTags = ['default', 'pro', 'expert'];

let yvanAge = 28;
let benAge = 40;
let tanyaAge = 45;

const YEARS_OF_SERVICE = 6;


/**
 * 
 * @param {number} employeeAge 
 * @returns The id of the interval in which the employee is currently.
 * 
 */
function getInterval(employeeAge) {
    if (employeeAge < 26 || employeeAge > 44) {
        return intervalTags[0];
    } else if (employeeAge >= 26 && employeeAge <= 32) {
        return intervalTags[1];
    } else if (employeeAge >= 36 && employeeAge <= 44) {
        return intervalTags[2];
    }
}

/**
 * 
 * @param {string} intervalLabel 
 * @description The interval id
 * @param {number} experience
 * @description The current experience amount to calculate the salary. 
 */
function getContextAmount(intervalLabel, experience) {

    switch (intervalLabel) {
        case "default":
            return salaries[0] * experience;
        case "pro":
            return salaries[1] * (1 + bonuses[1]) * experience;
        case "expert":
            return salaries[2] * (1 + bonuses[2]) * experience;
        default:
            return 0;
    }
}

/**
 * 
 * @param {string} employeeName The name of the current employee
 * @param {number} employeeAge The age of the current employee
 * @returns The message with the total earn of the current employee after a number of years of work inside the entreprise. For instance, in our case it's 6 years.
 */
function calculateSalary(employeeName, employeeAge) {
    let salary = 0;

    for (let i = 1; i <= YEARS_OF_SERVICE; i++) {

        // get the current interval
        const interval = getInterval(employeeAge);
        console.log({ interval });

        // get the fitted current salary:
        salary += getContextAmount(interval, i); // i => experience amount.
        console.log({ salary });
    }

    return `${employeeName} will earn $${salary} after ${YEARS_OF_SERVICE} years`;
}

console.log(calculateSalary("Yvan", yvanAge));
console.log(calculateSalary("Ben", benAge));
console.log(calculateSalary("Tanya", tanyaAge));
