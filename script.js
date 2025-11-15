// Select all boxes
const boxes = document.querySelectorAll(".box");

// Function to generate random color
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

// Assign random colors on page load
boxes.forEach(box => {
    box.style.backgroundColor = randomColor();

    // Add click event to change color again
    box.addEventListener("click", function () {
        box.style.backgroundColor = randomColor();
    });
});
