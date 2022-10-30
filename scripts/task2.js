
//1.Using if..else, write the code which gets a number via prompt and then shows in alert:

/*let num=prompt("Give any number ");
if(num>0)
{
    alert("Number is Positive") 
}
else if(num<0)
{
    alert("Number is Negitive")
}
else if(num==0)
{
     alert("Number is zero")
}
else  
{
    alert("This is not a number")
}*/

//2. Write a function min(a,b) which returns the least of two numbers a and b.

/*function min (a,b)
{
    if(a<=b)
    {
        console.log(a)
    }
    else{
        console.log(b)
    }
    //console.log(Math.min(2,5))
    //return [a,b];
}

min(2, 5);
min(3, -1);
min(1, 1);*/

//3. Write the code using if..else which would correspond to the following switch:

/*let browser = prompt("ENTER BROWSER NAME");
 if( browser==="Edge")
 {
    alert("You have got the Edge!")
 }
/*else if(browser==="Chrome")
{
    alert("You have got the Chrome!")
}
else if(browser==="Firefox")
{
    alert("You have got the Firefox!")
}
else if(browser==="Safari")
{
    alert("You have got the Safari!")
}
else if(browser==="Opera")
{
    alert("You have got the Opera!")
}
//second method 
else if(browser==="Opera"|| browser==="Safari"|| browser==="Firefox"|| browser==="Chrome")
{
    alert("Okay we support these browsers too!")
}
else{
    alert("We hope that this page looks ok!")
}*/

//4. Rewrite the code below using a single switch statement:
/*let a= prompt(" Enter any number")
switch( a)
{
    case 1: if(a==0)
             alert("this is zero")
                break;
    
    case 2: if(a==1)
             alert("this is 1")
                break;
                
    case 3:  if(a===2||a===3) 
            alert("this is 2 and 3")
                       break; 
     default :
       alert(" number not matched")                                     
}*/

let a= prompt(" Enter any number");
switch( a)
{
    case '0':  
             
             alert("this is zero")
                break;
    
    case '1':  
             
             alert("this is 1")
                break;
                
    case '2':
     case '3':   
               alert("this is 2 and 3")
                       break; 
     default :
       alert(" number not matched")                                     
}

/*switch(a)
  {
    case 1: 
         alert("alpha");
            break;
    case 2: alert("beta");
            break;
    case 3: alert("gamma");
            break;
    case 4: alert("delta");
            break;
     default:
         console.log("invalid data");     
  
  }*/





//let fruits=["apple","orange","banana","barries"]
//console.log(fruits.slice(-4,-1))



/*let myStr = "This is the first sentence.";
myStr+="This is the second sentence.";
console.log(myStr)*/


/*function myLocalScope() {
  // Only change code below this line
  let myVar; //  declare a variable
  console.log('inside myLocalScope', myVar);//in this myVar it will show that the variable is undifined
}
myLocalScope();*/


