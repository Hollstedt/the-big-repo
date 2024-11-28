const buttons = document.querySelectorAll(".btn");
const inputOne = document.querySelector("#number1");
const inputTwo = document.querySelector("#number2");
const resultPrint = document.querySelector(".result");

// Firework effect
const createFirework = (x, y) => {
    const numberOfParticles = 100; // Number of particles for a larger firework
    const maxDistance = 500; // Maximum spread distance for the firework

    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework');

        // Randomize direction and distance for each particle
        const angle = Math.random() * 2 * Math.PI; // Random angle in radians
        const distance = Math.random() * maxDistance; // Random distance within the max spread

        // Calculate the end position
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;

        // Add particle to the DOM
        document.body.appendChild(particle);

        // Set initial position
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Set animation with calculated translation
        particle.style.transform = `translate(${endX}px, ${endY}px)`;

        // Remove the particle after the animation ends
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }
};

const handleClick = (id, event) => {
    const num1 = parseFloat(inputOne.value);
    const num2 = parseFloat(inputTwo.value);
    const calculate = (a, b) => { return eval(`${a} ${id} ${b}`); };
    const result = calculate(num1, num2);

    // Display result
    num1 && num2 ? resultPrint.innerHTML = "Total: " + result : resultPrint.innerHTML = "";

    // Firework effect at button click position
    const { clientX, clientY } = event; // Get click position
    createFirework(clientX, clientY);
};

buttons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        handleClick(btn.id, event); // Pass the event object here
    });
});
