// print the vowels in the even indexes
let str=" programme"

vowels="aeiou"
for(i in str){
    if(i%2==0 && vowels.includes(str[i])){
        console.log(i,str[i]);
        

    }
}