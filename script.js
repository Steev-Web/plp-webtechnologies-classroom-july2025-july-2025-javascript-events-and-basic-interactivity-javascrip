// Part 1: Event Handling
document.getElementById("messageBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "Hello! You clicked the button 🎉";
});

// Part 2: Interactive Elements
// Dark Mode Toggle
document.getElementById("toggleMode").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("increaseBtn").addEventListener("click", function() {
  count++;
  counterDisplay.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", function() {
  count = 0;
  counterDisplay.textContent = count;
});

// Part 3: Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting

  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name cannot be empty.";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Final check
  if (isValid) {
    alert("Form submitted successfully! 🎉");
    this.reset();
  }
});
