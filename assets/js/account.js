// script.js

// Mock user data (replace with dynamic user data if available)
const userName = "John Doe";

// Display the user's name on the account page
document.getElementById("userName").textContent = userName;

// Logout functionality
document.getElementById("logoutButton").addEventListener("click", function () {
    // Perform logout actions
    alert("You have been logged out.");
    // Redirect to the login page (adjust the URL as needed)
    window.location.href = "login.html";
});
