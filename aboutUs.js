$(function(){
    $('#fa-bars').click(function(){
        $(this).toggleClass('fa-bars-rotate');
        $('.menu-list-hidden').toggle(function(){})
    });

    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        const offset = -index * 100; // Calculate the offset
        $('.slides').css('transform', 'translateX(' + offset + '%)');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
        showSlide(currentIndex);
    }

    // Set interval for auto sliding
    setInterval(nextSlide, 3000);


       
})()