// print left diagonal
let arr=[[1,2,3],[4,5,6],[7,8,9]]
for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        if(i===j){
            console.log(arr[i][j]);
        }
    }
}
console.log("----------------------------------------");


// print right diagonal
let arr2=[[1,2,3],[4,5,6],[7,8,9]]
for(i=0;i<arr2.length;i++){
    for(j=arr2.length-1;j>=0;j--){
        if(i+j==arr2[i].length-1){
            console.log(arr2[i][j]);
            
        }
    }
}
console.log("----------------------------------------");


// print rigth diagonal in reverse
let arr3=[[1,2,3],[4,5,6],[7,8,9]]
for(i=arr3.length-1;i>=0;i--){
    for(j=arr3.length-1;j>=0;j--){
        if(i+j==arr3[i].length-1){
            console.log(arr3[i][j]);
            
        }
    }
}

