// Function to toggle the hamburger menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamlurger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Add event listener to dark mode toggle button
document.getElementById("darkmode-toggle").addEventListener("change", toggleDarkMode);
