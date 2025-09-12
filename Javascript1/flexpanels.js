// File: flexpanels.js
// Jacob Phillips, 9.11.2025
// Adapted from https://javascript30.com/
// Flex Panels Image Gallery

/* Improvements:
    1. Using what I've learned to add text to each third child of each panel
*/
/* What was new: 
    WEB 114 did not teach arrow functions, but WEB 122 teached me the
    specifics of them but not the details and what arrow functions do, so 
    I had to look it up. I'm sure next week, we can actually look at the 
    details of arrow functions.
*/

let panels = document.querySelectorAll('.panel');
let panel1ThirdChild = document.querySelector('.panel1 p:nth-child(3)');
let panel2ThirdChild = document.querySelector('.panel2 p:nth-child(3)');
let panel3ThirdChild = document.querySelector('.panel3 p:nth-child(3)');
let panel4ThirdChild = document.querySelector('.panel4 p:nth-child(3)');
let panel5ThirdChild = document.querySelector('.panel5 p:nth-child(3)');

function toggleOpen() {
    this.classList.toggle('open');
    panel1ThirdChild.textContent = "Dancing is essential to improving cardiac health."
    panel2ThirdChild.textContent = "Even a small amount of generosity can improve mental health, sleep, and your heart."
    panel3ThirdChild.textContent = "Admission is not that hard to negotiate."
    panel4ThirdChild.textContent = "Be perseverant. Giving up won't get you anywhere."
    panel5ThirdChild.textContent = "True love isn't found. It's built."
}
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));