function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const user = storedUsers.find(user => user.username === username && user.password === password);

    const messageElement = document.getElementById('message');

    if (user) {
        messageElement.textContent = "Login successful!";
        // Redirect or proceed to the next page
        setTimeout(() => {
            window.location.href = 'index.html'; // Example redirect
        }, 1000);
        return false; // prevent form submission
    } else {
        messageElement.textContent = "Invalid username or password.";
        return false; // prevent form submission
    }
}
