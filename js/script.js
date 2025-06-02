const hamburger = document.querySelector("#menu-icon");
        const closeIcon = document.querySelector("#close-icon");
        const navBar = document.querySelector(".navigation-bar");

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

document.addEventListener('DOMContentLoaded', function() {
    const dropdownLi = document.querySelector('.has-dropdown');
    const dropdownLink = dropdownLi.querySelector('a');

    dropdownLink.addEventListener('mouseover', function(e) {
        e.preventDefault(); // Prevent navigation
        dropdownLi.classList.toggle('open');
    });

    // Optional: Close dropdown when clicking outside
    document.addEventListener('mouseover', function(e) {
        if (!dropdownLi.contains(e.target)) {
            dropdownLi.classList.remove('open');
        }
    });

    // Smooth scroll to .judul when 'Show me' button is clicked
    const showMeBtn = document.querySelector('.banner-button > button');
    const judul = document.querySelector('.judul');
    if (showMeBtn && judul) {
        showMeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Get header height
            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight : 0;
            // Get element position
            const judulRect = judul.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const targetY = judulRect.top + scrollTop - headerHeight - 10; // 10px extra spacing
            window.scrollTo({ top: targetY, behavior: 'smooth' });
        });
    }
});