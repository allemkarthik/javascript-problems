// check the array is in ascending or desending
let arr=[5,4,3,2,1]
is_asc=true
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[i]>arr[j]){
            is_asc=true
            break
        }
        else{
            is_asc=false
        }
    }

}
if(is_asc){
    console.log(arr,"is in assending order");
    
}
else{
    console.log(arr,"is in dessending order");
    
}