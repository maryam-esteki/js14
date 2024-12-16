/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/
const colors = ['red', 'aqua', 'orange', 'purple', 'lightgreen'];

const text = prompt("Please enter a text to display with random colors:");

if (text) {
    const wordDiv = document.getElementById('word');
    let coloredText = '';
    for (let char of text) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        coloredText += `<span style="color: ${randomColor}">${char}</span>`;
    }
    wordDiv.innerHTML = coloredText;
} else {
    alert("No text entered. Please refresh and try again.");
}