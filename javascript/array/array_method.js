//1.concat method
// join strings
var a = [1, 2, 3, 4, 5];
var b = [6, 7, 8, 9, 10];
var c = a.concat(b);
//console.log(c);

//2.copyWithin
// copy array elements into any position of array (over righting existing array)
var x = [1, 2, 3, 4, 5];
var y = x.copyWithin(4, 0);
//console.log(y);

//3.entries
// return array iterator object with key/value paires
var z = ["js", "node js", "angular", "react js", "mongo db"];
var entry = z.entries();
//console.log(entry);
//for (x of entry) console.log(x);

//4.every
// check every elements of array return boolean
var boo = [true, false, true, true];
function my(x) {
  return x == true;
}
var checkEvery = boo.every(my);
//console.log(checkEvery);

//5.fill
// fill the arrays using static elements
var one = ["html", "css", "js", "bootstrap"];
var two = one.fill("javascript");
//console.log(two);

//6.filter
// used for filter array method
var f = [true, false, true, false];
f.filter(x => {
  if (x == true) {
    //console.log(x);
  }
});

//7.find
// return the firt element pass the condition
var F = [10, 20, 5, 15, 25, 8];
function my1(x) {
  return x < 8;
}
//console.log(F.find(my1));

//8.findIndex
// return the index of the given array element
var a = ["html", "css", "javascript", "bootstrap"];
var b = a.findIndex(x => x == "javascript");
//console.log(b);

//9.foreach
//return all elements in array like forloop
var arr = ["M", "E", "A", "N"];
arr.forEach(x => {
  //console.log(x);
});

// 10.from
// create string from array
var arr = Array.from("MEAN");
//console.log(arr);

//11.includes
// return boolean check includes or not in array
var arr1 = ["mongo db", "express js", "angular", "node js"];
//console.log(arr1.includes("node js"));

//12.indexOf
// return index of given element first position
var arr2 = ["M", "E", "A", "N"];
//console.log(arr2.indexOf("A"));

//13.lastIndexOf
// return the index of given element last position
var arr3 = ["M", "E", "A", "N", "A"];
//console.log(arr3.lastIndexOf("A"));

//14.isArray
//return boolean  check array or not
var arr4 = ["M", "E", "A", "N"];
//console.log(Array.isArray(arr4));

//15.join
// convert array into string
var a = ["M", "E", "A", "N"];
//console.log(a.join());

//16.keys
// return key values of array elements
var arr = ["M", "E", "A", "N"];
var Key = arr.keys();
//for (x of Key) console.log(x);

//17.map
// map method used for every operation for every elemts
var x = [
  [1, 2, 3],
  [4, 5, 6]
];
var Vals = x.map(ele => {
  var m = ele.map(e => {
    return e * 10;
  });
  return m;
});

//console.log(Vals);

//18.pop
// remove last element in array
var x = ["M", "E", "A", "N"];
var xPop = x.pop();
//console.log(xPop);
//19.shift
// remove first element in array
var xShift = x.shift();
//console.log(xShift);
//20.push
// add last element in array
var xPush = x.push("N");
//console.log(x);
//21.unshift
// add first  element  in array
var xUnshift = x.unshift("M");
//console.log(x);

//22.reduce
// convert array into single value
var arr = [10, 20, 30, 40, 50];
function my(a, b) {
  return a + b;
}
//console.log(arr.reduce(my));

//23.reduceRight
// convert array into single value but it work end to start
var arr = [10, 200, 30, 40, 50];
function my(a, b) {
  return a + b;
}
//console.log(arr.reduceRight(my));
//24.reverse
// return array element reverse
//console.log(arr.reverse());
//25.sort
// return sorted arrays
var a = ["M", "E", "A", "N"];
var Sort = a.sort();
//console.log(a);
//26.some
// return boolean after check the condition
var arr = [10, 5, 3, 20];
function mySome(x) {
  return x > 5;
}
//console.log(arr.some(mySome));
//27.toString
// convert array to string same as join
var str = ["M", "E", "A", "N"];
//console.log(str.toString());

//28.slice
// return slice array based on index values.it accept -ve values also.
var str = ["M", "E", "A", "N"];
console.log(str.slice(-3, -1));
//29.splice
// return slice array based on index values .it won't accept -ve values.
console.log(str.splice(2, 1, "js"));
