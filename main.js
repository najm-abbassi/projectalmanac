var a;
function go() {
  if (a == 1) {
    document.getElementById("TYPE").style.display = "inline";
    return (a = 0);
  } else {
    document.getElementById("TYPE").style.display = "none";
    return (a = 1);
  }
}
var b;
