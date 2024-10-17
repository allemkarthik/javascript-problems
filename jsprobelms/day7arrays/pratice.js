// array pratice
// exmaple push method
// push:it will add element in the last index

let arr = [2153, 365, 254];

let ele = "karthik";
arr.push(ele);
console.log(arr);

// push method implementation
function pushh() {
  let arr = [365, 354, 3542, 635];
  let ele = "sai";
  last = arr.length;
  arr[last] = ele;
  console.log(arr);
}
pushh();

// pop method: it will remove the last element
let arr2 = [25, 5356, 5, 5, 8752];
arr2.pop();
console.log(arr2);
// pop method implementation
function opp(arr) {
  if (arr.length > 0) {
    arr.length = arr.length - 1;
    console.log(arr);
  } else {
    arr = [];
  }
}
opp([25, 246, 7, 5424, 757, 42]);
