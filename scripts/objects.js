//simple  example of object and accessing it's value("using dot notation(.)")
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line
  //example using bracket notation[]
  const testObj1 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj1["an entree"];  /*if you want to access properties 
                                                 variable with space in in then use "" always*/
const drinkValue = testObj1["the drink"];    
  // Accessing Object Properties with Variables
  const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
  };
  const myDog = "Hunter";//here storing the variable into another variable
  const myBreed = dogs[myDog];// again creating another variable my bread and stroing the value
  console.log(myBreed);//printing it

  //Here is a nested object:

  const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
  ourStorage.cabinet["top drawer"].folder2;
  ourStorage.desk.drawer;
  //example nested object
  const myStorage = {"car": {"inside": {"glove box": "maps",
                                        "passenger seat": "crumbs"
                                       },
                            "outside": { "trunk": "jack" }
                             }
                     };
  const gloveBoxContents =myStorage.car.inside["glove box"];
  
//changing properties values in object
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog["name"]="Happy Coder";//using bracket notation
myDog.name="Happy Coder";//using dot notation

//ADDING PROPERTIES TO OBJECT
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog.bark="woof";

  //Deleting properties from object using delete keyword
  const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  delete myDog.tails;
  //lookups
  function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    var name={
       alpha:"Adams",
        
      bravo:"Boston",
      
       charlie:"Chicago",
        
       delta:"Denver",
       echo: "Easy",
       foxtrot: "Frank",
    }
    result= name[val];
  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");
  //Nested array 
  const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];
  
  
//********************************** */
let student={
    fname:"henry",
    cgpa:7.0,
    city:"Delhi",
    placed:"ABC",
   
}
/*console.log(student.fname)
console.log(student["city"])
student["college"]="XYZ University"
//student.college="XYZ University"
console.log(student)
for(let key in student){
    console.log(key,student[key])
}
*/