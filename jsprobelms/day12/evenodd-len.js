// find the even length and odd length in array and find which elements are more
let arr=[1,2,3,4,6,8,9,5,6,1,6,3,58,6,7,8,5,52,3,265,6,32]
even=[]
odd=[]
for (i of arr){
    if(i%2==0){
        even.push(i)
    }
    else{
        odd.push(i)
    }
}
if(even.length==odd.length){
    console.log("both are same");
    
}
else if(even.length>odd.length){
    console.log("even array elements are more");
    
}
else{
    console.log("odd array elements are more");
    
}
console.log(even,odd);
