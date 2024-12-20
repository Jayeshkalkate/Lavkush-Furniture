// script.js
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        alert(`Welcome, ${name}! Your account has been registered.`);
        // Redirect to the login page or perform registration logic
        window.location.href = "login.html";
    } else {
        alert('Please fill in all fields.');
    }
});
