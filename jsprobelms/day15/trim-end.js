// rigth the logic to implement the trim end method
trim="karthik"
trim_end=""
char="allem"
len=10
diff=len-trim.length
if(diff>0){
    for(i=0;i<diff;i++){
        trim_end+=char

    }
    console.log(trim+" "+trim_end);
}
else{
    console.log(trim);
    
}