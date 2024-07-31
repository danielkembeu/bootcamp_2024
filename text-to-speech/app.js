// Getting the HTML elements
// Obtenir les elements HTML.

const textArea = document.querySelector("textarea");
const select = document.querySelector('select');
const button = document.querySelector('button');


let voices = [];
const speech = new SpeechSynthesisUtterance();

speech.volume = 0;

window.speechSynthesis.onvoiceschanged = () => {
    // Getting all the voices from our PC.
    // Récupérer toutes les voix de notre PC.
    voices = window.speechSynthesis.getVoices();
    // Default speech voice is the first voice in voices.
    // La voix vocale par défaut est la première voix parmi les voix.
    speech.voice = voices[0];

    // Looping on each element of our voices array and take their particular value and position, after what, we'll set them to be options of our select HTML element.

    // Boucler sur chaque élément de notre tableau voices et en prenant leur valeur et leur position particulières, après quoi, nous les définirons comme options de notre élément HTML sélectionné.
    voices.forEach((voice, index) => 
        select.options[index] = new Option(voice.name, index));
};

// Add an event listener to our 'select' element. In this case, every time there is a change. ('exchange').

// Ajouter un ecouteur d'evenement sur notre element 'select'. En occurrence, chaque fois qu'il y'a un changement. ('change').
select.addEventListener('change', () => {
    speech.voice = voices[select.value];
});

button.addEventListener("click", () => {
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
});


const option = document.getElementById('option');
console.log(option.value);

console.log(speech);