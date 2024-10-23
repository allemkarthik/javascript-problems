let arr = [
  [1, 2, 3, 40],
  [4, 5, 6, 90],
  [7, 8, 9, 44],
  [10, 11, 12, 77],
];

if (arr.length % 2 == 0) {
    mid_row = Math.floor(arr.length / 2);
    mid_row2 = [arr[mid_row - 1], arr[mid_row]];
  //   console.log(mid_row2)
  matrix = [];
  for (i = 0; i < mid_row2.length; i++) {
    emp = [];
    for (j = 1; j < mid_row2[i].length - 1; j++) {
      // console.log(mid_row2[i][j])

      emp.push(mid_row2[i][j]);
    }
    matrix.push(emp);
  }

  console.log(matrix, "this are middle elements");
} else {
  mid_row = Math.floor(arr.length / 2);
  mid_col = Math.floor(arr[mid_row].length / 2);
  console.log(arr[mid_row][mid_col]);
}
