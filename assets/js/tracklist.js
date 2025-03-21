function hidePreviews() {
  var $previews = document.getElementsByClassName("tracklist-preview");
  for (var i = 0; i < $previews.length; i++) {
    var $preview = $previews[i];
    $preview.classList.add("hidden");
  }
}

function showPreview(event) {
  var previewID = event.target.dataset["previewId"];
  var $preview = document.getElementById(previewID);
  hidePreviews();
  $preview.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  var $items = document.getElementsByClassName("tracklist-item");
  for (var i = 0; i < $items.length; i++) {
    var $elt = $items[i];
    $elt.addEventListener("mouseenter", showPreview);
    $elt.addEventListener("focus", showPreview);
    $elt.addEventListener("mouseleave", hidePreviews);
    $elt.addEventListener("blur", hidePreviews);
  }
});
