// display the name of the month


var now=new Date();
var days=now.getMonth();

var daysofmonth=["Januray","Feburary","March","April","May","June","July","Augest","September","October","November","December"]

var input=5
// console.log(daysofmonth[days]);


if(days==input){
    console.log(daysofmonth[days],"is same as given input");
    

}
else{
    console.log("it is ",daysofmonth[input]);
    
}
