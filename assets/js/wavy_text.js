/*
Copyright (c) 2021 by Brandon (https://codepen.io/centerpiece/pen/XWMPwvb)
Fork of an original work Playful button hover effects (https://codepen.io/aaroniker/pen/OJPqPMR)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".wavy-text").forEach(function (button) {
    var div = document.createElement("div"),
      letters = button.textContent.trim().split("");

    function elements(letter, index, array) {
      var element = document.createElement("span"),
        part = index >= array.length / 2 ? -1 : 1,
        position =
          index >= array.length / 2
            ? array.length / 2 - index + (array.length / 2 - 1)
            : index,
        move = position / (array.length / 2),
        rotate = 1 - move;

      element.innerHTML = !letter.trim() ? "&nbsp;" : letter;
      element.style.setProperty("--move", move);
      element.style.setProperty("--rotate", rotate);
      element.style.setProperty("--part", part);

      div.appendChild(element);
    }

    letters.forEach(elements);

    button.innerHTML = div.outerHTML;

    button.addEventListener("mouseenter", function () {
      if (!button.classList.contains("out")) {
        button.classList.add("in");
      }
    });

    button.addEventListener("mouseleave", function () {
      if (button.classList.contains("in")) {
        button.classList.add("out");
        setTimeout(function () {
          button.classList.remove("in", "out");
        }, 950);
      }
    });
  });
});
