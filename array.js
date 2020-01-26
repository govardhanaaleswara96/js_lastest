// constructor
var arr = [1, 2, 3, 4, 5];
var num = 1;
var str = "Javascript";

console.log(arr.constructor);
console.log(num.constructor);
console.log(str.constructor);

// length
console.log(arr.length);

var arr1 = ["HTML", "CSS", "JS"];
//prototype
Array.prototype.captal = function() {
  var i;
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toLowerCase();
  }
};

arr1.captal();
console.log(arr1);

//1.concat
// i/p - array o/p - array
var a = [1, 2, 3, 4, 5];
var b = [6, 7, 8, 9, 10];
console.log(a.concat(b));

//2.copyWithIn
// i/p - array o / p - array
var c = ["html", "css", "js", "bootstrap"];
console.log(c.copyWithin(2, 0));

//3.entries
// i /p - array o/p - array
var d = ["angular", "node js", "mongo db", "express js"];
var e = d.entries();
for (x of e) console.log(x);

// 4.every
// i/p - array o/p - boolean
var f = [10, 20, 30, 40];

const everyMethod = currentValue => currentValue > 5;

console.log(f.every(everyMethod));

//5.fill
// i/p  - array o/p - array
var g = [1, 2, 3, 4, 5, 6];
console.log(g.fill("JAVASCRIPT"));

//6.filter
// i /p - array o/p - array
var f = [10, 20, 30, 40];

const filterMethod = currentValue => currentValue > 30;

console.log(f.filter(filterMethod));

//7.find
// i/p - array o/p - number
const findMethod = currentValue => currentValue > 10;
console.log(f.find(findMethod));

//8.findIndex
// i/p - array o/p - number
var findIndexMethod = i => i > 30;
console.log(f.findIndex(findIndexMethod));

//9.forEach
// i/p - array o/p - number
var forEachMethod = f.forEach(ele => {
  console.log(ele);
});

// 10.from
// i./p - string o/p - array
var i = Array.from("MEAN");
console.log(i);

//11.includes
// i/p - array o/p - boolean
var j = ["Full Stack", "Mean Stack", "Mern Stack", "Mean Stack"];
console.log(j.includes("Mean Stack"));

//12.indexOf
// i/p - string o/p - number
console.log(j.indexOf("Mern Stack"));

//13.lastIndexOf
// i/p -string o/p - number
console.log(j.lastIndexOf("Mean Stack"));

// 14.isArray
//i/p  - array o/p - boolean
console.log(Array.isArray([1, 2, 3, 4]));

//15.join
// i/p - array o/p - string
var k = ["M", "E", "A", "N"];
console.log(k.join());

// 16. keys
// i/p - array o/p - number
var key = k.keys();
for (x of key) console.log(x);

//17.map
// i/p - array o/p -array
var l = ["html", "html", "css", "js", "js"];
var array = l.map((a, b) => {
  return l.indexOf(a) == b;
});
console.log(array);

//18.pop
// o/p - array
var m = ["Angular", "Express Js", "Mongo Db", "Node Js"];
console.log(m.pop());
//19.push
// i/p - string o/p - array
var pushMethod = m.push("REACT");
console.log(m);
//20.unsift
// i/p - nothing o/p -array
var unShift = m.unshift("PWA");
console.log(m);
//21.shift
// i/p - array o/p - string
console.log(m.shift());

//22.reduce
// i/p - array o/p -number
var n = ["10", 10, 10, 10];
var reduceMethod = (a, b) => {
  return a + b;
};
console.log(n.reduce(reduceMethod));

//22.reduceRight
// i/p - array o/p -number
var n = ["10", 10, 10, 10];
var reduceMethod = (a, b) => {
  return a + b;
};
console.log(n.reduceRight(reduceMethod));

//23.reverse
//i/p - array o/p - array
console.log(n.reverse());

//24.sort
// i/p -array o/p -array
var o = [10, 20, 30, 40, 50];
console.log(o.reverse());

//25.some
// i /p -array o/p - boolean
var someMethod = a => a > 40;
console.log(o.some(someMethod));

//26.slice
// i/p - array o/p - array
var o = [10, 20, 30, 40, 50];
console.log(o.slice(0, 3));
//27.slice
// i/p - array o/p - array
console.log(o.splice(0, 3));

// 28.toString
var o = [10, 20, 30, 40, 50];
console.log(o.toString());

// 29.valueOf
var p = [{ name: "govardhan" }, { age: 22 }];
console.log(p.valueOf());
