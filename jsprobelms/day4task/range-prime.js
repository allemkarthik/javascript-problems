// prime number between 1 to 10
 count=0
for(i=0;i<=10;i++){
    fact=0
    for(j=2;j<i;j++){
        if(i%j==0){
            fact++
            break
        }
    }
    if(fact==0){
        console.log(i,"is prime");
        count++

        
    }   
}
console.log(i,"is the larest");
console.log(count);
// console.log();
