document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("changeMe");
    btn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
