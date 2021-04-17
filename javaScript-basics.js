// var. let and const

var myname = "Aravind";
console.log(myname);

myname = "Aravind Reddy";
console.log(myname);

const lastname = "letakula";
console.log(lastname);

lastname = "Bishop";
console.log(lastname);

//Arrow function Basic

const apple = () => {
  console.log("Akhil");
};

const mango = (mangolo) => console.log(mangolo);

apple();

mango("Aravind");

function oldway() {
  console.log("old Akhil");
}

oldway();

function newAkhil(name) {
  console.log(name);
}

newAkhil("Latha Akka");

//Arrow function In-Depth

var name = "Akhil";

// Function decleration
function myFunction() {
  console.log(this.name);
}

//Function Expression

const greet = function (who) {
  return "Hello,${who}";
};

//Arrow function

const agreet = (who) => {
  return "Hello,${who}";
};

// Simple Invocation

myFunction(); // logs global object associated with window.

const myObject = {
  innerMethod() {
    console.log(this.name);
  },
};

//Method Invocation
myObject.innerMethod(); // logs are associated with the

// Indirect Invocation

function myFunction1() {
  console.log(this);
}

const myContextA = { value: "A" };

const myContextB = { value: "B" };

myFunction1.call(myContextA, myContextB); // it will consider only first Object

myFunction1.apply(myContextA, myContextB); // it will consider only first Object

// FYI,
//   'https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/'

class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Aravind";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();

person.printMyName();

person.printGender();

// Next Generation Java Script

class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

//Spread Operators
//Arrays
const number = [1, 2, 3, 4];

const newObject = [...number, 5];

console.log(number);

console.log(newObject);

//Objects
const person = {
  name: "Karthik",
  age: "27",
  sex: "male",
};

const newPerson = {
  ...person,
  sex: "female",
};

console.log(newPerson);

//Rest operator
const filter  =(...args) =>{
  
  for(let arg of args){
    console.log(arg);
  }
  
}

console.log(filter(1,2,3,4));


//Destructuring

[a,b]=['Aravind','Letakula'];

console.log(a);

console.log(b);

[num1,,num3]=[1,2,3];

console.log(num1);

console.log(num3);

//Reference type and primitives.

const number= 1;

const num2= number; // Primitive types

const person={
  name:'max'
}

const secondPerson={  // Reference Types
  ...person
};

person.name= 'manu';

console.log(secondPerson);

//Array functions
 // There are lot of array Functions
 /**
  *   map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
    concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
    slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  * 
  * 
  */

  const number=[1,2,3,4];

  const doubleNumArray= number.map(x=>x*2);
  
  const filterNumArray= number.filter(x=>x>2);
  
  const found= number.find(x=>x >2);
  
  const foundIndex= number.findIndex(x=>x >2);
  
  const reducer= (accumulater, currentValue) => accumulater+ currentValue;
  
  console.log(number);
  
  console.log(doubleNumArray);
  
  console.log(filterNumArray);
  
  console.log(found);
  
  console.log(foundIndex);
  
  console.log(number.reduce(reducer));
  
  console.log(number.reduce(reducer,5));
  
  console.log(number.concat(doubleNumArray));
  
  const sliceNumbers= number.slice(2,5); // starts with begin index and include-1
  
  console.log (sliceNumbers);
  
  console.log(number);
  
  const spliceNumbers= number.splice(1,1,8); // index, replace elements, replacementValue
  
  console.log(number);
  
  
 

