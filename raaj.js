$(document).ready(function() {
    // Function to reveal elements
    function reveal() {
        var reveals = $('#reveal'); // Select all elements with the class 'reveal'
        var windowHeight = $(window).height(); // Get the height of the window

        // Loop through each reveal element
        reveals.each(function() {
            var revealTop = $(this).offset().top; // Get the top position of the element
            var revealPoint = 150; // Point at which to reveal the element

            // Check if the element is in view
            if (revealTop < $(window).scrollTop() + windowHeight - revealPoint) {
                $(this).addClass('active'); // Add the active class to reveal the element
            } else {
                $(this).removeClass('active'); // Remove the active class if not in view
            }
        });
    }

    // Call the reveal function on scroll
    $(window).on('scroll', reveal);

    // Call the reveal function on page load
    reveal();
});
    
    
    
    
    
    
    $('#fa-bars').click(function(){
        $(this).toggleClass('fa-bars-rotate');
        $('.menu-list-hidden').toggle(function(){
        });
    });

 

     $(document).ready(function() {
        $('.answer').hide(); // Initially hide all answers
    
        $('.question-container').click(function() {
            const thisMenu = $(this).find('.answer'); // Get the answer related to the clicked question
    
            // Slide up all other answers except the one related to the clicked question
            $('.answer').not(thisMenu).slideUp(function() {
                // Hide icons for other questions
                $(this).closest('.question-container').find('.fa-plus').show();
                $(this).closest('.question-container').find('.fa-minus').hide();
            });
    
            // Slide toggle the clicked answer
            thisMenu.slideToggle(function() {
                // Toggle icons based on the visibility of the current answer
                if (thisMenu.is(':visible')) {
                    $(this).closest('.question-container').find('.fa-plus').hide();
                    $(this).closest('.question-container').find('.fa-minus').show();
                } else {
                    $(this).closest('.question-container').find('.fa-plus').show();
                    $(this).closest('.question-container').find('.fa-minus').hide();
                }
            });
        });
    });