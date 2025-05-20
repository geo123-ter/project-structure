

 document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Remove previous error message if any
        let errorMsg = document.getElementById('email-error');
        if (errorMsg) errorMsg.remove();

        if (!emailPattern.test(email)) {
            errorMsg = document.createElement('p');
            errorMsg.id = 'email-error';
            errorMsg.style.color = 'red';
            errorMsg.textContent = 'Please enter a valid email address.';
            emailInput.parentNode.appendChild(errorMsg);
            return;
        }

        // Save to localStorage
        let emails = JSON.parse(localStorage.getItem('subscribedEmails') || '[]');
        emails.push(email);
        localStorage.setItem('subscribedEmails', JSON.stringify(emails));

        // Show success message
        let successMsg = document.createElement('p');
        successMsg.style.color = 'green';
        successMsg.textContent = 'Thank you! You will be notified.';
        emailInput.parentNode.appendChild(successMsg);

        // Clear the input field
        emailInput.value = '';
    });