// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:
const interns = [];
class Intern {
  constructor(i, n, e, g) {
    this.id = i;
    this.name = n;
    this.email = e;
    this.gender = g;
  }
}

const intern1 = new Intern(1, 'Mitzi','mmelloy0@psu.edu', 'F' );
const intern2 = new Intern(2, 'Kennan','kdiben1@tinypic.com', 'M' );
const intern3 = new Intern(3, 'Keven','kmummery2@wikimedia.org', 'M' );
const intern4 = new Intern(4, 'Gannie','gmartinson3@illinois.edu', 'M' );
const intern5 = new Intern(5, 'Antonietta','adaine5@samsung.com', 'F' );
interns.push(intern1, intern2, intern3, intern4, intern5);
// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(interns[0].name);
// Kennan's ID
console.log(interns[1].id);
// Keven's email
console.log(interns[2].email);
// Gannie's name
console.log(interns[3].name);
// Antonietta's Gender
console.log(interns[4].gender);
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
interns[1].speak = function(){return `Hello, my name is ${interns[1].name}`}
console.log(interns[1].speak())
// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
interns[4].multiplyNums = function(a, b){return a*b}
console.log(interns[4].multiplyNums(5, 6))
// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge
// ==== Stretch Challenge: Nested Objects and the this keyword ==== 
// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
//creates person object
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //initialises function prototype
  speak() {
    return `Hey my name is ${this.name}`;
  }
}


//creates the people
const parent = new Person("susan", 70);
parent.child = new Person("george", 50);
parent.child.grandchild = new Person("sam", 30)




// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.



// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.


// Log the parent object's name
console.log(parent.name)
// Log the child's age
console.log(parent.child.age)
// Log the name and age of the grandchild
console.log(parent.child.grandchild.name, parent.child.grandchild.age)
// Have the parent speak
console.log(parent.speak())
// Have the child speak
console.log(parent.child.speak())
// Have the grandchild speak
console.log(parent.child.grandchild.speak())