var btn = document.getElementById("button");
btn.addEventListener("click", changecolor);
var i = 0;
function changecolor() {
  var tog = document.getElementById("toggler");
  if (i === 0) {
    tog.style.flexDirection = "row-reverse";

    document.body.style.backgroundColor = "black";

    document.getElementsByTagName("h1")[0].style.color = "white";
    i = 1;
  } else {
    tog.style.flexDirection = "row";

    document.body.style.backgroundColor = "white";

    document.getElementsByTagName("h1")[0].style.color = "black";
    i = 0;
  }
}
