const textArray = ["Web-Developer", "Creator", "Android-Developer", "Designer", "Ethical-Hacker", "Software-Developer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

const txtTypeSpan = document.querySelector('.txt-type');
const cursorSpan = document.querySelector('.cursor');

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) {
            cursorSpan.classList.add("typing");
        }
        txtTypeSpan.innerHTML += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erse, newTextDelay);
    }

}

function erse() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) {
            cursorSpan.classList.add("typing");
        }
        txtTypeSpan.innerHTML = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erse, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay + 1300);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, newTextDelay);
})
