$(document).ready(function() {
  $("#slides").superslides({
    animation: "fade",
    play: 5000
  });

  var typed = new Typed(".typed", {
    strings: ["Software Engineer.", "Web Developer.", "Freelancer."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });
});
