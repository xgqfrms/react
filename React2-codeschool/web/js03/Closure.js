/*
Tracing, Building and Using Closures

*/



function mystery() {
  var secret = 6;
  function mystery2(multiplier) {
    multiplier *= 3;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery();// hidden === mystry()
var result = hidden(3);// result === mystery2(3)


// 54

function mystery(input) {
  var secret = 5;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery(4);// hidden === mystry(4)
var result = hidden(2);// result === mystery2(3)

// 40



function mystery(input) {
  var secret = 4;
  input += 2;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}

var hidden = mystery(3);        // hidden === mystry(3)
var jumble = mystery3(hidden);  // jumble === mystery3(mystery2())
var result = jumble(2);         // result === mystery4(2)



param(6) === mystery2(6) 
// 120
return param(6) + bonus;
// 122






