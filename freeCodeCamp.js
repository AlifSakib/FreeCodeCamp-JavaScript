// !Data Types
/* Data Types :
undefined, null, boolean, string, symbol, number and object
*/

var num1 = 4;

var num1 = 3;
22; //Now num will be 3

var ourName = "Oh-My-Posh";

const p = 3.1416;

// !Initializing Variables / Assignment Operator :

var a = 9; //now a is 9 because be assigned 9 into a by using equal sign operator

// !Uninitialized Variables :

var b;
var c;
var d;

//!Case Sensitivity in Variables :

// -> JavaScript is Case sensitive so take care of it .
// -> Try to write variables using camelCase , Like : firstName .

//!Adding Number

var sum = 10 + 10;

//!Substract Number

var difference = 10 - 10;

//!multiplicate Number

var product = 8 * 0;

//!Dividing Number

var quotient = 66 / 33;

// !Incrementing Number

var myVar = 87;

myVar = myVar + 1;
myVar++;
myVar--;

//!Decimal Number

var ourDecimal = 5.7;

var myDecimal = 0.009;

// !Multiply Decimals

var product = 2.0 * 00;

// !Dividing Decimals

var product = 2.0 / 00;

// !Reminders

var reminder = 11 % 3;

// !compound assignment with augmented addition

var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;

// !compound assignment with augmented subtraction

a -= 12;
b -= 9;
c -= 7;

// !compound assignment with augmented multiplication

a *= 12;
b *= 9;
c *= 7;

// !compound assignment with augmented division

a /= 12;
b /= 9;
c /= 7;

// !declare string variables

var firstName = "Alif";
var lastName = "Sakib";
var global = `Banglades ${firstName}`; //backticks

// !escaping literal quotes in strings

var myStr = 'I am a "Single Qupte" inside "double quote" . ';

//Output : I am a "Single Qupte" inside "double quote" .

// !quotinq strings with single quotes 22:43

var myStr = '<a herf="http://www.example.com" target="_blank">Link</a>';

// !escape sequences in strings

/*

Code    Output

\'      Single Quote -> let text= 'It\'s alright.';
\"      Double Quote -> let text = "We are the so-called \"Vikings\" from the north.";
\\      BackSlash    -> let text = "The character \\ is called backslash.";
\n      New Line
\r      carriage Return
\b      backspace
\t      tab
\f      form feed

*/

// !concatenating string with plus operator

// String cn be also added by += operator.

var ourStr = "I come first ";

ourStr += "I come Secound";

// !concatenating string with variables

var ourName = "Oh-My-Posh";

var outStr = `Hello , Our name is ${ourName} , How are ypu ?`;

console.log(outStr);

// !appending variables to strings

var anAdjective = "Awesome";
var ourStr = "Ofs is ";

ourStr += anAdjective;

console.log(ourStr);

// !find a length of string 31:12

//Example

var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

//Setup

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;

// !bracket notation to find first character in string

var lastNameLength = 0;
var lastName = "Lovelace";

FirstLetterOfLirstName = lastName[0];

// !Understand String Immutability

//String index are immutable

// !bracket notation to find Nth character in string34:24
// !bracket notation to find last character in string34:54

FirstLetterOfLirstName = lastName[lastName.length - 1];

console.log(FirstLetterOfLirstName);

// !word blanks 36:31

function wordBank(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";

  result += `The ${myAdjective} ${myNoun} ${myVerb} to the store ${myAdverb}`;
  return result;
}

var fullWord = wordBank("dog", "big", "ran", "quickly");

console.log(fullWord);

// !Arrays

var ourArray = ["Jhon", "23"];

var myArray = ["Quincy", 1];

// !Nest Arrays

var ourArray = [
  ["The Universe", 42],
  ["Everythig", 101010],
];

var myArray = [
  ["Bulls", 23],
  ["White Sox", 23],
];
// !Access Array Data

var ourArray = [50, 60, 70];

var ourData = ourArray[0];
// !Modify Array Data

var ourArray = [50, 60, 70];

ourArray[1] = 45;

// !Access Multi-Dimensional Arrays

var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

var myData = myArray[0][0];

// !push()
var ourArray = ["Stimpson", "J", "Cat"];

ourArray.push(["Happy", "Joy"]); //[ 'Stimpson', 'J', 'Cat', [ 'Happy', 'Joy' ] ]

//Setup

var myArray = [
  ["jhon", 23],
  ["cat", 2],
];

myArray.push(["dog", 3]);

// !pop()

var ourArray = [1, 2, 3];

var removedFromOurArray = ourArray.pop();

//Setup

var myArray = [
  ["Jhon", 23],
  ["Cat", 2],
];

var removedFromMyArray = myArray.pop();

console.log(myArray);

// !shift()

var ourArray = ["Stimpson", "J", ["Cat"]];

var removeFromOurArray = ourArray.shift();

console.log(ourArray);
console.log(removeFromOurArray);

var myArray = [
  ["Jhon", 23],
  ["Cat", 2],
];

var removeFromMyArray = myArray.shift();

console.log(removeFromMyArray);

// !unshift()

var ourArray = ["Stimpson", "J", "Cat"];

ourArray.unshift(["Happy", 5]);

console.log(ourArray);

// !Shopping List

var myList = [
  ["cereal", 3],
  ["milk", 2],
  ["Bananas", 3],
  ["Juice", 4],
  ["egs", 10],
];

// !Write Reusable with Functions

function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();

function reusableFunction() {
  console.log("Hello World");
}

reusableFunction();

// !Arguments

function ourFunctionWithArgs(a, b) {
  // a and b is perameter .
  console.log(a - b);
}

ourFunctionWithArgs(10, 5); //Those are the arguments .

// !Global Scope

var myGolobal = 10;

function fun1() {
  oppsGlobal = 5; //if we dont use var keyword then this variable can be use as a global scope .
}

function fun2() {
  var outPut = "";

  if (typeof myGolobal != "undefined") {
    outPut += "myGlobal is : " + myGolobal;
  }

  if (typeof oppsGlobal != "undefined") {
    outPut += "oppsGlobal is : " + oppsGlobal;
  }

  console.log(outPut);
}

fun1();
fun2();

// !Local Scope

function fun3() {
  var result = 5;

  console.log(result);
}

fun3();

//console.log(result); // error

// !Global vs Local Scope in Functions

var outerWear = "T-Sirt";

function myOutfit() {
  var outerWear = "Sweater";
  return outerWear;
}

console.log(myOutfit());
console.log(outerWear);
// !Return a Value from a Function

function minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(10));

function timesFive(num) {
  return num * 5;
}

console.log(timesFive(5));
// !Undefined Value returned

function addFive() {
  sum += 5; // Not returning anything so the output will be undefined
}

// !Assignment with a Returned Value

var changed = 0;
function change(num) {
  return (num + 5) / 6;
}

changed = change(10);
console.log(changed);

var process = 0;

function processArg(arr) {
  var count = 0;
  for (i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
}

console.log(processArg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// !Stand in Line

function nextInLine(arr, item) {
  arr.push(item);

  var newArray = arr;

  // if (arr.length > 5 && item > arr.length - 1) {
  //   arr.shift();
  // }
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before : " + JSON.stringify(testArr));
console.log("Current Serial is : " + nextInLine(testArr, 6));
console.log("After : " + JSON.stringify(testArr));

// !Boolean Values
// !If Statements
// !Equality Operators

function testStrict(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(12);
// Here come the double == and  === , The difference is , == doesnot care about the type of it just compare the value . but === care about the tpeof .
// !And / Or Operators

function compareEquality(a, b) {
  if (a == b) {
    return "Equal";
  }

  return "Not Equal";
}

console.log(compareEquality(10, "10"));
// !Else Statements
// !Else If Statements
// !Logical Order in If Else Statements
// !Chaining If Else Statements
// !Golf Code

var names = [
  "Hole-in-one !",
  "Eagle",
  "Birdie",
  "par",
  "Bogey",
  "Double Bogey",
  "Go Home !",
];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  } else {
    return "Out Of list";
  }
}

console.log(golfScore(5, 10));

// !switch statement1:32:14

function caseInSwitch(val) {
  var answer = " ";

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;

    default:
      answer = "Not in the database";
      break;
  }

  return answer;
}

console.log(caseInSwitch(5));

// !default option in switch statements 1:35:46

// !multiple identical options in switch statements 1:37:25

function sequentialSizes(val) {
  var answer = " ";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Medium";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

console.log(sequentialSizes(5));

// !replacing if else chins with switch 1:39:20
// !returning boolean value form functions1:41:11
// !returning an early pattern from functions1:42:20
// !counting cards 1:43:38

var count = 0;

function cc(card) {
  switch (card) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    case 10:
    case "K":
    case "Q":
    case "J":
    case "A":
      count--;
      break;
  }
  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }

  return count + " " + holdbet;
}

cc(2);
cc("K");
cc(10);
cc("K");
cc("A");
console.log(cc(4));

// !build javascript objects1:49:12
var ourDog = {
  names: "Camper",
  legs: 4,
  tails: 1,
  friends: ["Everything!"],
};

for (var i in ourDog) {
  console.log(i, ourDog[i]);
}

console.log(ourDog["name"]);

var keys = Object.keys(ourDog);

var value = Object.values(ourDog);
console.log(keys);
console.log(value);

var myDog = {
  name: "Coder",
  legs: 4,
  eyes: 2,
  friend: ["Coffee with Coder"],
};

myDog.name = "Quincy"; //change name with dot notation

console.log(myDog);

myDog.bark = "bow-wow"; // Add properties in object or  [ ] can also be used.

console.log(myDog);

// !accessing object properties with dot notation1:50:47
// !accessing object properties with bracket notation1:51:34
// !accessing object properties with variables1:52:48
// !updating object properties 1:53:36
// !add new property to an object 1:54:31
// !delete properties form an object1:55:19

delete myDog.eyes;
console.log(myDog);

// !using objects for lookups 1:55:55 -------------------------------

function phoneticLookup(val) {
  var result = " ";

  var lookUp = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = lookUp[val];

  return result;
}

console.log(phoneticLookup("foxtrot"));
// !testing objects for properties 1:57:46 -----------------------------------
var myObj = {
  gift: "Pony",
  pet: "kitten",
  bed: "sleigh",
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(checkObj("gift"));
console.log(checkObj(""));
console.log(checkObj("gift"));

// !manipulating complex objects1:59:15 ----------------------------

let myMysic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    format: ["CD", "8T", "LP"],
    golf: true,
  },
  // Add Record
  {
    artist: "Beau Carnes",
    title: "Cerial Man",
    release_year: 2003,
    format: ["Youtube Video"],
  },
];

console.log(myMysic[1].format);
// !accessing nested objects 2:01:03 -------------------------------------

var myStorage = {
  car: {
    inside: {
      glove_box: "maps",
      passenger_seat: "crumbs",
    },
    outside: {
      truck: "Jack",
    },
  },
};

var gloveBoxContents = myStorage.car.inside["glove_box"];

console.log(gloveBoxContents);
// !accessing nested arrays 2:01:52 ---------------------------------------

var myplants = [
  {
    type: "flower",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fit", "pine", "brich"],
  },
];

var result = myplants[1].list[1];

console.log(result);

// !record collection 2:03:05 ----------------------------------------------
console.log("====================================================");
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    ablum: "1999",
    artist: "prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "Abba Gold",
  },
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}
console.log(collection);
console.log(updateRecords(1245, "album", "morning"));

console.log("====================================================");

// !iterate with while oop 2:10:15

var i = 0;
var array = [];
while (i <= 4) {
  array.push(i);
  i++;
}
console.log(array);
// !iterate with for loops 2:11:34

var ourArray = [];

for (i = 0; i <= 10; i++) {
  ourArray.push(i);
}
console.log(ourArray);
// !iterate odd numbers with a for loop 2:13:56
// !count backwards with a for loop2:15:29
// !iterative through an array with for loop 2:17:08
// !nesting for loops 2:19:43

function multiplyAll(arr) {
  var product = 1;

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
arr = [
  [1, 2],
  [3, 4],
  [5, 6, 7],
];
console.log(arr[0][1]);

console.log(product);

// !nesting with do..while loops 2:22:45

var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);

console.log(i, myArray);
// !profile lookup 2:24:12
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// var newContacts = [];

// for (var i in contacts) {
//   console.log(contacts[i]);

//   if (contacts[i].firstName === "Kristian") {
//     result = contacts[i].lastName;
//   }
// }

// console.log(newContacts);
// console.log(result);

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (var i in contacts) {
    // console.log(contacts[i]);

    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No Such Peoperty";
    }
  }
  // Only change code above this line
  return "No Such Contact";
}

let answer1 = lookUpProfile("Akira", "likes");
let answer2 = lookUpProfile("Kristian", "number");
let answer3 = lookUpProfile("Sherlock", "lastName");
let answer4 = lookUpProfile("Harry", "likes");
let answer5 = lookUpProfile("Bob", "number");
// let answer2;
// let answer2;
console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);
console.log(answer5);
// !generate random fractions 2:28:18
// !generate random whole numbers 2:28:55
// !generate random whole numbers within a range 2:30:24
// !use the parseInt function 2:31:47
// !use the parseInt function with a radix 2:32:37
// !use the conditional(ternary) operator 2:33:29
// !use multiple conditional (ternary)operators 2:34:58
// !difference between the var and let keywords2:36:58
// !compare scopes of the var and let keywords2:39:05
// !declare a read-only variable with the const keyword2:41:35
// !mutate an array declared with const 2:43:41
// !prevent object mutation 2:44:53
// !use arrow function to write concise anonymous functions 2:47:17
// !write arrow functions with parameters 2:48:23
// !write higher order arrow functions2:49:26
// !write higher order arrow functions 2:53:05
// !use the spread operator to evaluate arrays In-Place 2:55:33
// !use destruction in assignment to assign variables from objects 2:57:18
// !destructuring assignment with nested objects 3:00:17
// !use destructuring assignment to assign variables from arrays 3:01:54
// !use destructuring assignment with the rest operator 3:03:42
// !create string using template literals 3:06:39
// !write concise object literal declarations using simple fields 3:10:42
// !write concise declarative functions 3:12:24
// !use class syntax to define a constructor function 3:12:59
// !use getters and setters to control access to an object 3:15:10
// !understanding the differences between import and require 3:20:25
// !use export to reuse a code block 3:22:33
// !use * to import everything from a file 3:23:40
// !create an export fallback with export default 3:24:50
// !import a default export 3:25:25
// !Outro  3:26:18
