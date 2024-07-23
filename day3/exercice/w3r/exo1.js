/**
 * 
 * Ecrire une fonction JS qui prend un nombre en parametre et qui renvoie une erreur personnalisee si le number n'est pas du type "number"
 * 
 */

function throwCustomError(n) {
    if (!Number.isInteger(n)) {
        throw new Error("Not an integer");
    }

    console.log("Valid integer");
}

try {
    throwCustomError(10);
    throwCustomError(49.1);
} catch (e) {
    console.log("Error:", e.message);
} finally {
    console.log("👋 Thank you !!");
}