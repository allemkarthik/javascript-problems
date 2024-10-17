// find the minimum value of an array
let arr = [2, 15, 666, 1, 65, 66, 62, 8];
min = arr[0];
for (i of arr) {
  if (i < min) {
    min = i;
  }
}
console.log(min);

// find the maximum value of an array
let arr2 = [24, 484, 54, 4, 453, 453, 45, 453, 435, 524354];
max = arr2[0];
for (i of arr2) {
  if (i > max) {
    max = i;
  }
}
console.log(max);

// find sum of min and max in a given array
let arr3 = [24, 484, 54, 4, 453, 453, 45, 453, 435, 524354];
max = arr[0];
min = arr[0];
for (i of arr3) {
  if (i < min) {
    min = i;
  } else if (i > max) {
    max = i;
  }
}
console.log(min + max);
