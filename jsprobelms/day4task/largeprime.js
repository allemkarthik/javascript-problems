// find largest prime and smallest prime number ina given series
primenumbers=[]

for(i=0;i<=100;i++){
    fact=0
    for(j=2;j<i;j++){
        if(i%j==0){
            fact++
            break
        }

    }
    if(fact==0){
        primenumbers.push(i)
    }
}
console.log(primenumbers);
var maxprime=primenumbers[primenumbers.length-1];
var minprime=primenumbers[0]
console.log(maxprime,minprime);


