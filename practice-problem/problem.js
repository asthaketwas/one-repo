
/*const obj={};
let obj1= Object.assign(obj,{});
console.log(obj===obj1)*/

/*var obj5 = { a: 10 };
var new_obj = Object.assign({}, obj5);
console.log(obj5)
console.log(new_obj)
console.log(obj5===new_obj);*/

        /*var obj1 = { a: 10 };
        var obj2 = { b: 20 };
        var obj3 = { c: 30 };
        var new_obj = Object.assign({},obj1, obj2, obj3);
        console.log(new_obj);  */   

        
       /* const obj1 = { property1: 'initial_data'};
        const obj2 = Object.seal(obj1);
        obj2.property1 = 'new_data';
        obj2.city="raipur";
        console.log(obj1.property1);*/

        /*const obj={secnd: 30 , first:20, first:30};
        console.log(obj);*/

        /*function add()
        {
            return 10+20;
        }
        console.log(add());*/


       /* let value=10;

        if(true)
        {
            let value=20;
            
            console.log(value)
        }
        console.log(value);*/
/*
const map=new Map();
map.set("length",100)
const keys=map.keys();
keys.push("width");
console.log(keys);*/

/*let ex = [1, 2, 3, 4, 5, 6, 7];
console.log(ex.copyWithin(2,3,5));

/*var metal ={ basicName:"copper",
             basicValuePerGm:10,
            getData:function(){
      return this.basicName + "value is" + this.basicValuePerGm;
            }
        };*/
/*(function*myfunction(){
    yield 1000
})().next().next()*/

/*let tax=100;
let cost=300;
let c = tax=tax%cost;
console.log("remainder assignment=", c);*/

/*const REGEX = /hi/g;
REGEX.lastindex =2;
const match =REGEX.exec('hi rohan');
console.log(REGEX.lastindex);
console.log(REGEX.exec('hi'));*/
//
/*this.test = "i am a the creater";
var demo={ test:"i am the destroyer"};
demo.method= function(name,cb)
{
    this[name]=cb;
};
demo.method("see",()=>{
    console.log(this.test);
});
demo.see();*/

/*function parent()
{
    let show=() =>console.log(arguments[0]);
    show(2);
}parent(5);
*/
/*const a=()=>'a';
const b=()=>'b';
const c=()=>'c';
const res=(b(),c(),a());
console.log(res);

const obj={ name : 'joe', 
              sub:{ name: 'doe'}};
Object.freeze(obj);
obj.sub.name = 'astha';
console.log(obj.sub.name);*/


/*function solve (arr, rotations){
if(rotations==0)
return arr;
for(i=0; i<rotations; i++)
{
    let element= arr.pop();
    console.log(element);
    arr.unshift(element);
    //console.log(element);
    
}
return arr;
}
 (solve([44, 1, 22, 111], 5));*/
 /***********************************/
 // to go to the print option in ur page
 /*function print_current_page()
{
window.print();
}*/
//change the string into a alphabetical order
/*function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));*/
/*A = "blah!";
	a = A.repeat(5);
	console.log(a);*/
    /*var value1=5;
    var value2=1;
    console.log("v$v2=" + value1 & value2 )
    console.log("v|v2=" + value1 | value2);;*/

   /* function* generator(i) {
        yield i;
        return i;
        yield i + 10;
      }
      
      let res=(generator(10));
      console.log(res);*/
      //IT WILL GOING TO RUN 10 TIMES
    /*for(let i=0; i<10;i++)
    {
        setTimeout(()=> 
        {
            console.warn(i)
        },1000)
    } */ 
    /*var Flag=true;
    var reFlag=new Boolean(true)
    console.log(Flag==reFlag);*/
    /*let array=['green', 'red','blue'];
    array[3]=1;
    array[4]='black';
    console.log(array);
/////*********************** */
   /* const plus=+0;
    const minus=-0;
    const res= plus===minus;
    console.log(res);*/
    /*const placement={
        company:"XYZ",
        package:"4,00,000",
        country:"IND"
    
    }
    placement.Object.freeze("company");
    console.log(placement);
    placement.city="raipur";
    console.log(placement);*/
    let array=['a','b','c','d','f'];
    array.splice(0,array.length);
    console.log(array);

    var data=55457896355478966;
    console.log(typeof 55457896355478966);
    

      
      

