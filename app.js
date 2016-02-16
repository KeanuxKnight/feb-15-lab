
function  sum(N1, N2) {
  //console.log('The sum of' + N1 + ' and ' + N2 + ' is ' (N1 + N2) + '.');
  document.getElementById("ans-one").textContent = ('The sum of ' + N1 + ' and ' + N2 + ' is ' + (N1 + N2) + '.');
   return N1 + N2;
}


function multiply(N1, N2) {
  //console.log('The sum of' + N1 ' and ' +  N2 ' is ' + (N1 * N2) + '.' );
  document.getElementById('ans-two').textContent = 'The sum of ' + N1 + ' and ' +  N2 + ' is ' + (N1 * N2) + '.';
   return N1 * N2;
}


function sumAndMultiply(N1, N2, N3) {
  var sum3 = sum(sum(N1, N2), N3)
  console.log(N1 + ' and ' + N2 + ' and ' + N3 + ' sum to ' + sum3 + '.');

  var mult3 = multiply(multiply(N1,N2),N3 )
  console.log('The numbers ' +  N1 + ' and ' + N2 + ' and ' + N3 + ' have a product of ' + mult3 + '.');
  document.getElementById('ans-three').textContent = 'The numbers ' +  N1 + ' and ' + N2 + ' and ' + N3 + ' have a product of ' + mult3 + '.';
  return [sum3, mult3]
}


  function sumArray(numArray) {
    var totalSoFar = 0;
     for (var i = 0; i < numArray.length; i++) {
       totalSoFar = numArray[i] + totalSoFar;
     }
  console.log(numArray.join()  + 'was passed in as an array of numbers and ' + totalSoFar + ' is their sum.');
  document.getElementById('ans-four').textContent = numArray.join()  + ' was passed in as an array of numbers and ' + totalSoFar + ' is their sum.';
  return totalSoFar
}


  function MultArray(numArray) {
    var totalSoFar = 1;
      for (var i = 0; i < numArray.length; i++) {
        totalSoFar = numArray[i] * totalSoFar;
      }
      console.log('The numbers ' + numArray.join() + ' have a product of ' + totalSoFar + '.');
      document.getElementById('ans-five').textContent = 'The numbers ' + numArray.join() + ' have a product of ' + totalSoFar + '.';
    return totalSoFar
}
