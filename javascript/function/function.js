// function
// collection of statements
function my(x, y) {
  return x + y;
}
console.log(my(10, 10));

// function constructor
var fn = new Function("a", "b", "return a+b");
console.log(fn(10, 10));

//invoked function
(function() {
  console.log("Self invoked function");
})();

//arrow function
var myFunction = (x, y) => x * y;
console.log(myFunction(100, 100));

// this keyword
var object = {
  firstName: "Govardhan",
  secondName: "Aaleswara",
  age: "22",
  fullName: function() {
    return this.firstName + " " + this.secondName;
  }
};
console.log(object.fullName());

function mine(a, b) {
  this.firstName = a;
  this.secondName = b;
}

var mineTo = new mine("Govardhan", "Aaleswara");
console.log(mineTo.firstName);

// call function
var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
var person1 = { firstName: "Govardhan", lastName: "Ab" };
var person2 = { firstName: "GOVARDHAN", lastName: "AALESWARA" };
console.log(person.fullName.call(person2));

var mean = {
  details: function(c, d) {
    return this.a + " " + this.b + " " + c + " " + d;
  }
};
var mean1 = {
  a: "Mongo Db",
  b: "Express Js"
};

console.log(mean.details.call(mean1, "Angular", "Node js"));

// apply method
//The call() method takes arguments separately.
//The apply() method takes arguments as an array

var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
var person1 = { firstName: "Govardhan", lastName: "Ab" };
var person2 = { firstName: "GOVARDHAN", lastName: "AALESWARA" };
console.log(person.fullName.apply(person1));

var mean = {
  details: function(c, d) {
    return this.a + " " + this.b + " " + c + " " + d;
  }
};
var mean1 = {
  a: "Mongo Db",
  b: "Express Js"
};

console.log(mean.details.apply(mean1, ["Angular", "Node js"]));

//closures
// whenever the fn hold the own variable value and parent variable value and
// global value also that is called closures.

// nested function
function add() {
  var x = 0;
  function plus() {
    x += 1;
  }
  plus();
  return x;
}
console.log(add());
