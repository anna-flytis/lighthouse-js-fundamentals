const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();


const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);