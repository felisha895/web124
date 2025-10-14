// Jacob Phillips, 10/13/2025
// Adapted from: https://javascript30.com
/*
    What was new:
    stopPropagation(): basically orders the document to stop having the event flow upwards that will cause each surrounding element to react to a single event
    capture: boolean? set to false by default. false is bubbling and true is capturing
    once: New feature for newer browsers but only allows an element to react to an event only one time

    Improvement: A little bit of JavaScript to change the size of the button
*/

const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
    console.log(this.classList.value);
    // e.stopPropagation(); // stop bubbling!
    // console.log(this);
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
}));

button.addEventListener('click', () => {
    console.log('Click!!!');
}, {
    once: true
});

button.style.padding = "10px 20px";