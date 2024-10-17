// sort the array in  ascending orderr
let arr1=[4,5,7,8,2,74,5,52,4,5,2,5,4]
console.log(arr1.sort((a,b)=>a-b));


// sort the array in desecending order
let arr2=[4,5,7,8,2,74,5,52,4,5,2,5,4]
console.log(arr2.sort((a,b)=>b-a));

// sort the array in desending order
let arr3=[4,5,7,8,2,74,5,4,57,8,5,7,8,5,52,4,5,2,5,4,1000]
for (i=0;i<arr3.length;i++){
    for(j=0;j<arr3.length;j++){
        if(arr3[j]>arr3[j+1]){
            temp=arr3[j]
            arr3[j]=arr3[j+1]
            arr3[j+1]=temp
        }
    }
}
console.log(arr3);

//sort the array desending order
let arr4=[4,5,7,8,2,74,5,4,57,8,5,7,8,5,52,4,5,2,5,4,10000]
for (i=0;i<arr4.length;i++){
    for(j=0;j<arr4.length;j++){
        if(arr4[j]<arr4[j+1]){
            temp=arr4[j]
            arr4[j]=arr4[j+1]
            arr4[j+1]=temp
        }
    }
}
console.log(arr4);
