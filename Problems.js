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

// !Prime Number

function checkPrime(number) {
  for (i = 0; i < number; i++) {
    if (number % i === 0) {
      return `${number} is not a prime number`;
    } else {
      return `${number} is a prime Number`;
    }
  }
}

console.log(checkPrime(0));

//! Secound Largest

arr = [10, 20, 60, 30, 55, 40, 50];

let first_largest = 0;
let secound_largest = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] > first_largest) {
    first_largest = arr[i];
  } else if (arr[i] > secound_largest && arr[i] != first_largest) {
    secound_largest = arr[i];
  }
}

console.log(first_largest);
console.log(secound_largest);

//! Wood Requirments

function woodCalculate(chair, table, bed) {
  const woodForChair = 3;
  const woodForTable = 10;
  const woodForBed = 30;

  let totalWoodForChair = chair * woodForChair;
  let totalWoodForTable = table * woodForTable;
  let totalWoodForBed = bed * woodForBed;

  let totalWoodForAll = totalWoodForBed + totalWoodForChair + totalWoodForTable;
  return `Total wood need to make all items is ${totalWoodForAll}`;
}

console.log(woodCalculate(0, 0, 1));

// !Cheapest Phone

const phone = [
  { name: "I-phone", camera: "32gb", price: 36000, color: "Black" },
  { name: "Samsung", camera: "32gb", price: 22000, color: "White" },
  { name: "Htc", camera: "32gb", price: 18000, color: "Blue" },
  { name: "Xiaomi", camera: "32gb", price: 20000, color: "White" },
  { name: "Nokia", camera: "32gb", price: 25000, color: "Red" },
];

function cheapestPhone(phoneList) {
  let lowestPrice = phoneList[0];
  for (let i = 0; i < phoneList.length; i++) {
    if (phoneList[i].price < lowestPrice.price) {
      lowestPrice = phoneList[i];
    }
  }
  return lowestPrice;
}

console.log(cheapestPhone(phone));

//!Total cost of the product in a shoping Cart

const shopingCart = [
  { product: "Shoe", price: 1200, quantity: 2 },
  { product: "Shirt", price: 2200, quantity: 1 },
  { product: "Pant", price: 1800, quantity: 2 },
  { product: "Belt", price: 1000, quantity: 1 },
  { product: "Watch", price: 800, quantity: 1 },
];

function totalCost(products) {
  let total = 0;

  for (i = 0; i < products.length; i++) {
    total += products[i].price * products[i].quantity;
  }

  return total;
}

const expense = totalCost(shopingCart);
console.log(expense);

//!Multi Layer Discount Price Calculation

//
function bookTicket(quantity) {
  let first100 = 100;
  let moreThan100 = 90;
  let moreThan200 = 70;

  if (quantity <= 100) {
    totalTicketPriceFor1st100 = quantity * first100;
    return totalTicketPriceFor1st100;
  } else if (quantity <= 200) {
    restPrice1 = (quantity - 100) * moreThan100;
    totalTicketPriceForMore100 = 100 * first100;
    totalofMoreThan100 = restPrice1 + totalTicketPriceForMore100;
    return totalofMoreThan100;
  } else {
    first100price = 100 * first100;
    secound100price = 100 * moreThan100;
    restOf200 = quantity - 200;
    restOf200Price = restOf200 * moreThan200;
    totalOfMoreThan200 = first100price + secound100price + restOf200Price;
    return totalOfMoreThan200;
  }
}

// !Simple Interest

/* Formula : A = P(1+rt)

A	=	final amount
P	=	initial principal balance
r	=	annual interest rate
t	=	time (in years) */

/* function simpleInterest(p, r, t) {
  let principalBalance = p;
  let annualInterestRate = r / 100;
  let time = t;

  let interestTime = annualInterestRate * time;
  let total = principalBalance * (1 + interestTime);

  return total;
}

console.log(simpleInterest(10000, 1.2, 1)); */

// !Complex Interest

/* Formula : CI = P( 1 + r/100)^nt - P */

function conpounfFormula(p, r, n, t) {
  let principalBalance = p;
  let annualInterestRate = r / 100;
  let time = t;
  let numberOfTimesPerYear = n;

  let TotalOfrn = annualInterestRate / numberOfTimesPerYear;
  let TotalOfnt = numberOfTimesPerYear * time;
  let totalofrnnt = Math.pow(1 + TotalOfrn, TotalOfnt);
  let MultiP = principalBalance * totalofrnnt;
  let result = (MultiP - principalBalance).toFixed(4);

  return result;
}

console.log(conpounfFormula(10000, 1.2, 3, 1));
