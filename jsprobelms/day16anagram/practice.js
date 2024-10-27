// // anagram
// // let str1="silent"
// // let str2="listen"

// // if(str1.length===str2.length){
// //     s1=str1.split("").sort().join("")
// //     s2=str2.split("").sort().join("")
// //     if(s1==s2){
// //         console.log("given string is anagram");
        
// //     }
// //     else{
// //         console.log("given string is not anagram");
        
// //     }
// // }
// // else{
// //     console.log("given strings are not anagrams");
    
// // }


// // implementation without using methods
// let str1="silentm"
// let str2="listens"

// let emp=""
// for ( i of str2){
//     if(!emp.includes(i)){
//         emp+=i
//     }
// }
// // console.log(emp);
// if(str1.length===str2.length){
//     is_ana=true
//     for( i of emp){
//         count1=0
//         count2=0
//         for(j of str1){
//             if(i==j){
//                 count1++
//             }
//         }
//         for( k of str2){
//             if(i==k){
//                 count2++
//             }
//         }
//         if(count1!==count2){
//             is_ana=false
//         }
//     }
//     if(is_ana){
//         console.log("it is anagram");
        
//     }else{
//         console.log("not anagram");
        
//     }

// }


// find the substring from the given string
let str="karthik"

let sub="thi"
res=""
for(i=0;i<str.length;i++){
    if(str[i]==sub[0]){
        for(j=0;j<sub.length;j++){
            for(k=i;k<i+sub.length;k++){
                if(sub[j]==str[k]){
                    res+=sub[j]
                }
            }
        }
        
    }
}
console.log(res);
