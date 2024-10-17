// check whether the given number is armstorng or not
// let num=153
var a = (num) => {
  let num1 = num;
  let num2 = num;

  pow = 0;

  while (num !== 0) {
    num % 10;
    num = Math.floor(num / 10);
    pow++;
  }
  // console.log(pow);  got length and power of the given number

  let sum = 0;
  while (num1 !== 0) {
    last = num1 % 10;
    sum = sum + last ** pow;
    num1 = Math.floor(num1 / 10); //taken single digits and adding powers of a number
  }

  if (sum == num2) {
    console.log("armstrong");
  } else {
    console.log("not an armstrong");
  }
};
a(153);
