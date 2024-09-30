// in javascript we run and modify html elements with events
// events are actions that are run in the browser
// events are triggered by the user or browser

//in other words events are a type of function that is run when something happens
// and then events can be used to run other functions or code

//in order for an even to process data back and forth from the html document, we have to be able to grab html elements
// we can do this with the document object

//we will then have a button on our html page that will call a specific function that we can create
// this function will change the text of the h1 element

//sometimes we have to make our own functions
//we need to do this in order to run code when an event is triggered
//the other ability of a function is for code to be ran multiple time and wrapped on a single name
//to make a function just say function and then the name of the function()
function changeText(){

    //there are functions that can be used to grab html elements

    let myh1 = document.getElementById("mytitle")    
    myh1.innerHTML = "My name is Zach"
}