

function  sum(N1, N2) {
  console.log('sum is' + sum);
   return N1 + N2;

}

function multiply(N1, N2) {
  console.log('the total is' + multiply);
  return N1 * N2;

}
function sumAndMultiply(N1, N2, N3) {
  var sum3 = sum(sum(N1, N2), N3)
  console.log(sum3);

  var mult3 = multiply(multiply(N1,N2),N3 )
  console.log(mult3);
  return [sum3, mult3]
}
