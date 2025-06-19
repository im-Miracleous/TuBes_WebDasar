$(document).ready(function() {
    const $hamburger = $('#menu-icon');
    const $closeIcon = $('#close-icon');
    const $navBar = $('.navigation-bar');

    $hamburger.on('click', function() {
        $navBar.toggleClass('active');
        $hamburger.css('display', $navBar.hasClass('active') ? 'none' : 'inline-block');
        $closeIcon.css('display', $navBar.hasClass('active') ? 'inline-block' : 'none');
    });

    $closeIcon.on('click', function() {
        $navBar.removeClass('active');
        $hamburger.css('display', 'inline-block');
        $closeIcon.css('display', 'none');
    });

    // // Dropdown menu: only open on hover of the link itself, not the whole li
    // const $dropdownLi = $('.has-dropdown');
    // const $dropdownLink = $dropdownLi.children('a');
    // $dropdownLi.on('mouseenter', function() {
    //     $(this).addClass('open');
    // });
    // $dropdownLi.on('mouseleave', function() {
    //     $(this).removeClass('open');
    // });
    // // Remove previous mouseover handlers if any
    // $dropdownLink.off('mouseover');
    // $(document).off('mouseover');

    // Smooth Scroll
    const $showMeBtn = $('.banner-button > button');
    const $judul = $('.judul').first();
    if ($showMeBtn.length && $judul.length) {
        $showMeBtn.on('click', function(e) {
            e.preventDefault();
            const $header = $('.header');
            const headerHeight = $header.length ? $header.outerHeight() : 0;
            const targetY = $judul.offset().top - headerHeight - 10;
            $('html, body').animate({ scrollTop: targetY }, 600);
        });
    }

    // Autoplay Bootstrap Carousel
    var myCarousel = document.querySelector('#carouselExampleAutoplaying');
    if (myCarousel) {
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 5000
        });
    }

    // Animations on-scroll
    // Select all elements with the 'pop-up' class
    const popUps = document.querySelectorAll('.pop-up');

    // Create an Intersection Observer
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally, unobserve after animation
        observer.unobserve(entry.target);
        }
    });
    }, { threshold: 0.1 });

    // Observe each pop-up element
    popUps.forEach(el => observer.observe(el));
});