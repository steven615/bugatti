$(document).ready(function () {
  $("#menu").click(function () {
    $("header").toggleClass("opened");
  });

  function toggleMute() {
    var video = document.getElementById("video");
    if (video.muted) {
      video.muted = false;
    } else {
      debugger;
      video.muted = true;
      video.play();
    }
  }

  setTimeout(toggleMute, 1000);
});
