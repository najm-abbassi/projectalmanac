var hintay = {
  h: "hintay",
  one: "advanture kid",
  two: "kiba girls",
  three: "angel",
};
var shonen = {
  s: "shonen",
  one: " obviously we start with 'one piece'",
  two: " and in number 2 we have the famous 'hunterXhunter'",
  three: "and in the third place we find 'code geasss'",
};
var drama = {
  one: "top1 is'attack on titan'",
  two: " the number2 is 'full metal alchimist'",
  three: "in the third position we find 'school days'",
};
var romance = {
  r: "romance",
  one: " your lie in april ",
  two: "snow white with the red hair",
  three: " after story ",
};

function compare1(x, y) {
  y = $("#TYPE").val();
  x = Object.values(shonen);
  for (i = 0; i < x.length; i++) {
    if (x[i] === y) {
      console.log(x[1]);
      console.log(x[2]);
      console.log(x[3]);
    }
  }
}

function compare2(a, b) {
  b = $("#TYPE").val();
  a = Object.values(romance);
  for (i = 0; i < a.length; i++) {
    if (a[i] === b) {
      console.log(a[1]);
      console.log(a[2]);
      console.log(a[3]);
    }
  }
}

