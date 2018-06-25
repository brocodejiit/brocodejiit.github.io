var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("updates").getElementsByClassName("content-wrapper")[0].style.top = "0";
  } else {
    document.getElementById("updates").getElementsByClassName("content-wrapper")[0].style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}