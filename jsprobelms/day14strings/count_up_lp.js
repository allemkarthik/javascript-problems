// take a string and return the count of uppercase and lower case characters in it
let str="KAsdflhv nsoKSDSDNBVOS"
up_count=0
lp_count=0
for(i of str){
    if(i>="A" && i<="Z"){
        up_count++
        
    }
    else if(i>="a" && i<="z"){
        lp_count++
        

    }
}
console.log("uppercase",up_count,"times");
console.log("lowercase",lp_count,"times");

