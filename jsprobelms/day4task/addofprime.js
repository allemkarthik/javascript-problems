// sum of 100 prime numbers
sum=0
for(i=1;i<=100;i++){
    fact=0
    for(j=2;j<i;j++){
        if(i%j==0){
            fact++
            break;

        }

    }
    if(fact==0){
        sum+=i
        
        
    }
}
console.log(sum,"is sum of 100 prime numbers");
