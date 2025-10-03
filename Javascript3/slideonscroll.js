// Jacob Phillips, 10.2.2025
// Adapted from: https://javascript30.com

// What was new:
// debounce() function: basically listens to a user's scrolling position, updates every 20 milliseconds to 20 seconds
// Other functions: clearTimeout(), setTimeout()
// JS properties: scrollY and innerHeight, scrollY takes the vertical position of the scroll bar while innerHeight takes the height of the scroll bar
// forEach(): loops through each element declared in a variable that uses querySelectorAll(). We usually use arrow functions inside the forEach() method.
// Functions inside a function (see line 50)

// Improvements:
// Logged every event that occured while scrolling to the console
// Added styling to the footer to center align and italicize the text

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    console.log(e);

    sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - 
            sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop - sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));

const footer = document.querySelector('footer');
footer.style.textAlign = 'center';
footer.style.fontStyle = 'italic';