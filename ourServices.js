$(document).ready(function() {
    $('#fa-bars').click(function(){
        $(this).toggleClass('fa-bars-rotate');
        $('.menu-list-hidden').toggle(function(){
        });
    });


    let currentSlide = 0;
    const slides = $('.testimonial-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.hide();
        slides.eq(index).fadeIn();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Initialize the slideshow
    showSlide(currentSlide);

    // Set interval for automatic slide change
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});