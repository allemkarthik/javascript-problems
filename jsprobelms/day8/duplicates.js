// remove duplicate valuees in array
let arr=[1,1,2,5,5,4,8,5,8,6,2,5]
dup=[]
for(i of arr){
    if(!dup.includes(i)){
        dup.push(i)
    }
}
console.log(dup);

// print duplicates values in an array
let arr2=[1,1,5,389,5,3,58,3,4]
result=[]
dup=[]
for(i of arr2){
    if(!result.includes(i)){
        result.push(i)
    }
    else{
        dup.push(i)
    }
}
console.log(result,"these are removed diplicates in array");
console.log(dup,"this are the dupilcates");

