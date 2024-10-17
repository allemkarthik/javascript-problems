function primemissing() {
  // find the missing prime in an array
  let arr = [2,7];
  min = arr[0];
  max = arr[0];
  for (i of arr) {
    if (i < min) {
      min = i;
    }
    if (i > max) {
      max = i;
    }
  }
  // console.log(min,max);
  for (i = 1; i < max; i++) {
    fact = 0;
    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        fact++;
        break;
      }
    }
    if (fact == 0 && !arr.includes(i)) {
      console.log(i, "is the missing prime number");
    }
  }
}
primemissing();
