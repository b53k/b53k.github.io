document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight the active section in the navbar
window.addEventListener('scroll', function () {
    let fromTop = window.scrollY;

    document.querySelectorAll('.nav-links a').forEach(link => {
        let section = document.querySelector(link.hash);
        if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const githubLogo = document.getElementById("github-logo");

    // Set paths for light and dark mode GitHub logos
    const githubLight = "Assets/github-mark.png"; // Light mode logo
    const githubDark = "Assets/github-mark-white.png"; // Dark mode logo

    // Check for saved theme preference in localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        if (toggleButton) toggleButton.textContent = "🔥"; // Change button icon
        if (githubLogo) githubLogo.src = githubDark; // Change GitHub logo
    }

    // Add event listener only if the toggle button exists
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                toggleButton.textContent = "🔥"; // Change to fire icon
                if (githubLogo) githubLogo.src = githubDark;
            } else {
                localStorage.setItem("theme", "light");
                toggleButton.textContent = "🕯"; // Change to candle icon
                if (githubLogo) githubLogo.src = githubLight;
            }
        });
    }

    // Set collapsible textbox in blog-posts
    const collapsible = document.querySelectorAll(".collapsible");

    collapsible.forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
            content.classList.toggle("show");

            // Rotate the arrow
            const arrow = this.querySelector(".arrow");
            if (content.classList.contains("show")) {
                arrow.style.transform = "rotate(180deg)";
            } else {
                arrow.style.transform = "rotate(0deg)";
            }
        });

        // Apply custom button text color from data-color
        const textColor = button.getAttribute("data-color");
        if (textColor) {
            button.style.color = textColor;
        }
    });

    
    // Apply custom background colors from data-color attribute
    const collapsibleContainers = document.querySelectorAll(".collapsible-container");
    collapsibleContainers.forEach(container => {
        const color = container.getAttribute("data-color");
        if (color) {
            container.style.setProperty("--custom-bg", color);
        }
    });
    
});

document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".code-toggle");

    toggles.forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
            content.classList.toggle("show");

            // Rotate arrow
            const arrow = this.querySelector(".arrow");
            if (content.classList.contains("show")) {
                arrow.style.transform = "rotate(180deg)";
                content.style.display = "block";
            } else {
                arrow.style.transform = "rotate(0deg)";
                content.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tocList = document.getElementById("toc-list");
    const headers = document.querySelectorAll(".blog-post h2"); // Select all h2 elements inside .blog-post

    // Ensure TOC exists before populating
    if (tocList) {
        headers.forEach((header, index) => {
            // Generate an ID for each heading if it doesn't already have one
            const id = header.id || `section-${index + 1}`;
            header.id = id;

            // Create TOC entry
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = `#${id}`;
            link.textContent = header.textContent;
            listItem.appendChild(link);
            tocList.appendChild(listItem);
        });

        // Smooth scrolling effect
        document.querySelectorAll("#toc-list a").forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute("href")).scrollIntoView({
                    behavior: "smooth"
                });
            });
        });
    }
});
