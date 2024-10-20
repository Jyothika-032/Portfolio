document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Display the thank you message
    document.getElementById('thank-you-message').style.display = 'block';
    
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission

        // Hide the form and display the thank you message
        this.style.display = 'none';  // Hide the form after submission
        document.getElementById('thank-you-message').style.display = 'block';  // Show thank you message

        // You can also reset the form fields if you want
        this.reset();
    });
