// find the missing number in an array
let arr=[10,20,15,16,17,14,13]
// first find the range of  numbers so find min and max
min=arr[0]
max=arr[0]
for(i of arr){
    if(i<min){
        min=i
    }
    if(i>max){
        max=i
    }
    
}
console.log(min,max);
for(i=min;i<max;i++){
    if(!arr.includes(i)){
        console.log(i,"is the missing number");
        
    }
}
