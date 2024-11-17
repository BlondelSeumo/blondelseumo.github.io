// Add your javascript here
$(document).ready(function() {
  $('#contact-form').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var formData = $(this).serialize();
    // Perform AJAX request
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: formData,
      success: function(response) {
        // Handle success response
        $('#form-message').text('Thank you for your message! We will get back to you soon.');
        $('#form-message').removeClass('error').addClass('success');
        $('#contact-form')[0].reset(); // Reset the form
        // Redirect to home page after 3 seconds
        setTimeout(function() {
          window.location.href = 'https://blondelseumo.github.io/';
        }, 3000);
            },
            error: function(error) {
        // Handle error response
        $('#form-message').text('Oops! Something went wrong. Please try again.');
        $('#form-message').removeClass('success').addClass('error');
      }
    });
  });
});
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

$(document).ready(function(){
    // Show or hide the "Back to Top" and "Back to Bottom" buttons
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
            $('#back-to-bottom').fadeOut();
        } else {
            $('#back-to-top').fadeOut();
            $('#back-to-bottom').fadeIn();
        }
    });

    // Scroll to the top of the page when "Back to Top" button is clicked
    $('#back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    // Scroll to the bottom of the page when "Back to Bottom" button is clicked
    $('#back-to-bottom').click(function(){
        $('html, body').animate({scrollTop: $(document).height()}, 800);
        return false;
    });
});
