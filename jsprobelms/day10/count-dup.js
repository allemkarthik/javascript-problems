// count the number of duplicates present  in an array
let arr=[1,1,2,5,5,2,5,2,4,5,2,1,5,8,7,22,26,8,7]
res=[]
dup=[]
for(i of arr){
    if(!res.includes(i)){
        res.push(i)
    }
    else{
        dup.push(i)
    }
}
console.log(res,dup);
res.sort((a,b)=>a-b)
for(j of dup){
    count=0
    for(k of arr){
        if(j==k){
            count++
        }
    }
    console.log(j,"is present",count,"times");
}
