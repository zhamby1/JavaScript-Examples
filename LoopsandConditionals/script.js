//loops and conditionals work by comparing two things together to see if they are true or false.
//if they are true, the code will run, if they are false, the code will not run.
//loops run code multiple times until a condition is met
//conditions only execute once


//when say a condition what we mean if else or if then
//loops and conditions use the following relational operators:
// == equal to
// === equal value and equal type
// != not equal
// !== not equal value or not equal type
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// && and
// || or
// ! not

//if statements
//can you vote
let age = 17
//if statents get skipped if they are not true
//the true false comparsion return what we call a boolean - true or false..it is a data type like an integer
if (age >= 18){
    console.log("You can vote")
}
//if we want something to happen if the condition is not meet we use an else statement
else{
    console.log("You cannot vote")
}

//if we want to check multiple conditions we use else if
//compare numerical values to give them letter grades
//else if use something called short-circuiting
// this means that if a condition is met, the rest of the conditions are not checked
let grade = 75
if (grade >= 90){
    console.log("A")
}
else if (grade >= 80){
    console.log("B")
}
else if (grade >= 70){
    console.log("C")
}
else if (grade >= 60){
    console.log("D")
}
else{
    console.log("F")
}

//while loops repeat until a condition is met
let i = 0
while (i < 10){
    console.log(i)
    i = i + 1 //breaks the loop
}
//flags
// let flag = true
// while (flag){
//     console.log("I am running")
//     myprompt = parseInt(prompt("Do you want to stop? 1 for yes, 0 for no"))
//     if (myprompt == 1){
//         flag = false
//     }
// }

//for loops..or for each are useful for grabbing everything out of a list or array
let mylist = ["apple", "banana", "cherry"]
// the following code does the same thing
//traditional for loop
for (let i = 0; i < mylist.length; i = i + 1){
    console.log(mylist[i])
}

//for each loop
mylist.forEach( fruit => {
    console.log(fruit)    
});

//for of loop
for (let item of mylist){
    console.log(item)
}