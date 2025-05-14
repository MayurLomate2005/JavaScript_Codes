const accountId = 1233
let accountName = " Mayur Lomate"
var accountEmail = "mayurlomate2005@gmail.com"
let pass = "12234"

console.table([accountId,accountName,accountEmail,pass]);
// prefer not use var instead of use let , const


//conversion of datatype 
let value = "45"
console.log(typeof value)  // its output is string
let conversion = Number(value);
console.log(conversion) // its 45 means it convert string into number but if we try for undefined it is undefined and for null its Nan(Not a Number)
// important Note : When You try for conversion of a one datatype into another check the value sometimes it gives NAN , which can lead to confusion 
//further . 


/*
in javscript the DataTypes Used : Primitive and non primitive
primitive : Number , String , Boolean , Null , Undefined and Symbol 
Non-Primitive : Array , Object , Function 
*/

// Syntax of it : 
let Array = ["Mayur" , "Babasaheb ","Lomate"]; // This is Array 

let Function = function(){

    console.log("Good Morning Guys");
    
}

let obj = {
    name : " mayur ",
    age :  20,
}

console.table([Array , obj]);
Function();


// This is How the Reference Datatype are worked .

