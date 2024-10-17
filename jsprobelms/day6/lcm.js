// find the lcm of a given two numbers

let a=10
let b=155

let min=a>b?b:a
let max=a>b?a:b

if(max%min==0){
    console.log(max,"is lcm");
    
}
else{
    check=max
    while (true){
        check+=max
        if(check%min==0 && check%max==0){
            console.log(check,"is the lcm");
            break
            
        }
    }
}