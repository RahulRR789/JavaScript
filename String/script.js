// String is a sequence of characters used to represent text

// create String
// let str="rahul"

// String length
// str.lenght

// string indices
// str[0],str[1],str[2]


// let str="Rahul Rajput";
//  let length = str.length;
//  console.log(length); 

// let strr="Rahul rajeshkumar rajput";
// console.log(strr[0],strr[4],strr[7],strr[10],strr[8],strr[9]);



let string="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(string[17],string[0],string[7],string[20],string[11]);


// template literals in js
// a way to have embedded expressions in strings 

// `this is a template literal`
// string interpolation 

// to create strings by doing substitution of placeholders

// `string text ${expression} string text`

// ( `` ) -> Called as Backtick ex `Rahul`


// let specialstring=`This is a template literal`;
// console.log("Example=",specialstring);
// console.log(typeof specialstring);

// let obj ={items:"cars", costs:200, model:2017};
// let objj=`the cost of this ${obj.items} is ${obj.costs} and bulid on ${obj.model}`;
// console.log(objj);

// String methods in js
// These are bulit-in-function to manipulate a string

// str.toUpperCase()
// str.toLowerCase()
// str.trim()   //removes whitespace

let str="RahulRajput";
let Newstr=str.toUpperCase();
console.log(Newstr);

let strr="Rohit,sachin,rahul";
let newstr=strr.toUpperCase();
console.log("This is UpperCase Coverted = ",newstr , strr);

let strrr="RAHUL RAJESHKUMAR RAJPUT";
let neww=strrr.toLowerCase();
console.log("This is lowercase",neww);

let strrrr="ROHIT , SACHIN , RAHUL";
let newwstr=strrrr.toLowerCase();
console.log(newwstr);

let sttr="       rahul rajeshkumar rajput        ";
let sttrr=sttr.toUpperCase();
console.log(sttrr.trim());

let nammee="         Rohit           sachin             rahul        ";
console.log(nammee.trim());

// str.slice(start , end?) //returns part of strings //the last end number is called noninclsive check index 0 to so on
// str1.concat(str2) //joins str2 with str1
// str.replace(searchVal , newVal)
// str.charAt(idx)

let str1="Rahul RajeshKumar Rajput";
console.log(str1.slice(2 , 7));

let strr1="0123456789";
console.log(strr1.slice(2 , 7));


let sttrr1="Rahul";
let sttrr2="RajeshKumar";
let sttrr3="Rajput";
let num=7892953174
let result="My Name is" +  sttrr1.concat(sttrr2).concat(sttrr3)+"My phone number is "+num;
let str4=result.toUpperCase();
console.log(str4);

let srtt1="Rahul";
console.log(srtt1.replace("Ra" , " Bg"));

let srtt2="sitting";
// let neww1= srtt2.toUpperCase();
console.log(srtt2.replace("si","Fi"));

let srttt1="hellololo";
console.log(srttt1.replaceAll("lo","p"));

let str11 ="HelloWorld";
console.log(str11.charAt(6));

let strr11 ="RahulRajeshkumarRajput";
console.log(strr11.charAt(6));


let username=prompt("Enter Your Name:");
let addname="@";

console.log(addname+username);

