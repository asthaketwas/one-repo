
/*printing i value
for(let i=1; ; i++)
{
    console.log(i)
}

//sum of 2 numbers
//from function class 
function addNumber(a,b)
{
    let c=a+b
    console.log(c)
}
addNumber(10,20)*/
 
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if(wasThatTrue)
{
  return "Yes, that was true" 
}
  return "No, that was false";

  // Only change code above this line

}
trueOrFalse(true);
trueOrFalse(false);


/*using function inside of a varible
  var sleepCheck = function(numHours) {
    if (numHours >= 8) {
      return "You're getting plenty of sleep! Maybe even too much!";
    } else {
      return "Get some more shut eye!";
    }
  }
  console.log(sleepCheck(10));*/
  
  /*function testStrictNotEqual(val) {
    if (val!="10") { // not eual to operater also change the data type of the variable
      return "Not Equal";
    }
    return "Equal";
  }
  
  console.log(testStrictNotEqual(10));
 // function testGreaterThan(val) {
  let val=100;   
 if (val>100) {  // Change this line
      console.log( "Over 100");
    }
    console.log( "eual 100")
  
    if (val>1102) 
    {  // Change this line
        console.log ("Over 10");
    }
  
    console.log ("10 or Under");*/
//****************
/*function bar(x) {
    if (x < 2) {
      return "Less than two";
    } else if (x < 1) {
      return "Less than one";
    } else {
      return "Greater than or equal to two";
    }
  }
  console.log(bar(0));*/
  
  //console.log(testGreaterThan(10));

 /* function testSize(num) {
    // Only change code below this line
   if(num<5)
   {
     return "tinny";
   }
   else if(num<10)
   {
     return "Small";
   }
   else if(num<15)
   {
     return "Medium";
   }
   else if(num<20)
   {
     return "Large";
   }
   else if(num>=20)
   {
     return "Huge";
   }
    // Only change code above this line
  
   }
   console.log(testSize(7));
   //*************/
   /*function caseInSwitch(val) {
  switch(val)
  {
    case 1: console.log("alpha");
            break;
    case 2: console.log("beta");
            break;
    case 3: console.log("gamma");
            break;
    case 4: console.log("delta");
            break;
     default:
         console.log("invalid data");     
   }
  }
  //************ */
// if else example 
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes===1)
  {
    return names[0]
  }
  else if(strokes<=par-2)
  {
    return names[1]
  }
  else if(strokes===par-1)
  {
    return names[2]
  }
  else if(strokes===par)
  {
    return names[3]
  }
  else if(strokes===par+1)
  {
    return names[4]
  }
  else if(strokes===par+2)
  {
    return names[5]
  }
  else if(strokes>=par+3)
  {
    return names[6]
  }

  // Only change code above this line
}

console.log(golfScore(5, 8));

//short from to write a function using areo
let areaofsquare=(side)=> side*side

areaofsquare(8)
