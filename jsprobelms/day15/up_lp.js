// in a given string move all the uppercase charcters to the front and lowercase charcters to the laast

str="kARthiK AlLEm"
lower=""
upper=""
for(i of str){
    if(i==i.toUpperCase()){
        upper+=i
    }
    else{
        lower+=i
    }
}
console.log(upper,lower);
