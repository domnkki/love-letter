// Function to open the letter by applying a class to trigger animations
function openLetter() {
    const flap = document.getElementById("flap");
    const letter = document.getElementById("letter");
    const heart = document.getElementById("heart");

    // Animate the flap of the envelope and show the letter
    flap.classList.toggle("open");
    letter.classList.toggle("visible");
    heart.classList.toggle("visible");
}

// Function to close the letter
function closeLetter(event) {
    event.stopPropagation(); // Prevent the event from bubbling up to the envelope
    const flap = document.getElementById("flap");
    const letter = document.getElementById("letter");
    const heart = document.getElementById("heart");

    // Hide the letter and reset the flap
    flap.classList.remove("open");
    letter.classList.remove("visible");
    heart.classList.remove("visible");
}