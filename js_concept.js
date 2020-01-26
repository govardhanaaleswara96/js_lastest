//class
class Car {
  constructor(brand) {
    this.carName = brand;
  }
}

var a = new Car("AUDI");
console.log(a.carName);

// extend class

class Book {
  constructor(name) {
    this.bookName = name;
  }
  prensent() {
    return `i have ${this.bookName} Book`;
  }
}

class Author extends Book {
  constructor(name, author) {
    super(name);
    this.author = author;
  }
  now() {
    return `${this.prensent()} and author of that book is ${this.author}`;
  }
}

var newBook = new Author("Mahabharat", "Veda Viyasa");
console.log(newBook.now());

// Error
try {
  consolsse.log("hiii");
} catch (err) {
  console.log(`${err.name}  ${err.message}`);
}

// global method
// isNaN - check Number or not
//2.encodedURI - encode the uri
//3.decodeURI - decode the encode uri
//4.encodeURIComponent - same as encodeuri
//5.decodeURIComponent - same as decodeuri
//6. eval - run script in code strings
//7.isFinite - check finite number or not
//8.parserFloat - parse into float
//9/parseInt - parse into integer
//10.unescape - convert escape string
//11.String - convert to string
// 1.escape
var str = "javascript is scripting language";
console.log(escape(str));

// json - javascript object notation
var myObj = { name: "John", age: 31, city: "New York" };
console.log(myObj);
console.log(JSON.stringify(myObj));
var obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');
console.log(obj);

//MATH
//1.abs - return exact number
var x = 10.15;
console.log(Math.abs(x));

//2.cbrt - return cube root  of given number
var y = 125;
console.log(Math.cbrt(y));
//3.ceil - return the up word number
//4.floor - return the down word number
var z = 1.5;
console.log(Math.ceil(z));
console.log(Math.floor(z));

//5.sqrt - return squre root of the number
var a = 81;
console.log(Math.sqrt(a));

//6.log - return log values,exp - return eX values

//7.max - return max number ,min - return min number ,pow - return to the x of power value

//8.trunc - return integer part
//9.round -  return the nearest integer
var b = 29.98;
console.log(Math.trunc(b));
console.log(Math.round(b));

//Numbers
//1.isFinite - check finite number or not
//2.isInteger - check integer or not
var a = 90;
var b = 99.9;
console.log(Number.isInteger(a));
console.log(Number.isInteger(b));
//3.isSafeInteger - checkSafeInteger or not
//4.toExponential - to convert exponential number
var c = 99.999999;
console.log(c.toExponential());
//5.toFixed - to fixed the number after decimal points
console.log(c.toFixed(2));
//4.toPrecision - to Precision number after number
var d = 9.99;
console.log(d.toPrecision(2));
//5.toString - convert to strings ,valueOf - return the primitive values

// operators
var a = 5;
// a++
a++;
console.log(a);
// ++a
++a;
console.log(a);
//console.log(++a);
// --a
--a;
console.log(a);
// a--
a--;
console.log(a);
// Ternary Operator
var age = 20;
age > 18 ? console.log("Your Adult") : console.log("Your Not Adult");

//logical operator
// 1.&& - and
var x = 10;
var y = 10;
if (x == y && x === y) {
  console.log("condition is true");
} else {
  console.log("condition  is not true");
}
//2.|| - or
var x = 20;
var y = "10";
if (x == y || x === y) {
  console.log("condition is true");
} else {
  console.log("condition  is not true");
}
//3.! - not
var x = 50;
var y = 40;
if (x !== y) {
  console.log("condition is Done");
} else {
  console.log("condtion is Not Done");
}
//4.typeOf - return type of variable
//5.delete operator
var Person = { name: "Govardhan", age: 22, dob: "08/03/1997" };
delete Person.dob;
console.log(Person);
//6.in operator,instanceof,void operator
var arr = ["html", "css", "js"];
for (x in arr) {
  console.log(x);
}
var a = arr instanceof Array;
var b = arr instanceof String;
console.log(a);
console.log(b);

//RegExp
var str = "https://www.naukri.com/";
var pattern = /naukri/gi;
var Match = str.match(pattern);
console.log(Match);

//
