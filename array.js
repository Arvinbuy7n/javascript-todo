//1. Шинээр зарлах

// Хоосон array зарлаж байна
var myArray = [];

// 3н элемэнттэй array зарлаж байна
var myArray = ["first", "second", "third"];

//2. Элемэнт рүү хандах

// Хамгийн эхний элемэнт рүү хандах
myArray[0];

// 4дахь элемэнтийн утгыг Hello болгоно
myArray[3] = "Hello";

// Length
// Array дахь элемэнтийн тоог авах.

var students = ["Болд", "Дорж", "Сувд"];
students.length;

//3. Methods

//push

var myArray = ["bear", "cat"];
myArray.push("dog");

//pop

var myArray = ["bear", "cat", "dog"];
myArray.pop();

function calculateTax(age) {
  if (age < 12) {
    return "5$";
  } else if (age < 18) {
    return "10$";
  } else if (age < 60) {
    return "20$";
  } else {
    return "15$";
  }
}

let result = calculateTax(17);

function purchaseSale(price) {
  if (price >= 100) {
    return "20%";
  } else if (price >= 50) {
    return "10%";
  } else {
    return "0";
  }
}

let results = purchaseSale(101);

// function classGrade(dun) {
//   if (dun >= 90) {
//     return "A";
//   } else if (dun >= 80) {
//     return "B";
//   } else if (dun >= 70) {
//     return "C";
//   } else if (dun > 60) {
//     return "D";
//   } else {
//     return "F";
//   }
// }

// console.log(classGrade(78));
