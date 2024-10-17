// find the nearset prime number

num=190
num1=num
org=num
flag=0
nextprime=0
prevprime=0
while(flag<1){
    num=num+1
    fact=0
    for(i=2;i<num;i++){
        if(num%i==0){
            fact+=1
            break
        }
    }
    if(fact==0){
        nextprime=num
        flag++
    }
}
flag1=0
while(flag1<1){
    num1=num1-1
    count=0
    for (i =2;i<num1;i++){
        if(num1%i==0){
            count++
            break
        }
    }
    if(count==0){
        prevprime=num1
        flag1++
    }
}
console.log(prevprime,nextprime);

if(nextprime-org>org-prevprime){

    console.log(prevprime,"pev prime is nearest");
}
else{
    console.log(nextprime,"next prime is nearest");
    
}
