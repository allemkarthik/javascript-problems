// fibonaaci series
let a=0
let b=1

for (i=1;i<=10;i++){
    console.log(a);
    c=a+b;
    a=b
    b=c
}
console.log('sum of 10 fibnocci numbers');

// find sum of given fiboannci number
function fib(n){
    if(n==0){
        return 0
    }
    else if(n==1){
        return 1
    }
    else{
        return fib(n-1)+fib(n-2)
    }
}
console.log(fib(10));


// check whether the given number is includes in a series

let a1=0
let b1=1
inc=false
num=35
for (j=1;j<=20;j++){
    console.log(a1);
    c1=a1+b1
    a1=b1
    b1=c1

    if(a1==num){
        inc=true
        
    } 
}
if(inc==true){
    console.log(num,"is includes in the series"); 
}
else{
    console.log(num,"is not includes in the series");
    
}


// print fibnoacci series upto 1000
let aa=0
let bb=1

for (i=1;i<=100;i++){
    console.log(aa);
    cc=aa+bb
    aa=bb
    bb=cc
    if(aa>=1000){
        break
    }

    

}
