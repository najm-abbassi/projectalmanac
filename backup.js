



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
  $("#d").append(compare1())
  
  function compare2(a, b) {
    b = $("#TYPE").val();
    a = Object.values(romance);
    for (i = 0; i < a.length; i++) {
      if (a[i] === b) {
        $("#d").append(`<div>`+a[1]+`</div>`);
        console.log(a[2]);
        console.log(a[3]);
      }
    }
  }
  