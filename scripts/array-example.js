
//removing the element fron n array
/*function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));*/
  //removing value using splice
  /*const arr = [2, 4, 5, 1, 7, 5, 2, 1];
   console.log(arr.splice(2,3));*/
  //removing and adding 
  /*function htmlColorNames(arr) {
    // Only change code below this line
    //console.log(arr.splice(0,2,"DarkSalmon","BlanchedAlmond"));
    //console.log(console.log(fruits.slice(2,4))

console.log(arr.slice(2,4))
console.log(arr.slice(-4,-1))
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));*/
  //example from test
  /*function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
        var item=arr.shift(arr);
    return item;
    // Only change code above this line
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));*/
///slice example
  /*function forecast(arr) {
    // Only change code below this line
   let newarr=arr.slice(2,4);
   //console.log(newarr);
    return newarr;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
  
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      
  newArr.push([...arr]);//because the array is aready initized we are
                          // using push method to add the element in the empty array 
      
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));*/
  /*function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learing', ...fragment,'is','fun']; // Change this line
    
    return sentence;
  }
  
  console.log(spreadOut());*/
  //****INDEX OF OPERATOR/
  /*function quickCheck(arr, elem) {
    // Only change code below this line
   return (arr.indexOf(elem)<0)?false:true;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));*/
  
  
  /*(function(){
    setTimeout(()=> console.log(1),2000);
    console.log(2);
    setTimeout(()=> console.log(3),0);
    console.log(4);
   })();*/
   //First the 2 is printed with the console.log, then even with a time delay 
   //of 0ms, the 4 is printed before the 3 because JS executes setTimeout with 
   //the Web API, and so the entire function is executed first. Lastly, after a 
   //delay of 2000ms, the 1 is printed.
   /*function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
      for(let i=0;i<arr.length;i++){
        let flag=0;
        for(let j=0;j<arr[i].length;j++){
          if(arr[i][j]===elem){
            flag=1;
            break;
          }
        }
        if(flag==0)
          newArr.push(arr[i]);
      }
    // change code above this line
    return newArr;
  }
  
  
  // change code here to test different cases:
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 4, 9]], 3));*/



  /*function sample(dep,...cgpa)
  {
    console.log(cgpa)
    for(i=0;i=cgpa.length; i++)
    {
      console.log(i);
    }
  }
  sample("cad",9.0,9.5,8.5,8.0,7.0,4.5)
  
  function sample(dep, ...cgpa){
    
    var sum=0;
    for(let i=0; i<cgpa.length; i++){
        sum+=cgpa[i]
    }
    var avg = sum/cgpa.length;
    return avg;
    
}
console.log(sample("cse", 6,7,8,9));*/


let arr=[2,5,0,1,3,0,6,0];
//[2,5,1,3,6,0,0,0]
let newarr;
if( arr>0 ){
    newarr.push();

}
var clothes=["a","b""c]


