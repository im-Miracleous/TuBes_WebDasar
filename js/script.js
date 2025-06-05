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

    const $dropdownLi = $('.has-dropdown');
    const $dropdownLink = $dropdownLi.children('a');

    $dropdownLink.on('mouseover', function(e) {
        e.preventDefault();
        $dropdownLi.toggleClass('open');
    });

    $(document).on('mouseover', function(e) {
        if (!$dropdownLi.is(e.target) && $dropdownLi.has(e.target).length === 0) {
            $dropdownLi.removeClass('open');
        }
    });

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
});