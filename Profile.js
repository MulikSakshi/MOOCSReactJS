// Form validation and interactivity
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Simple validation
    if (name === "" || email === "" || message === "") {
        document.getElementById('form-status').textContent = "All fields are required!";
        document.getElementById('form-status').style.color = "red";
    } else {
        document.getElementById('form-status').textContent = "Message sent successfully!";
        document.getElementById('form-status').style.color = "green";
        
        // Reset the form after submission
        document.getElementById('contactForm').reset();
    }
});