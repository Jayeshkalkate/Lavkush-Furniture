// script.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert(`Welcome, ${email}!`);
        // Add login logic here
    } else {
        alert('Please fill in both fields.');
    }
});
