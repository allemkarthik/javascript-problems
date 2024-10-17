// next prime number

num=1324

next=0

while(next<1){
    fact=0
    num=num+1
    for(i=2;i<num;i++){
        if(num%i==0){
            fact+=1
            break;
        }
    }
    if(fact==0){
        console.log(num,"is next prinme");
        next++
        
    }
}