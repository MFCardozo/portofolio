/*hide footer fixed in home*/
const footerElement = document.getElementById("footer");
const logoFooter = document.getElementById("logo__footer");
const myScrollFunc = () => {
  var y = window.scrollY;
  if (y >= 1500) {
    footerElement.className = "footer";
  } else {
    footerElement.className = "footer--hide";
  }
};

window.addEventListener("scroll", myScrollFunc);

/*lazy loading logo footer*/
window.onscroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    logoFooter.style.opacity = "1";
    logoFooter.style.transform = "translateX(0)";
  }
};



