/*let obj={ "pname":"riya",
            "age":5,
         "fname":55};
console.log(obj);
for(let key in obj)
{
    console.log(key,obj[key]);
}
let{pname, age:fruite, fname}= obj
console.log(pname);
console.log(fruite);*/

 /*let regex=/^\w+\S\w+[aeiou](.com)/
 let i="kttttt dhgghg55o.com";
 console.log(regex.test(i));*/
 const obj2 = {
    a: 0,
    b: 2,
    c: 4,
    d: 2
    };
    const obj3 = Object.assign({c: 5, d: 6}, obj2);
    console.log(obj2.c, obj2.d);
    const obj={};
let obj1= Object.assign({},obj);
console.log(obj===obj1)