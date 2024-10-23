let arr=[45,1,2,54,5,6,5,65,2]
arr.sort((a,b)=>a-b)
console.log(arr);
sum=0
for ( i=1;i<arr.length-1;i++){
    sum+=arr[i]


}
avvg=Math.ceil(sum/arr.length)
console.log(avvg);




