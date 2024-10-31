function validateAccount() {
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const messageElement = document.getElementById('message');
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Validate username and password criteria
    if (!/^[a-zA-Z0-9]{3,16}$/.test(username)) {
        messageElement.textContent = "Username must be 3-16 characters long and contain only letters and numbers.";
        return false; // prevent form submission
    }

    if (password.length < 6) {
        messageElement.textContent = "Password must be at least 6 characters long.";
        return false; // prevent form submission
    }

    if (password !== confirmPassword) {
        messageElement.textContent = "Passwords do not match.";
        return false; // prevent form submission
    }

    // Check for existing username
    const existingUser = storedUsers.find(user => user.username === username);
    if (existingUser) {
        messageElement.textContent = "Username already taken.";
        return false; // prevent form submission
    }

    // Save new user to local storage
    storedUsers.push({ username, password });
    localStorage.setItem('users', JSON.stringify(storedUsers));

    messageElement.textContent = "Account created successfully!";
    setTimeout(() => {
        window.location.href = 'login.html'; // Redirect to login after successful account creation
    }, 1000);
    return false; // prevent form submission
}
