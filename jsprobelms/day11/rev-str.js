// reverse a string in ascending order
arr=["hii","hello","hi","hoya","buddy"]
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[i].length<arr[j].length){
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }

    }
}
console.log(arr);

// reverse a string in desending order
arr=["hii","hello","hi","hoya","buddy"]
for (k=0;k<arr.length;k++){
    for(h=0;h<arr.length;h++){
        if(arr[k].length>arr[h].length){
            temp=arr[k]
            arr[k]=arr[h]
            arr[h]=temp
        }
    }
}
console.log(arr);
