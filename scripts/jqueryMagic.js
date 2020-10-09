import "./jquery-3.0.0.min.js";
$(function () {
  $("body").on("click", "#a1", function () {
    $("#a1").text("3");
  });
  $("body").on("click", "#a2", function () {
    $("#a2").attr(
      "src",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWuJqDeRs8WvW58kKJ6lPji1sXQnN-zVhWLu0m6PXMWyKoK6vN"
    );
    $("#a2e").text("Ho-oh");
  });
});
