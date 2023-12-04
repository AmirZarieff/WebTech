var colors = ['#ff6924', '#778899', '#6a5acd']; // Define an array of colors
var currentColorIndex = 0; // Index to track the current color

function changeFooterColor() {
    var footer = document.querySelector('footer');

    // Change the background color of the footer to the next color in the array
    footer.style.backgroundColor = colors[currentColorIndex];

    // Update the current color index for the next click
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}