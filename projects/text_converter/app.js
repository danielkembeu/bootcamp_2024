const button = document.querySelector('button');
const textArea = document.querySelector('textarea');
const select = document.querySelector('select');

let voices = [];
const speech = new SpeechSynthesisUtterance();

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, index) => select.options[index] = new Option(voice.name, index));
}

select.addEventListener('change', () => {
    speech.voice = voices[select.value];
});

button.addEventListener('click', () => {
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
});