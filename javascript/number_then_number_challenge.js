function countUp(x) {
  var output = ""
  var input = x + 1
   var i = x + 11;
 for(var y = x + 2; y < i; y++) {
    output +=  " then " + y
 }
  console.log(input + output)
}

countUp(3)