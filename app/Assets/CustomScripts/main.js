$(document).ready(function() {
  /// Super Slides
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false
  });

  /// Typed animation typing test
  var typed = new Typed(".typed", {
    strings: [
      "Software Engineer.",
      "Web Developer.",
      "Freelancer.",
      "RPA Developer."
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  ///Owl carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 5,
    autoplay: true,
    autoplayTimeout: 5000,
    //autoplayHoverPause: true,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });

  var skillsTopOffset = $("#skills").offset().top;
  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      /// Easy pie chart
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: "#1abc9c",
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find(".percent")
            .text(Math.round(percent));
        }
      });
    }
  });
});
