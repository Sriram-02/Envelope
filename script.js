document.addEventListener("DOMContentLoaded", function () {
    // Set the page title to always include "The Envelope"
    let originalTitle = document.title;
    document.title = " | The Envelope" + originalTitle;

    // Shrink header on scroll
    window.addEventListener("scroll", function () {
        let header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("header-shrink");
        } else { 
            header.classList.remove("header-shrink");
        }
    });
});
