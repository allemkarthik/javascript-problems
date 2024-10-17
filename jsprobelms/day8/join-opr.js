// join operation
let arr = [1, 2, 35, 2, 3, 5];

console.log(arr.join("-"));
console.log(typeof arr);

// join operation implementation
let arr2 = [1, 2, 3, 465, 6, 8];
let sym = "*";
let res = [];

for (i = 0; i < arr2.length; i++) {
  if (arr2[i + 1] != undefined) {
    res = res + arr2[i] + sym;
  } else {
    res += arr2[i];
  }
}

result = Array(res);
console.log(result);

console.log(typeof result);
