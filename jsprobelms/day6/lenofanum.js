// find the length of a number 

let num=2535414545637483
length=0
while(num!=0){
    num%10
    num=Math.floor(num/10)
    length++
}
console.log(length);


// revers3e a number

let num1=2535414545637483
rev=0
while(num1!=0){
    last=num1%10
    rev=rev*10+last
    num1=Math.floor(num1/10)
}
console.log(rev);
