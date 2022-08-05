
// !Data Types
/* Data Types :
undefined, null, boolean, string, symbol, number and object
*/

var num1 = 4;

var num1 = 3; 22 //Now num will be 3

var ourName = "Oh-My-Posh"

const p = 3.1416; 

// !Initializing Variables / Assignment Operator :

var a = 9 ; //now a is 9 because be assigned 9 into a by using equal sign operator

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

myVar = myVar + 1; myVar++ ; myVar--;

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

var a = 3
var b = 17
var c = 12

a += 12
b += 9 
c += 7

// !compound assignment with augmented subtraction

a -= 12
b -= 9 
c -= 7

// !compound assignment with augmented multiplication

a *= 12
b *= 9 
c *= 7

// !compound assignment with augmented division

a /= 12
b /= 9 
c /= 7

// !declare string variables

var firstName = "Alif"
var lastName = 'Sakib'
var global = `Banglades ${firstName}` //backticks

// !escaping literal quotes in strings

var myStr = "I am a \"Single Qupte\" inside \"double quote\" . "

//Output : I am a "Single Qupte" inside "double quote" . 


// !quotinq strings with single quotes 22:43

var myStr = '<a herf="http://www.example.com" target="_blank">Link</a>'

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

var ourStr = "I come first "

ourStr += "I come Secound"


// !concatenating string with variables

var ourName = "Oh-My-Posh";

var outStr = `Hello , Our name is ${ourName} , How are ypu ?`

console.log(outStr)


// !appending variables to strings

var anAdjective = "Awesome"
var ourStr = "Ofs is "

ourStr += anAdjective

console.log(ourStr)

// !find a length of string 31:12

//Example 

var firstNameLength = 0;
var firstName = "Ada"

firstNameLength = firstName.length

//Setup 

var lastNameLength = 0;
var lastName = "Lovelace"

lastNameLength = lastName.length

// !bracket notation to find first character in string

var lastNameLength = 0;
var lastName = "Lovelace"

FirstLetterOfLirstName = lastName[0]

// !Understand String Immutability

//String index are immutable 

// !bracket notation to find Nth character in string34:24
// !bracket notation to find last character in string34:54

FirstLetterOfLirstName = lastName[lastName.length - 1]

console.log(FirstLetterOfLirstName)

// !word blanks 36:31

function wordBank(myNoun, myAdjective, myVerb, myAdverb ){

    var result = ""

    result +=`The ${myAdjective} ${myNoun} ${myVerb} to the store ${myAdverb}`
    return result
}

var fullWord = wordBank("dog", "big", "ran", "quickly");

console.log(fullWord)

// !Arrays

var ourArray = ["Jhon", "23"]

var myArray = ["Quincy", 1] 

// !Nest Arrays

var ourArray = [["The Universe", 42],["Everythig", 101010]]

var myArray = [["Bulls", 23], ["White Sox", 23]]
// !Access Array Data

var ourArray = [50,60,70]

var ourData = ourArray[0]
// !Modify Array Data

var ourArray = [50,60,70]

ourArray[1] = 45;


// !Access Multi-Dimensional Arrays

var myArray = [[1,2,3], [4,5,6], [7,8,9] ,[[10,11,12] ,13 ,14]];

var myData = myArray[0][0];

// !push()
var ourArray = ["Stimpson", "J", "Cat"]

ourArray.push(["Happy", "Joy"]) //[ 'Stimpson', 'J', 'Cat', [ 'Happy', 'Joy' ] ]

//Setup

var myArray = [["jhon", 23], ["cat", 2]]

myArray.push(["dog",3])

// !pop()

var ourArray = [1,2,3]

var removedFromOurArray = ourArray.pop();

//Setup 

var myArray = [["Jhon", 23], ["Cat", 2]]

var removedFromMyArray = myArray.pop()

console.log(myArray)

// !shift()

var ourArray = ["Stimpson", "J", ["Cat"]]

var removeFromOurArray = ourArray.shift();

console.log(ourArray)
console.log(removeFromOurArray)

var myArray = [["Jhon", 23], ["Cat", 2]]

var removeFromMyArray = myArray.shift();

console.log(removeFromMyArray)

// !unshift()

var ourArray = ["Stimpson", "J", "Cat"]

ourArray.unshift(["Happy", 5])

console.log(ourArray)

// !Shopping List

var myList = [["cereal", 3], ["milk", 2], ["Bananas", 3], ["Juice", 4], ["egs", 10]]

// !Write Reusable with Functions

function ourReusableFunction(){

    console.log("Heyya, World")
}

ourReusableFunction();


function reusableFunction(){

    console.log("Hello World")
}

reusableFunction();

// !Arguments

function ourFunctionWithArgs(a, b){  // a and b is perameter .
    console.log(a - b)
}

ourFunctionWithArgs(10,5); //Those are the arguments .

// !Global Scope

var myGolobal = 10;

function fun1(){

    oppsGlobal = 5; //if we dont use var keyword then this variable can be use as a global scope .

}

function fun2(){

    var outPut = " "

    if (typeof myGolobal != "undefined"){

        outPut += "myGlobal is : " + myGolobal;
    }

    if (typeof oppsGlobal != "undefined"){

        outPut += " oppsGlobal is : " + oppsGlobal;
    }

    console.log(outPut);
}

fun1();
fun2();

// !Local Scope



// !Global vs Local Scope in Functions
// !Return a Value from a Function
// !Undefined Value returned
// !Assignment with a Returned Value
// !Stand in Line
// !Boolean Values
// !If Statements
// !Equality Operators
// !And / Or Operators
// !Else Statements
// !Else If Statements
// !Logical Order in If Else Statements
// !Chaining If Else Statements
// !Golf Code