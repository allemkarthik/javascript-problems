// print the most repeated word in an array
let arr=[1,2,4,5,2,12,1,7,85,2,1,3,6,4,58,2,32,4]
let res=[]
for (i of arr){
    if(!res.includes(i)){
        res.push(i)
    }
}
repeated=0
most_count=0
for ( i of res){
    count=0
    for(j of arr){
        if(i==j){
            count++
        }
    }
    if(count>most_count){
        repeated=i
        most_count=count
    }
    
}
console.log(repeated,"occured",most_count,"times");

