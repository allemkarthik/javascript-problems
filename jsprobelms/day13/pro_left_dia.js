// find the product of a left diagonal elemnts
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
pro = 1;
for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr[i].length; j++) {
    if (i === j) {
      console.log(arr[i][j]);
      pro = pro * arr[i][j];
    }
  }
}
console.log(pro,"product of a left diagonal");
