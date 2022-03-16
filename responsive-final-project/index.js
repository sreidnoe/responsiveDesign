function hamburger() {
  var n = document.getElementById("nav");
  if (n.className === "nav") {
    n.className += " responsive";
  } else {
    n.className = "nav";
  }
}
