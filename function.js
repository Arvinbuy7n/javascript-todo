//basic function

function myFunction() {
  console.log("Hello world");
}

myFunction();

let data = () => {};

//parametr

function myFunction(name) {
  return "Hello " + name + "!";
}

function square(num) {
  return num * num;
}

let result = square(7, 7);
console.log(result);

//anonymous

let greet = function (name) {
  return "Hello " + name;
};

console.log(greet("tuesday"));

//arrow function

var arrowFunction = () => {
  console.log("Arrow function");
};

arrowFunction();
