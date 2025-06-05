(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    


    
const slides = document.querySelectorAll('#customBanner .slide');
let currentSlide = 0;

function animateText(slide) {
    const content = slide.querySelector('.slide-content');
    if (content) {
        content.classList.remove( 'animate__fadeInUp');
        void content.offsetWidth; // trigger reflow
        const effects = [ 'animate__fadeInUp'];
        const randomEffect = effects[Math.floor(Math.random() * effects.length)];
        content.classList.add(randomEffect);
    }
}

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    animateText(slides[currentSlide]);
}

animateText(slides[currentSlide]); // animate first slide
setInterval(nextSlide, 3000);


   
// const slides = document.querySelectorAll('#customBanner .slide');
// let currentSlide = 0;

// function nextSlide() {
//     slides[currentSlide].classList.remove('active');
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].classList.add('active');
// }
// setInterval(nextSlide, 6000);




   
// let slides = document.querySelectorAll('#customBanner .slide');
// let current = 0;

// function showNextSlide() {
//     slides[current].classList.remove('active');
//     current = (current + 1) % slides.length;
//     slides[current].classList.add('active');
// }

// setInterval(showNextSlide, 3000); // 6 seconds interval




    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });




    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });



    document.addEventListener('DOMContentLoaded', () => {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            counterUp(counter, {
                duration: 2000, // duration in milliseconds (e.g., 2000ms = 2s)
                delay: 16       // delay between steps
            });
        });
    });







    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

