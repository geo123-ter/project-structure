document.querySelector('.subscribe button').addEventListener('click', function () {
    const emailInput = document.querySelector('.subscribe input[type="email"]');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        alert('Please enter your email address.');
    } else if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Thank you for subscribing!');
        emailInput.value = ''; // Clear the input field
    }
});