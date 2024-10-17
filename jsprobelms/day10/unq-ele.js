// print the unique elements in an array
let arr=[1,2,3,5,5,5,6,8,5,7,9,2,9,10]
res=[]
dup=[]
unq=[]
for (i of arr){
    if(!res.includes(i)){
        res.push(i)
    }
    else{
        dup.push(i)
    }
}
console.log(res,dup);
for(j of res){
    for(k of dup){
        if(!dup.includes(j)){
            unq.push(j)
            break
        }

    }
}
console.log(unq);
