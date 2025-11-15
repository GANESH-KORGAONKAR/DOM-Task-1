const tilesContainer = document.querySelector(".tiles");

// Function to generate random color
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Decide box count based on screen width
function getBoxCount() {
    if (window.innerWidth < 600) {
        return 8;    
    } else if (window.innerWidth < 1024) {
        return 12;  
    } else {
        return 15;  
    }
}

// Create boxes dynamically
function createBoxes() {
    tilesContainer.innerHTML = ""; // Clear old boxes

    let count = getBoxCount();

    for (let i = 0; i < count; i++) {
        let box = document.createElement("div");
        box.classList.add("box");

        // set random color
        box.style.backgroundColor = randomColor();

        // change color on click
        box.addEventListener("click", () => {
            box.style.backgroundColor = randomColor();
        });

        // append box
        tilesContainer.appendChild(box);
    }
}

// Run on page load
createBoxes();

// Rebuild boxes when screen is resized
window.addEventListener("resize", () => {
    createBoxes();
});
