// includes method implementation
function inc(arr, val) {
  found = false;
  for (i of arr) {
    if (i == val) {
      found = true;
    }
  }
  if (found == true) {
    console.log(true);
  } else {
    console.log(false);
  }
}
inc([1, 2, 30], 20);
// check index and values are even or not
let arr=[0,1,5,3,5,5,8,5,6,10]
for(i of arr){
    if(i%2==0 && arr[i]%2==0){
        console.log(i);
        
    }
}

// check whether the index and values are same or not
let arr1=[0,1,3,5,7,5,7,8,9,10]
for(i=0;i<arr1.length;i++){
    if(arr1[i]==i){
        console.log(arr1[i]);
        
    }
}