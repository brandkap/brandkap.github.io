/*
Copyright (c) 2021 by Brandon (https://codepen.io/centerpiece/pen/gOgjQOm)
Fork of an original work Online Tutorials / Div Follow The Mouse Cursor (https://codepen.io/corvus-007/pen/LvjQjm

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

document.addEventListener("DOMContentLoaded", function () {
  var cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", function (evt) {
    var toHover = evt.target.closest("a");

    cursor.style.left = evt.clientX + "px";
    cursor.style.top = evt.clientY + "px";

    cursor.classList.toggle("cursor--grow", toHover);
  });
});
