var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
var arr = a.map(val => {
  var m = val.map(ele => {
    // console.log(ele);
    return ele * 2;
  });
  return m;
});

console.log(arr);
