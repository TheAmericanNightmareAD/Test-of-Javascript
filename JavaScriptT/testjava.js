/*
Name-Arshad Eqbal
Batch-TWTF
*/
//Question 1-- Grade Calculation: Write a function that takes a numerical Score (0-100) as an argument and returns a letter grade (A, B, C, D, or F) based on the standard grading scale.
function gradeCalculate(Score) {
  if (Score >= 90) {
      return 'A';
  } else if (Score >= 80) {
      return 'B';
  } else if (Score >= 70) {
      return 'C';
  } else if (Score >= 60) {
      return 'D';
  } else {
      return 'F';
  }
}
console.log(gradeCalculate(78)); //Output C

//Question 2--Odd Numbers with while Loop: Use a while loop to print all odd numbers from 1 to 50.

let i = 1;
while (i <= 50) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

//Question 3--- Array Methods: What will the following code output? javascript Copy code in
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2)
console.log(doubled);

// output-- [ 2, 4, 6, 8, 10 ]

//Question 4-- String Methods: How can you check if a string contains a specific substring? Provide an example using the string "Hello, World!".
const string = "Hello, World!";
if (string.includes("World")) {
    console.log("The string contains the substring 'World'");
}

//Question 5--Objects: How do you add a new property to an existing object? Provide an example object and show how to add a property called age.
let object={
  fullName:"Avinash",
  profession:"Full Stack Developer"
};
object.age=28;// dot notation
console.log(object); //{ fullName: 'Avinash', profession: 'Full Stack Developer', age: 28 }

//Question 6--Functions: Write a function called sum that takes two parameters and returns their sum. What will sum(5, 10) return?
function sum (a,b){
  return a+b;
}
console.log(sum (5,10)); //output 15

//Question 7--this Keyword: Explain how the this keyword behaves in a method of an object. Provide an example using an object that has a method.
let person={
  fullNAme:"Subhash",
  age:27,
  message:function(){
    console.log(`Hello, my name is ${this.fullNAme} and my age is ${this.age} years old`);
    
  }
}
person.message();
//Hello, my name is Subhash and my age is 27 years old

/*************  ✨ Codeium Command 🌟  *************/
//Question 8--Function Constructor: How do you create an object using a function constructor? Provide an example of a constructor function called Car that initializes make and model properties.
function car(model,make,year){
  this.model=model;
  this.make=make;
  this.year=year;
}
let carOne=new car("C205D","BMW",2015)

console.log(carOne);
//car { model: 'C205D', make: 'BMW', year: 2015 }

//Question--9-Fibonacci Function: Write a function that returns the nth Fibonacci number. For example, if the input is 5, the output should be 5 (0, 1, 1, 2, 3, 5).
function Fibonacci (n){
  if (n<=0){
    return
  }else if (n===1){
    return 0;
  
  }else if(n===2){
    return 1;
  }
  return Fibonacci(n-1)+Fibonacci(n-2);
}

let n=5;
console.log(Fibonacci(n)); //output 3

//Question 10--given an array, the task is to cyclically rotate the array clockwise by one time.
//Examples:
//Input: arr[] = {1, 2, 3, 4, 5}
//Output: arr[] = {5, 1, 2, 3, 4}
//Input: arr[] = {2, 3, 4, 5 , 1}
//Output: {1, 2, 3, 4, 5}

function rotateArray(arr){
  if(arr.length<0) return arr;
  let lastElement=arr.pop();
  arr .unshift(lastElement);
  return arr;
}
let arr = [1, 2, 3, 4, 5];
let rotatedArr = rotateArray(arr);
console.log(rotatedArr);  // Output: [5, 1, 2, 3, 4]

//Question-11---You can use ASCII values to determine the difference between lowercase and uppercase letters. In the ASCII table:
//Lowercase letters ('a' to 'z') range from 97 to 122.

function lowerToupper(string)
{
    let x = "";
    for(let i=0; i<string.length; i++)
    {
        x = x + String.fromCharCode(string.charCodeAt(i)-32);
 
    }

    return x;
}
console.log(lowerToupper('hello')); //output HELLO

/*--------------------------------------------------------------------------------------------------------------------*/