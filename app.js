
function  sum(N1, N2) {
  //console.log('sum is' + sum);
   return N1 + N2;

}

function multiply(N1, N2) {
  //console.log('the total is' + );
  return N1 * N2;

}

function sumAndMultiply(N1, N2, N3) {
  var sum3 = sum(sum(N1, N2), N3)
  console.log(sum3);

  var mult3 = multiply(multiply(N1,N2),N3 )
  console.log(mult3);
  return [sum3, mult3]
}

function sumArray(numArray) {
  var totalSoFar = 0;
    for (var i = 0; i < numArray.length; i++) {
      totalSoFar = numArray[i] + totalSoFar;
      console.log(totalSoFar);
    }
  return totalSoFar
  }
