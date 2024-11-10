// Function for Calorie Burn Calculator
function calculateCalories() {
    const duration = parseInt(document.getElementById('duration').value);
    const intensity = parseInt(document.getElementById('intensity').value);

    if (!isNaN(duration) && !isNaN(intensity)) {
        const caloriesBurned = duration * intensity * 0.1; // Sample formula
        document.getElementById('result').innerText = `You burned approximately ${caloriesBurned.toFixed(2)} calories.`;
    } else {
        document.getElementById('result').innerText = "Please enter valid values.";
    }
}

// Contact Form Submission (for demo purposes)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
    } else {
        alert("Please fill in all fields.");
    }
});
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    document.querySelector('.carousel-slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

// Event listener for scroll
window.addEventListener('scroll', handleSlideIn);
