// compare the two values in array which is equal to 10
let arr=[1,23,4,5,6,3,7,10]
num=10
emp=[]
for(i=0;i<arr.length;i++){
    count=0
    for(j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==10){
            emp.push(arr[i],arr[j])
            count++
            break

        }
    }
    // if(count>0){
    //     break
    // }
}
console.log(emp);
