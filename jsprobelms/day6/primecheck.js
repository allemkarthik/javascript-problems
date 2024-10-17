// take a numbers and check if prime exits in a given prime
let num=144244
found=false
while(num!=0){
    digit=num%10
    fact=0
    for(i=2;i<digit;i++){
        if(digit%i==0){
            fact++
            break
        }
    }
    if (fact==0){
        found=true
        break
    }
    num=Math.floor(num/10)
}
if(found){
    console.log(true);
    
}
else{
    console.log(false);
    
}