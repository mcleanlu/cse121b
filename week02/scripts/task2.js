/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

let name = "Luke McLean";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())

document.querySelector("#name").innerHTML = name;

// Step 3: declare and instantiate a variable to hold the current year

let year = 2022;

// Step 4: place the value of the current year variable into the HTML file

document.querySelector("#year").innerHTML = year;

// Step 5: declare and instantiate a variable to hold the name of your picture

let profile = 'images/profile_300.jpg';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector('img[alt="Photo"]').setAttribute('src', profile);

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

let foods = ["pizza", " rice", " steak", " spaghetti"];

// Step 2: place the values of the favorite foods variable into the HTML file

document.querySelector("#food").innerHTML = foods;

// Step 3: declare and instantiate a variable to hold another favorite food

let moreFoods = " hot dog";

// Step 4: add the variable holding another favorite food to the favorite food array

foods.push(moreFoods);

// Step 5: repeat Step 2

document.querySelector("#food").innerHTML = foods;

// Step 6: remove the first element in the favorite foods array

foods.splice(0, 1);

// Step 7: repeat Step 2

document.querySelector("#food").innerHTML = foods;

// Step 8: remove the last element in the favorite foods array

foods.splice((foods.length - 1))

// Step 7: repeat Step 2

document.querySelector("#food").innerHTML = foods;