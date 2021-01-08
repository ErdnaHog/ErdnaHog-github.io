let speed = 50;

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        // Animate Links
        navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 9 + 0.7}s`;
                }
            })
            // Burger Animation
        burger.classList.toggle('toggle');
    })

}

// The typewriter element
var typeWriterElement = document.getElementsByClassName("typewriter")[0];
// The cursor element
var cursorElement = document.getElementsByClassName("typed-cursor")[0];

// The TextArray:
var textArray = ["Web Developer.", "Cybersecurity Specialist."];

// function to generate the backspace effect
function delWriter(text, i, cb) {
    if (i >= 0) {
        typeWriterElement.innerHTML = text.substring(0, i--);
        setTimeout(function() {
            delWriter(text, i, cb);
        }, speed);
    } else if (typeof cb == 'function') {
        setTimeout(cb, 1000);
    }
}

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
    if (i < text.length + 1) {
        typeWriterElement.innerHTML = text.substring(0, i++);
        // generate a random Number to emulate Typing on the Keyboard.
        setTimeout(function() {
            typeWriter(text, i++, cb)
        }, speed);
    } else if (i === text.length + 1) {
        setTimeout(function() {
            cursorElement.classList.toggle("blink");
        }, 0);
        setTimeout(function() {
            cursorElement.classList.toggle("blink");
        }, 1000);
        setTimeout(function() {
            delWriter(text, i, cb)
        }, 1000);
    }
}

// the main writer function
function StartWriter(i) {
    if (typeof textArray[i] == "undefined") {
        setTimeout(function() {
            StartWriter(0)
        }, 500);
    } else if (i < textArray[i].length + 1) {
        typeWriter(textArray[i], 0, function()  {
            StartWriter(i + 1);
        });
    }
}
// wait half a second then start the typewriter
setTimeout(function() {
    StartWriter(0);
}, 500);

navSlide();