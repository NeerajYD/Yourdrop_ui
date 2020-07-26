$(document).ready(function() {
    var animate = new Animate({
        target: '[data-animate]',
        animatedClass: 'visible',
        offset: [0, 0],
        delay: 10,
        remove: true,
        reverse: false,
        scrolled: false,
        debug: true,
        onLoad: true,
        onScroll: true,
        onResize: false,
        callbackOnInit: function() {
            console.log('Initialised');
        },
        callbackOnAnimate: function(element) {
            console.log(element)
        }
    });

    animate.init();
   });


  $(document).ready(function() {
    //parallax scroll
    $(window).on("load scroll", function() {
      var parallaxElement = $(".parallax_scroll"),
        parallaxQuantity = parallaxElement.length;
      window.requestAnimationFrame(function() {
        for (var i = 0; i < parallaxQuantity; i++) {
          var currentElement = parallaxElement.eq(i),
            windowTop = $(window).scrollTop(),
            elementTop = currentElement.offset().top,
            elementHeight = currentElement.height(),
            viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
            scrolled = windowTop - elementTop + viewPortHeight;
          currentElement.css({
            transform: "translate(" + scrolled * -0.25 + "px, 0)"
          });
        }
      });
    });
  });