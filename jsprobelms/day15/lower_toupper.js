// convert all lowercase interers into uppercase and viceversa

str="heLLo KARthik"
str2=""
for(i of str){
    if(i==i.toUpperCase()){
       str2+= i.toLowerCase()

    }
    else{
        str2+=i.toUpperCase()
    }
}

console.log(str2);

