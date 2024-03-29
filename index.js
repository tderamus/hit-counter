//initialize the count as 0 *
//listen for clicks on the increment button *
//increment the count variable when the button is clicked *
//change the count-el in the HTML to refelect the new count
//document.getElementById("count-el").innerText = 5 *
//create save function and have it save to console after clicked *

let countEl = document.getElementById("count-el")
let incrementByOne = 0
function increment() {
  incrementByOne += 1;
  countEl.textContent = incrementByOne;
 }

let saveEl = document.getElementById("save-el");
function save() {
    saveEl.textContent += incrementByOne;
    saveEl.textContent += " - ";
    incrementByOne = 0;
    countEl.textContent = incrementByOne;
    
}

//grab the save-el paragraph and store it in a varialbe called welcomEl
//create two variables (name & greeting) that contains your name
//add the greeting we want to render on the page
//render the welcome message using welcomeEL.innerText








