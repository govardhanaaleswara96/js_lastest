//1.startsWith
// return boolean check it starts string (it accept starting values)
var str = "Mongo Db Angular Express Js Node Js";
console.log(str.startsWith("Mongo"));
console.log(str.startsWith("Db", 6));
//2.endsWith
// return boolean check it end string (it accept end values)
console.log(str.endsWith("Js"));
console.log(str.endsWith("Node", 32));

//3.includes
// return boolean check its include or not
console.log(str.includes("Js"));

//4.match
// return the character based on the give matching string
// g - for global search
// i -case sensitive
console.log(str.match(/js/gi));

//5.replace
// return the string of replace string
console.log(str.replace(/js/gi, "Javascript"));

//6.lowerCase
// return lower to upper and upper to lower
console.log(str.toLowerCase());
console.log(str.toUpperCase());

//7.trim
// remove the white space both side of the strings
var st = " javascript ";
console.log(st);
console.log(st.trim());

//8.concat
//concate  two strings
var str = "Mean stands ";
var str1 = "Mongo Db Express js Angular Node Js";
console.log(str.concat(str1));

//9.value of
// return the primitive values of the string
var newString = new String("Mean");
var Str = "Mean";
console.log(newString);
console.log(newString.valueOf());

//10.charCodeAt
// return unicode based on the index values
var str = "Mean";
console.log(str.charCodeAt(0));

//11.chartAt
// return character based on the index values
console.log(str.charAt(2));

//12.fromCharCode
// return character based on the unicode value
console.log(String.fromCharCode(77));

//13.repeat
// return string based  repeat values
var str = "Mean";
console.log(str.repeat(5));

//14.split
// return the string with split
var str = "Mongo Db Express Js Angular Node Js";
console.log(str.split(" "));
console.log(str.split(" ", 3));
console.log(str.split("o"));

//15.slice
// return the string slice based on the index values
console.log(str.slice(6, 8));
console.log(str.slice(6));
console.log(str.slice(-1));

//16.substr
// return the string based on the index values and length of the string
var str = "Mongo Db Express Js Angular Node Js";
console.log(str.substr(6, 5));
console.log(str.substr(6));
console.log(str.substr(-1));

//17.substring
// it return the string based on the index value(end,start)
var str = "Mongo Db Express Js Angular Node Js";
console.log(str.substring(5, 0));
console.log(str.substring(6));

//18.indexOf
// return the index values of given string first character
var str = "Mongo Db Express Js Angular Node Js";
console.log(str.indexOf("J"));
//19.lastIndexOf
// return the index value of given string last character
console.log(str.lastIndexOf("J"));

//20.localeCompare
var s1 = "MEAN";
var s2 = "MEAN";
console.log(s1.localeCompare(s2));

//21.search
var str = "MEAN";
console.log(str.search("N"));
