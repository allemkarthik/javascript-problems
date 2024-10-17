// slice method

let arr=[5,5,365,6,5,6,6,5,6,5,5,6]
console.log(arr.slice(0,5));

// slice method implementation
function slc(arr,s,e){
    let res=[]
    for(i=s;i<e;i++){
        res.push(arr[i])

    }
    console.log(res);
    

}
slc([1,2,3,4,56,5],0,5)