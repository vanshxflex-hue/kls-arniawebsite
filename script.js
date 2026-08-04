document.addEventListener("DOMContentLoaded", function () {
    console.log("Kasturi Lal & Sons Website Loaded");

    const button = document.querySelector(".btn");

    if (button) {
        button.addEventListener("click", function () {
            window.location.href = "https://wa.me/919018047777";
        });
    }
});