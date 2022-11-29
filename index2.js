// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale=true
let gender = (isMale) ? "male":"female"
console.log(gender)
/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let int1 =16
let int2 =8

if(int1 || int2==8){
    console.log("equal")
}

if(int1-int2==8){
    console.log("substraction")
}else if(int1+int2==8){
    console.log("addition")
}

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let string1="He"
let string2="llo"

let concatenation= string1 +string2
console.log(concatenation)

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let high=10
let mid=5
let low=1
let all=[mid,low,high]
let sorted=all.sort((a,b)=>a-b)
console.log(sorted)
/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let int3=20
let int4=50

let average= (int3+int4)/2
console.log("average:",average)


/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let string3="aaa"
let string4="a"

if(string3.length>string4.length){
    console.log("string3 is longer than string4")
}else{
    console.log("string4 is longer than string 3")
}
/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let value="45"
let integer= (value===45) ? true:false
console.log("integer:",integer)

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let number=5400
let twentyPercent= number/5
console.log("Twenty percent of 5400 is:", twentyPercent)

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let number2=7
if(number2%2==0){
 console.log("even")
}else{
    console.log("uneven")
}
