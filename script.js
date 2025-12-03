document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".project-button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const details = button.nextElementSibling;

            // toggle a class on the details box
            const isOpen = details.classList.toggle("is-open");

            if (isOpen) {
                details.style.display = "block";   // show it
                button.textContent = "Hide Details";
            } else {
                details.style.display = "none";    // hide it
                button.textContent = "Show Details";
            }
        });
    });
});

const form = document.getElementById("contactForm");
if (form) {
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
}

    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️';
    } else {
        toggleBtn.textContent = '🌙';
    }

    toggleBtn.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-mode');

        if (isDark) {
            toggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
  