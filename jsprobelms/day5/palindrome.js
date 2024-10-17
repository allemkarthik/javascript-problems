// check whether the given number is palindrome or not
num = 2322;
num1 = num;
rev = 0;
while (num != 0) {
  last = num % 10;
  rev = rev * 10 + last;
  num = Math.floor(num / 10);
}
// console.log(rev);

if (rev == num1) {
  console.log(num1, "is a palindrome");
} else {
  console.log(num1, "is not a palindrome");
}

// check whether the given string is palindrome or not
a = "mom";
rev1 = "";
for (i = a.length - 1; i >= 0; i--) {
  rev1 += a[i];
}
console.log(rev1);
if (a == rev1) {
  console.log(a, "is a palindrome");
} else {
  console.log(a, "is not a palindrome");
}
