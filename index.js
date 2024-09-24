//basic function
function myFunction() {
  console.log("Hello world");
}

//function with parametr
function greet(name) {
  console.log("Hello, " + name + "!");
}

//return values
function add(a, b) {
  return a + b;
}
let sum = add(7, 7);

//single parametr
function square(num) {
  return num * num;
}

let number = square(4);

//multi parametr
function calArea(len, wid) {
  return len * wid;
}

// console.log(calArea(4, 5));

//anonymous Функцуудыг хувьсагчдад бас хадгалах боломжтой гэдгийг тайлбарла.
//Эдгээрийг функцын илэрхийлэл эсвэл нэргүй функц гэж нэрлэдэг .

let greets = function (name) {
  return "Hello, " + name;
};

//ES6

const essix = (a, b) => a + b;

var myFunction2 = () => {
  console.log("Arrow function");
};

// // Traditional function
// function add(a, b) {
//   return a + b;
// }

// // Arrow function (ES6)
// const add = (a, b) => a + b;
