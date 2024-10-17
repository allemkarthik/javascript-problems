// add star in the place of an duplicate
let arr=[1,1,2,2,3,3,4,4,5,5]
res=[]
dup=[]
for(i of arr){
    if(!res.includes(i)){
        res.push(i)
    }
    else{
        dup.push("*")
    }
}
console.log(res.concat(dup));

// replace * if next  number is same

let arr1=[1,1,2,2,3,3,4,4,5,5]
res1=[]

for (i of arr1){
    if(!res1.includes(i)){
        res1.push(i)
    }
    else{
        res1.push("*")
    }
}

console.log(res1);
