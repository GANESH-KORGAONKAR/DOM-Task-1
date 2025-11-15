// Select all boxes
const boxes = document.querySelectorAll(".box");

// Function to generate random color
function randomColor() {
    // Random values for R, G, B between 0–255
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

// Add event listener to each box
boxes.forEach(box => {
    box.addEventListener("click", function () {
        box.style.backgroundColor = randomColor();
    });
});
