// 1.break
var txt;
function my() {
  for (i = 0; i < 5; i++) {
    if (i == 3) {
      break;
    }
    txt += `the number is ${i} `;
  }
}
my();
//console.log(txt);

//2.class

class Bike {
  constructor(type) {
    this.type = type;
  }
  summary() {
    return `the bike name is ${this.type}`;
  }
}
var dukeBike = new Bike("KTM");
//console.log(dukeBike.summary());

//3.continue
var txt;
function my() {
  for (i = 0; i <= 5; i++) {
    if (i == 3) {
      continue;
    }
    txt += `the number is ${i} `;
  }
}
my();
//console.log(txt);

//4.debugger
var x = 10 * 10;
debugger;
//console.log(x);

//5.do while
var a;
var b = 0;
do {
  a += ` The List Of Number Is ${b} `;
  b++;
} while (b < 10);

//console.log(a);

//4.for loop
var list;
var cars = ["html", "css", "js", "bootstrap"];
for (i = 0; i < cars.length; i++) {
  list += cars[i];
}
//console.log(list);

var c;
var d = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < d.length; i++) {
  if (d[i] == 4) {
    continue;
  }
  c += ` the number is ${i} `;
}
// console.log(c);

//5.for in and for of
var g = ["angular", "mongo db", "node js", "express js"];
//for (h in g) console.log(h);
//for (k of g) console.log(k);

//6.function
//7.if else

//8.while
// var l = [1,2,3,4,5,6];
var m;
var n = 0;
while (n < 5) {
  m += ` the while loop value is ${n} `;
  n++;
}
//console.log(m);

//9.return
function my(para) {
  return para;
}
// console.log(my("govardhan"));

//10.switch
var fruits = "apples";
var txt;
switch (fruits) {
  case "apples":
    txt = "i like apples";
    break;
  case "bananas":
    txt = "i like bananas";
    break;
  default:
    txt = "i don't like fruites";
}

//console.log(txt);

//11.throw
var o = 20;
try {
  if (o !== 10) throw "Condition is failed";
} catch (err) {
  console.log(err);
}

//12.try catch error
try {
  console.log("hello world");
} catch (err) {
  console.log(err);
}
