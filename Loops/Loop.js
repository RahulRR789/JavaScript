
// FOR LOOPS Ex

// let rows=7;
// for( let i=1;i<=7;i++){
//     let pattern ="";
//     for( let j=1;j<= 1 - rows;j++){
//          pattern ="" ;
//          for(let k=1 ; k<=rows ; k++){
//             pattern +="*"

//     }
// }
//     console.log(pattern);
// }

//  let rowss=7;
//  for(let i=1;i<=7;i++){
//    let pattern ="";
//    for(let j=1;j<=i;j++){
//      pattern +="*";
//    }
//    console.log(pattern);
// }

// let num = 87;
// for(let i=1; i<=100;i++){
// console.log(num);
// }
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//   }

// LOOPs are used to execute a piece of code again & again 



// for (let i=1 ; i<=5;i++ ){
//     console.log("hello");
// }

// let num=0;
// for(let i=1; i<=5;i++){
//     num = num+i;
// }
// console.log("sum =" , num );

// let sum =30;
// for (let i=50;i<=50;i++){
// sum = sum+i;
// }
// console.log("sum=" ,sum);

// let n=129;
// for(let i=120;i<=130;i++){
//     n=n+i;
// }
// console.log("number are there = " ,n);

// let start=0;
// let end=100;

// for(let i=1;i<=end;i++){
//     start= start + i;
// }
// console.log("The Starting Of Number is =",start);

// for(var i=1;i<=5;i++){
//     console.log("hello ", i,"Time");
// }
// console.log("Var is a global variable which can define it at end " , i);

// While Loops Ex 
// The while loop is a entry controll loop which the condition is true the loop excute but when it get condition becomes false the condition terminates the condn


// let i =1;
// while(i<=5){
//     console.log("i = ", i);
//     i++;
// }

// let j=3;
// while(j<=29){
//     console.log("j=",j);
//     j++;
// }

// let n=12;
// while(n<=42){
//     console.log("Hello ",n,"Times");
//     n++;
// }

// let rowss=7;
//  for(let i=1;i<=7;i++){
//    let pattern ="";
//    for(let j=1;j<=i;j++){
//      pattern +="*";
//    }
//    console.log(pattern);
// }

// let r=5;                               

// while(r<=5){
//     r++;
//     let pattern="";
// let a=5;
// while(a<=r){
//     a++;
//     pattern+="*";
// }
// console.log(pattern);

// }

// let r = 1;

// while (r <= 5) {
//     let pattern = "";
//     let a = 1;
    
//     while (a <= r) {
//         pattern += "*";
//         a++;
//     }
    
//     console.log(pattern);
//     r++;
// }

// // for of loops // the for of check array and string
// let str ="RAHUL RAJPUT";

// for(let i of str){
//     console.log(" i = " , i );
// }

// let strr="Rohit & Sachin";

// for(let j of strr){  // Iterator
//     console.log(" j = " , j);
// }


// let strrr="Rahul & Rohit & Sachin";

// let size=0;
// for(let s of strrr){
//     console.log("The Character Are" , s);
//     size++;
// }
// console.log("The Total Size Is " , size);

// for in loops its check the object and the key values

// let student={name:"Rahul Rajput" , age:21, CGPA:8.13,ispass:true}

// for(key in student){
//     console.log("The Value are" , key , student[key] );
// }


// let model={name:"BMWs1000rr" , cc:1000 , year:2023 , icanget:true}

// for(key in model){
//     console.log("The Model  ",key,model [key]);
// }
// print all even numbers from 0 to 100

// for(i=0;i<=100;i++){
//     console.log("The 0 to 100 Number are ",i);
// }

// //find even
// for(j=0;j<=100;j++){
//     if(j%2 === 0){
//         console.log("The even numbers are ",j);
//     }
// }

// // find odd 

// for(k=0;k<=100;k++){
//     if(k%2 !== 0){
//         console.log("The Odd Numbers are ",k);
//     }
// }

// let gameNum = 129;
// let userNum = prompt("Guess the game nubmer :");

// while(userNum != gameNum){
//     userNum=prompt("re-enter the number : ");
// }
// document.write("Congrats You Won!!!!!!");

// let winningnum = 7;
// let yournum = prompt("Enter any Number");

// while(yournum != winningnum){
//     yournum=prompt("enter correct number");
// }
// document.write("Congratulation User You Won!!");

// let guessNum=25;
// let userNum=prompt("enter the number from user");
// if(guessNum==userNum){
//     console.log("You select the correct number");
// }
// else if(guessNum>userNum){
//     console.log("You select the less number");
// }
// else if(guessNum<userNum){
//     console.log("You select the big number");
// }


let guessnum=Math.ceil(Math.random()*100);
console.log(guessnum)
let usernum = parseInt(prompt("Enter a any number"),10);

if(usernum === guessnum){
    document.write("You won!!!!");
}
else if(usernum < guessnum ){
    document.write("The Entered number is lesser");
}
else if(usernum > guessnum){
    document.write("The Entered number is greater");
}
else{
    document.write("The Entered number is string or Wrong");
}
// Convert the input from a string to a number. When a user types a number in the prompt, it's captured as a string. To perform calculations or comparisons, you need this value in a numeric form.
