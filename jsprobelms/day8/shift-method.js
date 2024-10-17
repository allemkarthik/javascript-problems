// shift method : it will remove the first elememt in the array
let arr=[125,52,4,2,445]
arr.shift()
console.log(arr);

// shift method implementation
function sft(arr1){
    let res=[]
    for (i=1;i<arr1.length;i++){
        res.push(arr1[i])
    }
    console.log(res);
    
   

}
sft([1,25,44,524,2,5])