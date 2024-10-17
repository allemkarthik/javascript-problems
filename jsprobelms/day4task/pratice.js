// max number and min number

let a=100;
let b=20;

min=0
max=0

if (a>b){
    max=a;
    min=b
}
else{
    max=b;
    min=a
}
console.log(max,min);

// nested loop tabels program  5 table upto 20 multiples
for (i=1;i<=5;i++){
    for (j=1;j<=20;j++){
        console.log(i+"*"+j+"="+i*j);
        
    }
    console.log(i,"table is completed");
    
}

// prime number

num=153
fact=0

for (i=2;i<num;i++){
    if(num%i==0){
        fact+=1
        console.log("not prime");
        break;
        

    }
}
if(fact==0){
    console.log("prime number");
    
}

// prime numbers between 1 to 100 and count no of prime numbers
primenum=0
for(i=1;i<=100;i++){
    fact=0
    for(j=2;j<i;j++){
        if(i%j==0){
            fact++
            break;
        }
    }
    if(fact==0){
        console.log(i,"is prime");
        primenum++
        
    }
}
console.log(primenum);

//find next prime number
num=112
next=0

while(next<1){
    num=num+1
    fact=0
    for (i=2;i<num;i++){
        if(num%i==0){
            fact++;
            break;
        }
    }
    if(fact==0){
        console.log(num,"is next prime number");
        next++
        
    }
}



