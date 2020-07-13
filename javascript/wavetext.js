// add class wavetext to html to use this animation on it
var text = $(".wavetext").text();
$(".wavetext").html("");
for (var i in text) {
  if (text[i] === " ") {
    $(".wavetext").append($("<span>").html("&nbsp;"));
  } else {
    $(".wavetext").append($("<span>").text(text[i]));
  }
}
