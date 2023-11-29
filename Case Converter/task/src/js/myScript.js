const upperBtn = document.getElementById('upper-case');
const lowerBtn = document.getElementById('lower-case');
const properBtn = document.getElementById('proper-case');
const sentenceBtn = document.getElementById('sentence-case');
const saveBtn = document.getElementById("save-text-file");

upperBtn.addEventListener("click", function () {
    const textArea = document.querySelector("textarea");
    textArea.value = textArea.value.toUpperCase();
});

lowerBtn.addEventListener("click", function () {
    const textArea = document.querySelector("textarea");
    textArea.value = textArea.value.toLowerCase();
});

properBtn.addEventListener("click", function () {
    const textArea = document.querySelector("textarea");
    const words = textArea.value.split(' ');
    textArea.value = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }).join(' ');
});

sentenceBtn.addEventListener("click", function () {
    const textArea = document.querySelector("textarea");
    const sentences = textArea.value.split('. ');
    textArea.value = sentences.map((sentence) => {
        return sentence.trim()[0].toUpperCase() + sentence.substring(1).toLowerCase()
    }).join('. ')
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

saveBtn.addEventListener("click", function () {
    const textArea = document.querySelector("textarea");
    download('text.txt', textArea.value);
});