//There are ways we can group data together
//we can use arrays.  This is a list of data with a common theme
//arrays are declared with square brackets
let fruits = ["apple", "banana", "orange", "grape", "kiwi"]
let numbers = [1, 2, 3, 4, 5]
console.log(fruits)
//to access an item in an array we use square brackets and the index(position/where it is at in line) of the item
//indexing starts at 0
console.log(fruits[0])
//you can store individual items in a list in a variable. just say varname = listname[index]
let banana_fruit = fruits[1]
console.log(banana_fruit)

//objects are another way to group data together
//objects are declared with curly braces {}
//objects are like arrays but instead of using an index to access data we use a key/variable name
//objects are like a dictionary
// term: definition
//objects are not a list of the same type of data like an array is often times
//the following is an example of object literal
let checking_account = {
    name: "John",
    account_number: 4571,
    checking_balance: 500.00
    
}
console.log(checking_account)
//if i want to grab individual data from an object I use the dot notation (checking_account.name)
console.log(checking_account.name)
console.log(checking_account.account_number)
console.log(checking_account.checking_balance)

//object can contain arrays or other objects
let Person = {
    name: "Zach",
    age: 25,
    friends : ["Sam", "Tim", "Tom"], //arra
    favorite_movies: [{title: "The Matrix", year: 1999}, {title: "The Dark Knight", year: 2008}] //literal 
}

let Person3 = {
    name: "Jane",
    age: 27
}

//we can also us objects to reference other objects or as list of objects
let Person2 = {
    name: "John",
    age: 30,
    friends: [{Person, Person3}] //reference
}


let zachs_best_friend = Person.friends[0]

console.log(zachs_best_friend)
console.log(Person.favorite_movies[0].title)
console.log(Person2.friends[0].name)