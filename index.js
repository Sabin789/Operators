/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* The first one is a number which could is just one or more digits outside of
double commas. A number could be an integer (1) or a float (1.45)

A string is anyhting inside double commas ("I am 21")

A boolean is a datatype with the values of true or false

Undefined means something is either empty or has not been given a specific value 

null just means something is empty
 
bigInt is a really big number for example one with 20 zeros


*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

console.log("A variable is a container for different javascript datatypes")

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let sum=12+20

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x=12

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name="John Doe"

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let subtraction= x-12

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/
 let name1="john"
 let name2="John"
 if(name1===name2){
    console.log("name1 and name2 are the same:",true)
 }else{
    console.log("name1 and name2 are the same:",false)
 }

 let equal=name2.toLowerCase()
 console.log("name1 and equal are the same:",name1===equal)


//  unsolved

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

let i= 1
if(i==1){
  console.log("one")
}else if(i==2){
   console.log("two")
}else if(i==3){
   console.log("three")
}else if(i==4){
   console.log("four")
}else if(i==5){
   console.log("five")
}else if(i==6){
   console.log("six")
}else if(i==7){
   console.log("seven")
}else if(i==8){
   console.log("eight")
}else if(i==9){
   console.log("nine")
}

  

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let j=13

let result=(j<12) ? "Smaller":"Bigger"
console.log(result)