const containerEl = document.querySelector('.container');


// Create 30 Color Containers
for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement('div');

    colorContainerEl.classList.add('color-container');
    containerEl.appendChild(colorContainerEl);

}

// Get all generated Color containers
const colorContainerEls = document.querySelectorAll('.color-container');


generateColors();

// Use generated colors as BG and display its HEX code
function generateColors() {
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor();
        // colorContainerEl
        console.log(newColorCode);
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;
    });

}

// Generate a random 6 character code
function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let color = "";

    for (let index = 0; index < colorCodeLength; index++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomNumber, randomNumber + 1)

    }
    return color;

}