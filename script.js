const darkModeButton = document.getElementById("darkmode");

darkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeButton.textContent = "☀️";
    } else {
        darkModeButton.textContent = "🌙";
    }
});