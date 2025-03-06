document.addEventListener("DOMContentLoaded", function () {
    // Set the page title to always include "The Envelope"
    let originalTitle = document.title;
    document.title = originalTitle + " | The Envelope";

    // Shrink header on scroll
    window.addEventListener("scroll", function () {
        let header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("header-shrink");
        } else { 
            header.classList.remove("header-shrink");
        }
    });

    // Fetch blog articles from GitHub if the target element exists
    let blogContainer = document.getElementById("opinions-blogs");
    if (blogContainer) {
        async function loadBlogs() {
            try {
                const response = await fetch('https://api.github.com/repos/sriram-02/sriram-02.github.io/contents/100-opinions');
                if (!response.ok) throw new Error("Failed to fetch blogs");
                
                const files = await response.json();
                let blogList = "<ul>";
                files.forEach(file => {
                    if (file.name.endsWith(".md")) {
                        blogList += `<li><a href="${file.download_url}" target="_blank">${file.name.replace('.md', '')}</a></li>`;
                    }
                });
                blogList += "</ul>";
                blogContainer.innerHTML = blogList;
            } catch (error) {
                console.error("Error loading blogs:", error);
            }
        }

        loadBlogs();
    }
});
