const hamburger = document.querySelector("#menu-icon");
        const closeIcon = document.querySelector("#close-icon");
        const navBar = document.querySelector(".navbar");

        hamburger.onclick = function() {
            navBar.classList.toggle("active");
            hamburger.style.display = navBar.classList.contains("active") ? "none" : "inline-block";
            closeIcon.style.display = navBar.classList.contains("active") ? "inline-block" : "none";
        }

        closeIcon.onclick = function () {
            navBar.classList.remove("active");
            hamburger.style.display = "inline-block";
            closeIcon.style.display = "none";
        };