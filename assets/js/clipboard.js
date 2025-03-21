/* exported clip */

function clip(event) {
  var target = event.target;
  var id = target.dataset["clipSource"];
  var elt = document.getElementById(id);

  navigator.clipboard.writeText(elt.innerText);

  target.innerText = "Copied!";
  target.classList.add("bg-black");
  target.classList.remove("bg-gray");
}
