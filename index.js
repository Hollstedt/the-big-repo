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
const addTodo = () => {
  const todoList = document.querySelector("ul#todo-list");
  const todoInput = document.querySelector("input#todo-input");
  const todo = document.createElement("li");
  todo.innerHTML = `<div><input type="checkbox" id="${todoInput.value}"/> <label for="${todoInput.value}"> ${todoInput.value}</label></div><div class="btn-container"><button class="remove-todo">X</button></div>`;
  todoList.append(todo);
  todoInput.value = "";
  //   updateCheckboxes();
  let checkboxes = document.querySelectorAll(
    'ul#todo-list input[type="checkbox"]'
  );
  checkboxes.forEach((box) =>
    box.addEventListener(
      "change",
      (event) =>
        (event.target.nextElementSibling.style.textDecoration = event.target
          .checked
          ? "line-through"
          : "none")
    )
  );
  let removeBtns = document.querySelectorAll(
    'ul#todo-list button.remove-todo'
  );
  removeBtns.forEach((btn) => btn.addEventListener("click", (event) => {
      event.target.closest("li").remove();
  }));
};

document.querySelector("button#add-todo").addEventListener("click", addTodo);
const superheroes = [
  {
    name: "Spider-Man",
    age: 21,
    profession: "Photographer",
    power: "Wall-crawling",
    city: "New York"
  },
  {
    name: "Wonder Woman",
    age: 3000,
    profession: "Warrior",
    power: "Super strength",
    city: "Themyscira"
  },
  {
    name: "Iron Man",
    age: 45,
    profession: "Engineer",
    power: "Powered armor suit",
    city: "Malibu"
  },
  {
    name: "Black Panther",
    age: 35,
    profession: "King",
    power: "Enhanced senses",
    city: "Wakanda"
  },
  {
    name: "Captain Marvel",
    age: 34,
    profession: "Pilot",
    power: "Energy absorption",
    city: "Los Angeles"
  }
];

function displayProfiles(profiles) {
  const container = document.getElementById("profileContainer");
  container.innerHTML = "";

  profiles.forEach(hero => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${hero.name}</h2>
      <p><strong>Age:</strong> ${hero.age}</p>
      <p><strong>Profession:</strong> ${hero.profession}</p>
      <p><strong>Power:</strong> ${hero.power}</p>
      <p><strong>City:</strong> ${hero.city}</p>
    `;

    container.appendChild(card);
  });
}

document.getElementById("showProfiles").addEventListener("click", function() {
  const criteria = document.getElementById("filterCriteria").value;
  const value = document.getElementById("filterValue").value.trim().toLowerCase();

  let filteredHeroes = superheroes;

  if (criteria !== "all" && value) {
    filteredHeroes = superheroes.filter(hero => 
      hero[criteria].toString().toLowerCase().includes(value)
    );
  }

  displayProfiles(filteredHeroes);
});

document.getElementById("sortProfiles").addEventListener("click", function() {
  const sortCriteria = document.getElementById("sortCriteria").value;

  const sortedHeroes = [...document.querySelectorAll(".card")].sort((a, b) => {
    const aValue = a.querySelector(`p:contains("${capitalizeFirstLetter(sortCriteria)}")`).textContent.split(': ')[1];
    const bValue = b.querySelector(`p:contains("${capitalizeFirstLetter(sortCriteria)}")`).textContent.split(': ')[1];

    if (sortCriteria === "age") {
      return Number(aValue) - Number(bValue);
    }
    return aValue.localeCompare(bValue);
  });

  const container = document.getElementById("profileContainer");
  container.innerHTML = "";
  sortedHeroes.forEach(card => container.appendChild(card));
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
