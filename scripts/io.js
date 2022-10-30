/*alert("hello js!")
let fname=prompt("enter your name")
console.log(fname)
console.log(typeof fname)
let age=+prompt("enter your age")
console.log(age)
console.log(typeof age)*/


function mixedNumbers(arr) {
    // Only change code below this line
   arr.unshift('I',2,'three');
   arr.push(7,'VIII',9);
   
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));
  