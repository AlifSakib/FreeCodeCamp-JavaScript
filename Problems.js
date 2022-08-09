// !feetToInch
function feetToInch(feet) {
  return feet * 12;
}

console.log(feetToInch(12.5));

// !centimeterToMeter;

function centimeterToMeter(cm) {
  return cm / 100;
}

console.log(centimeterToMeter(12.5));

// !paperRequirements

function paperRequirements(b1, b2, b3) {
  let forFirstBook = 100;
  let forSecoundBook = 200;
  let forThirdBook = 300;

  let firstBookTotalPages = b1 * forFirstBook;
  let secoundBookTotalPages = b2 * forSecoundBook;
  let thirdBookTotalPages = b3 * forThirdBook;

  total = firstBookTotalPages + secoundBookTotalPages + thirdBookTotalPages;

  return total;
}

console.log(paperRequirements(10, 20, 30));

//! finding biggest Name from an Aray.

function bestFriend(nameList) {
  compareName = nameList[0];
  result = "";
  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i].length > compareName.length) {
      result = nameList[i];
    }
  }
  return result;
}

let ans = bestFriend(["Amber", "Joly", "Gorgeous", "Simba", "Alex Mortal"]);
console.log("My Best Friend is " + ans);

//! finding positive number untill there is a negative number

function findPositiveNumber(numberList) {
  let positiveNumbers = [];
  for (i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
      positiveNumbers.push(numberList[i]);
    } else {
      break;
    }
  }
  return positiveNumbers;
}

let input = findPositiveNumber([1, 2, -8, 5, 7, 0, -1, -8, -9, -5]);
console.log(input);
