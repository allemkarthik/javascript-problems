// reverse a number without converting into string
num=1234574516
rev=0
while(num!=0){
    lastnum=num%10;
    rev=rev*10+lastnum;
    num=Math.floor(num/10)
}
console.log(rev);

