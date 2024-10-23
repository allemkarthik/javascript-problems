// find the sum of rigth diagonal elements
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
sum=0
for(i=0;i<arr.length;i++){
    for(j=arr.length-1;j>=0;j--){
        if(i+j==arr[i].length-1){
            console.log(arr[i][j]);
            sum+=arr[i][j]
            
        }
    }
}
console.log(sum,"sum of right diagonal");
