// // palindrome using methods
// str="malayalamm"
// str2=str.split("").reverse().join("")
// str===str2? console.log("palindrome"):console.log("not palindrome");


// // replace method
// str="heloo World"
// str2=str.replaceAll("o","l")
// console.log(str2);

// replace implementation
// str="heloo World"
// char="l"
// str2=''
// count=0
// for( i of str)
// {
//     if(i=='o'&& count==0){
//         str2=str2+char
//         count++
//     }
//     else{
//         str2+=i
        
//     }
// }
// console.log(str2);

// replaceAll method implementation

// str="heloo World"
// char="l"
// str2=""
// for(i of str){
//     if(i=="o"){
//         str2=str2+char
//     }
//     else{
//         str2=str2+i
//     }
// }
// console.log(str2);

// add captial and small letters in a seperate string
// let str="hello WORLD kaDFSMmdlbm"
// up=""
// lw=""
// for ( i of str){
//     if(i.toUpperCase()==i){
//         up=up+i
//     }
//     else{
//         lw=lw+i
//     }
// }
// console.log(up);
// console.log(lw);

// trim start method
// str="       hello world    "
// trimstr=""
// count=0
// for(i of str){
//     if(i==" "&& count==0){

//     }
//     else{
//         trimstr+=i
//         count++
//     }
// }
// console.log(trimstr);
// console.log(trimstr.length);
// 
// padstart method
// console.log(str.padStart(10,"*"));
// implementation padstart
// str="hello"
// str2=""
// len=10
// char="*"
// diff=len-str.length
// if(diff>0){
//     for(i=0;i<diff;i++){
//         str2+=char
//     }
//     console.log(str2+str);
    
// }
// else{
//     console.log(str);
    
// }


// padend implementation
str="karthik"
str2=""
len=10
char="*"
diff=len-str.length
if(diff>0){
    for(i=0;i<diff;i++){
        str2+=char
    }
    console.log(str+str2);
    
}
else{
    console.log(str);
    
}

