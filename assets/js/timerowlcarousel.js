
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            autoplay: true, // Enable automatic scrolling
            autoplayTimeout: 1000, // Delay between slides (1 second)
            autoplaySpeed: 800, // Speed of the animation (0.8 seconds)
            autoplayHoverPause: false, // Keep animating even when hovered
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
    });
