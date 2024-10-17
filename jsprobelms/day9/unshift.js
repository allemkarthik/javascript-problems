// unshift : this method will add element in the array at starting index
let arr=[1,5,472,2,5,8]
let ele=5
arr.unshift(ele)
console.log(arr);

// unshift method implementation
function uns(arr,val){
    let res=[]
    res[0]=val
    for(i=0;i<arr.length;i++){
        res.push(arr[i])
    }
    console.log(res);
    

}

uns([1,23,45,5,6],10)