//functions are actions
//functions are reusable
//functions can be built in or custom and can be part of objects or ther operations

//functions for arrays
//arrays have built in functions that can be used to manipulate the data

let fruits = []
//push adds an item to the end of the array
fruits.push("apple")
console.log(fruits[0])
fruits.push("banana")
console.log(fruits)
//we can remove the last item from an array with pop
fruits.pop()
console.log(fruits)
//we can get the length of an array with length
console.log(fruits.length)
//we can search for an item in an array with indexOf
console.log(fruits.indexOf("apple"))

//where this is useful is I can grab the current index of something and store it in a variable
fruits.push("banana")
fruits.push("orange")
let apple_index = fruits.indexOf("apple")
found_apple = fruits[apple_index]
console.log(found_apple)

//this is really useful for objects in arrays

let people = [{name: "John", age: 30}, {name: "Jane", age: 25}, {name: "Zach", age: 25}]
//we can then use a function to help find the index of a person
//we will return to this when we talk about loops

//function for input
//functions can take input and return output
//this is called a prompt
//this function will popup on screen and ask the user for some data input
let input_name = prompt("What is your name?")
alert(input_name)

//javascript has to parse or convert the input if you wish to use numbers
//inputs come in as strings
//functions can be chained together
let first_number = parseFloat(prompt("Enter a number"))
let second_number = parseFloat(prompt("Enter another number"))
let sum = first_number + second_number
alert(sum)
