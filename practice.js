// Arrays
// Declare a variable greeting and assign to it a phrase.

let greeting = 'Hello frog!';

// Split a string into an array of characters (see the .split() method)
let str = 'This is a string.';
str.split("");

// Take an array of letters and merge them into a string (see the .join() method)
let letters = ['a', 'b', 'c'];
letters.join(" ");

// Select a random item from an array (Read up on Math.random() to figure out how to choose a 
// random item from your array. JavaScript doesn’t have Python’s random.choice() function at the ready, so we get to do it ourselves!)
function getRandomLetter(arr) {
... let position = Math.floor(Math.random() * Math.floor(arr.length));
... return arr[position];
... }

getRandomLetter(letters);


// Select two random items from an array and swap them

function swapRandom(arr) {
    let pos1 = Math.floor(Math.random() * arr.length);
    let pos2 = Math.floor(Math.random() * arr.length);

    let letterToSwap = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = letterToSwap;

    return arr;
}

// Maps
// Create an empty map and assign it to the variable candy
let candy = new Map();

// Set five colors as keys in the map and flavors as the values, for instance “purple” could be “grape”.
candy.set('purple', 'grape');
candy.set('red', 'cherry');
candy.set('green', 'apple');
candy.set('blue', 'blueberry');
candy.set('yellow', 'banana');

// Iterate over the candy flavors to print “The x flavor is colored y.” for each
for (let [color, flavor] of candy) {
    console.log(`The ${flavor} flavor is colored ${color}.`);
}

// Get the value of a color from the map, and see what happens when you try getting a value of a color that doesn’t exist.

candy.get('red');
// 'cherry'
candy.get('orange');
// undefined

// Functions
// Write a function that takes a color and the candy map. 
// It should return the flavor or if it’s not in the map, console log “Sorry, that color doesn’t have a flavor” and return nothing.

function getFlavor(color, candyMap) {
    if (candyMap.has(color)) {
        return candyMap.get(color);
    } else {
        console.log("Sorry, that color doesn’t have a flavor");
    }
}

// Write a function that takes an array of colors and returns an array of the corresponding flavors. If the map doesn’t have the color, add null to the array.
function getFlavors(colorArr, candyMap) {
    let flavorArr = [];
    for (let i = 0; i < colorArr.length; i += 1) {
        if (candyMap.has(colorArr[i])) {
            flavorArr.push(getFlavor(colorArr[i], candyMap));
        } else {
            flavorArr.push(null);
        }
    }
    return flavorArr;
}