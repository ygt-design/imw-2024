$(document).ready(function () {
  $(".computer").click(function (e) {
    e.preventDefault();
    $(".computer-appear").css("display", "block");
    $(".mail").css("opacity", "1");
  });

  $(".mail").click(function (e) {
    e.preventDefault();
    $(".mail-appear").css("display", "block");
    $(".file").css("opacity", "1");
  });

  $(".file").click(function (e) {
    e.preventDefault();
    $(".file-appear").css("display", "block");
    $(".world").css("opacity", "1");
  });

  $(".world").click(function (e) {
    e.preventDefault();
    $(".world-appear").css("display", "block");
    $(".cd").css("opacity", "1");
  });

  $(".cd").click(function (e) {
    e.preventDefault();
    $(".cd-appear").css("display", "block");
    $(".magnify").css("opacity", "1");
  });

  $(".magnify").click(function (e) {
    e.preventDefault();
    $(".magnify-appear").css("display", "block");
  });
});
