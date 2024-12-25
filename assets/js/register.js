document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        try {
            // http://127.0.0.1:5500/register.html
            // const response = await fetch('http://127.0.0.1:5000/register', {
                const response = await fetch('http://127.0.0.1:5500/register.html', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const result = await response.json();

            if (response.ok) {
                alert(`Welcome, ${name}! Your account has been registered. ${result.message}`);
                window.location.href = "login.html";
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});
