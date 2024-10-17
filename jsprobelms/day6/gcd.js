// find gcd of a numbers

let a=10
let b=20

let min=a>b?b:a
let max=a>b?a:b

gcd=0
for(i=1;i<=min;i++){
    if(min%i==0 && max%i==0){
        gcd=i
    }
}
console.log(gcd);
