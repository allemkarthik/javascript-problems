// reverse method
let arr=[1,2,3,4,5]
arr.reverse()
console.log(arr);


// reverse method implementation 
function rev(arr1){
    res=[]
    for(i=arr1.length-1;i>=0;i--){
        res.push(arr1[i])
    }
    console.log(res);
    
}
rev([54,32,54,12,10])