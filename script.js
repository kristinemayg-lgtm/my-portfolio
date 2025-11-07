document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".project-button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const details = button.nextElementSibling;
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                button.textContent = "Hide Details";
            } else {
                details.style.display = "none";
                button.textContent = "Show Details";
            }
        });
    });
});

const form = document.getElementById("contactForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        isValid = false;
    }  
    const message = document.getElementById("message").value.trim();
    if (message.length < 10) {
        document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
        isValid = false;
    }
    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
    }
  });