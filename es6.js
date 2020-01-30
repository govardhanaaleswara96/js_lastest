//spread operators

let arr = [10, 0, 100, 20, 200, 30, 500];
let min = Math.min(...arr);
let max = Math.max(...arr);
console.log(min);
console.log(max);

// destructing

let a = 100;
let b = 20;
let temp = a;

a = b;
b = temp;
[a, b] = [b, a];
console.log(a);
console.log(b);
