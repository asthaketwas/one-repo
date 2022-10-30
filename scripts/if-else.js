/*if you want to campare any 2 values and you r using ifelse for that than instead 
of using ifelse you can create a function and return the value and it will return boolean value T/F*/

/*function isLess(a, b) {

    if (a < b) {
      return true;
    } else {
      return false;
    }
  }
  
  isLess(10, 15);
//converting to function same code
function isLess(a, b) 
{return a < b;}
isLess(10, 15);

//example of if-else
if (val === 1) {
    answer = "a";
  } else if (val === 2) {
    answer = "b";
  } else {
    answer = "c";
  }

  ///converting into swith case

  switch (val) {
    case 1:
      answer = "a";
      break;
    case 2:
      answer = "b";
      break;
    default:
      answer = "c";
  }
  //converting ifelse to switch
  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  
    if (val === "bob") {
      answer = "Marley";
    } else if (val === 42) {
      answer = "The Answer";
    } else if (val === 1) {
      answer = "There is no #1";
    } else if (val === 99) {
      answer = "Missed me by this much!";
    } else if (val === 7) {
      answer = "Ate Nine";
    }
  
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);*/
  
//converting to switch 
  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch(val){
    case "bob":
      answer = "Marley";
      break;
     case 42 : 
      answer = "The Answer";
      break;
    case 1 :
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
      default:
        console.log("invalid code");
    }
  
    // Only change code above this line
    return answer;
  }
  
 console.log(chainToSwitch(1));
  