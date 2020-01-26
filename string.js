// 1.charAt
// return the char based on index
// i/p - number o/p -string
var str = "javascript";
console.log(str.charAt(3));

//2.charCodeAt
// return unicode based on the index
console.log(str.charCodeAt(3));

//3.concat
// concat the strings
// i/p - string o/p -string
var str1 = " abbr of JS";
console.log(str.concat(str1));

//4.startsWith
// return boolean based on char
// i/p - char o/p -boolean
var str2 = "javascript is scripting language";
console.log(str2.startsWith("j"));

//5.endsWith
// return boolean based on char
// i/p - char o/p - boolean
console.log(str2.endsWith("e"));

//6.fromCharCode
// return the char based on unicode value
// i/p - number o/p - string
console.log(String.fromCharCode(97));

//7.includes
// return boolean based on the char
// i/p - char o/p -boolean
console.log(str2.includes("j"));

//8.indexOf
// return index based on the char
// i/p -string o/p - number
console.log(str2.indexOf("i"));
//9.lastIndexOf
// i/p -string o/p - number
console.log(str2.lastIndexOf("i"));

//10.localeCompare
// return number based on char
// i/p  - string o/p - number
var a = "javascript";
var b = "javascript";
console.log(a.localeCompare(b));

//11.match
// return string based on char
//i/p - str o/p -str
var c = "javascript i s scripting language";
var d = a.match(/s/g);
console.log(d);

//12.repeat,replace,toLowerCase,toupperCase,valueOf,trim,toString,split
// i/p - string o/p -string
var strR = "JS Is Stands For Javascript";
console.log(strR.repeat(2));
console.log(strR.toLowerCase());
console.log(strR.toUpperCase());
var stringReplace = "Node js server scripting language";
console.log(stringReplace.replace("scripting", "Side"));
console.log(stringReplace.valueOf());
var trimMethod = " javascript ";
console.log(trimMethod);
console.log(trimMethod.trim());
var num = 10;
var strNum = num.toString();
console.log(typeof strNum);
console.log(stringReplace.split());

//13.slice
// return char based on index values
//i/p -number o/p string
var sliceMethod = "javascript";
console.log(sliceMethod.slice(0, 4));
console.log(sliceMethod.substr(0, 4));
console.log(sliceMethod.substr(0, 4));
