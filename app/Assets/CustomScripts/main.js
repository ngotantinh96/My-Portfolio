$(window).on("load", function() {
  $(".loader .inner").fadeOut(500, function() {
    $(".loader").fadeOut(750);
  });

  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });
});

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
  var statsTopOffset = $("#stats").offset().top;
  var countUpFinished = false;
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

    if (
      !countUpFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 200
    ) {
      /// Count Up
      $(".counter").each(function() {
        var element = $(this);
        var endVal = parseInt(element.text());
        element.countup(endVal);
      });
      countUpFinished = true;
    }
  });

  $("[data-fancybox]").fancybox();

  $("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false
      }
    });

    return false;
  });

  $("#navigation li a").click(function(e) {
    e.preventDefault();
    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });
});
