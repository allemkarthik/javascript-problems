// take a string and return count vowels and consonents 
let str="karthik learning java script"
vowels="aeiou"
vowel_count=0
con_count=0
for(i of str){
    if(vowels.includes(i)){
        vowel_count++

    }
    else{
        con_count++
    }
}
console.log(vowel_count,con_count);
