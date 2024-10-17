// find previous prime number
num=15 
prev=0
while(prev<1){
    num=num-1
    fact=0
    for(i=2;i<num;i++){
        if(num%i==0){
            fact++
            break;
            
        }

    }
    if(fact==0){
        console.log(num,"is previous prime");
        prev++
        
    }
}