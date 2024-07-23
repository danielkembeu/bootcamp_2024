let person = {
    firstName: "Josiane",
    eyeColor: "brown",
    present: function () {
        console.log(this)
    }
}

// console.log({ person: person.present()})
// console.log({ globalThis: this });

