// FoodShop is a new shop located in Oslo. The owner of the shop recently bought a smart fridge, but sadly it did not come with a system included. Your job will be to add a system to this fridge.

// Create a fridge storage where the employees will be able to add and remove items from the fridge. The fridge should keep track of which employee has taken out, or put in items to the fridge and what the amount was.

// The fridge should display, at all times, how many of each product is inside the fridge, what the total price of all products inside the fridge are, and show some kind of notification if the amount of an item is lower than 3.
// This is to let the employees know they need to order more products.


// The following is a list of products FoodShop have:

// Tomato: 0.30$ 
// Potato: 0.80$ 
// Onion: 0.40$ 
// Carrot: 0.50$ 
// Celery: 1.00$ 
// Lettuce: 1.20$ 
// Spinach: 1.10$ 
// Cabbage: 1.60$ 
// Beetroot: 0.70$ 
// Turnip: 0.60$ 
// Parsnip: 0.90$ 
// Mushroom: 1.40$ 
// Here you go, a task for you 🙋🏼‍♂️
// (Remember to focus more on the logical part, the back end of the whole system, rather than how it look and is displayed).

// class Fridge {
//     constructor(tomato, potato, onion, carrot, celery, lettuce, spinach, cabbage, beetroot, turnip, parsnip, mushroom) {
//       this.tomato = tomato;
//       this.potato = potato;
//       this.onion = onion;
//       this.carrot = carrot;
//       this.celery = celery;
//       this.lettuce = lettuce;
//       this.spinach = spinach;
//       this.cabbage = cabbage;
//       this.beetroot = beetroot;
//       this.turnip = turnip;
//       this.parsnip = parsnip;
//       this.mushroom = mushroom;
//     }
//   }

function tomato() {
    let inventory = 4;
    let takeInventory = prompt("Please enter the number of tomatoes you are taking.");
    let addInventory = prompt("Please enter the number of tomatoes you are adding.");
    let newInventory = (parseInt(inventory) + parseInt(addInventory)) - parseInt(takeInventory);
    if (newInventory < 4) {
    alert("Buy more tomatoes!");
} else {
    alert("The current inventory is: " + newInventory);
    }
    document.getElementById('tomato').innerText = newInventory;
}

function potato() {
    let inventory = 6;
    let takeInventory = prompt("Please enter the number of potatoes you are taking.");
    let addInventory = prompt("Please enter the number of potatoes you are adding.");
    let newInventory = (parseInt(inventory) + parseInt(addInventory)) - parseInt(takeInventory);
    if (newInventory < 4) {
    alert("Buy more potatoes!");
} else {
    alert("The current inventory is: " + newInventory);
    }
    document.getElementById('potato').innerText = newInventory;
}
function onion() {
    let inventory = 8;
    let takeInventory = prompt("Please enter the number of onions you are taking.");
    let addInventory = prompt("Please enter the number of onions you are adding.");
    let newInventory = (parseInt(inventory) + parseInt(addInventory)) - parseInt(takeInventory);
    if (newInventory < 4) {
    alert("Buy more onions!");
} else {
    alert("The current inventory is: " + newInventory);
    }
    document.getElementById('onion').innerText = newInventory;
}
function carrot() {
    let inventory = 7;
    let takeInventory = prompt("Please enter the number of carrots you are taking.");
    let addInventory = prompt("Please enter the number of carrots you are adding.");
    let newInventory = (parseInt(inventory) + parseInt(addInventory)) - parseInt(takeInventory);
    if (newInventory < 4) {
    alert("Buy more carrots!");
} else {
    alert("The current inventory is: " + newInventory);
    }
    document.getElementById('carrot').innerText = newInventory;
}
function celery() {
    let inventory = 9;
    let takeInventory = prompt("Please enter the amount of celery you are taking.");
    let addInventory = prompt("Please enter the amount of celery you are adding.");
    let newInventory = (parseInt(inventory) + parseInt(addInventory)) - parseInt(takeInventory);
    if (newInventory < 4) {
    alert("Buy more celery!");
} else {
    alert("The current inventory is: " + newInventory);
    }
    document.getElementById('celery').innerText = newInventory;
}
function lettuce() {
    let inventory = 4;
    let takeInventory = prompt("Please enter the amount of lettuce you are taking.");
    let addInventory = prompt("Please enter the amount of lettuce you are adding.");
    let newInventory = (parseInt(inventory) + parseInt(addInventory)) - parseInt(takeInventory);
    if (newInventory < 4) {
    alert("Buy more lettuce!");
} else {
    alert("The current inventory is: " + newInventory);
    }
    document.getElementById('lettuce').innerText = newInventory;
}
function spinach() {
    let inventory = 8;
    let takeInventory = prompt("Please enter the amount of spinach you are taking.");
    let addInventory = prompt("Please enter the amount of spinach you are adding.");
    let newInventory = (parseInt(inventory) + parseInt(addInventory)) - parseInt(takeInventory);
    if (newInventory < 4) {
    alert("Buy more spinach!");
} else {
    alert("The current inventory is: " + newInventory);
    }
    document.getElementById('spinach').innerText = newInventory;
}
function cabbage() {
    let inventory = 8;
    let takeInventory = prompt("Please enter the number of cabbages you are taking.");
    let addInventory = prompt("Please enter the number of cabbages you are adding.");
    let newInventory = (parseInt(inventory) + parseInt(addInventory)) - parseInt(takeInventory);
    if (newInventory < 4) {
    alert("Buy more cabbage!");
} else {
    alert("The current inventory is: " + newInventory);
    }
    document.getElementById('cabbage').innerText = newInventory;
}
function beetroot() {
    let inventory = 5;
    let takeInventory = prompt("Please enter the number of beetroots you are taking.");
    let addInventory = prompt("Please enter the number of beetroots you are adding.");
    let newInventory = (parseInt(inventory) + parseInt(addInventory)) - parseInt(takeInventory);
    if (newInventory < 4) {
    alert("Buy more beetroot!");
} else {
    alert("The current inventory is: " + newInventory);
    }
    document.getElementById('beetroot').innerText = newInventory;
}
function turnip() {
    let inventory = 8;
    let takeInventory = prompt("Please enter the number of turnips you are taking.");
    let addInventory = prompt("Please enter the number of turnips you are adding.");
    let newInventory = (parseInt(inventory) + parseInt(addInventory)) - parseInt(takeInventory);
    if (newInventory < 4) {
    alert("Buy more turnips!");
} else {
    alert("The current inventory is: " + newInventory);
    }
    document.getElementById('turnip').innerText = newInventory;
}
function parsnip() {
    let inventory = 7;
    let takeInventory = prompt("Please enter the number of parsnips you are taking.");
    let addInventory = prompt("Please enter the number of parsnips you are adding.");
    let newInventory = (parseInt(inventory) + parseInt(addInventory)) - parseInt(takeInventory);
    if (newInventory < 4) {
    alert("Buy more parsnip!");
} else {
    alert("The current inventory is: " + newInventory);
    }
    document.getElementById('parsnip').innerText = newInventory;
}
function mushroom() {
    let inventory = 6;
    let takeInventory = prompt("Please enter the number of mushrooms you are taking.");
    let addInventory = prompt("Please enter the number of mushrooms you are adding.");
    let newInventory = (parseInt(inventory) + parseInt(addInventory)) - parseInt(takeInventory);
    if (newInventory < 4) {
    alert("Buy more mushrooms!");
} else {
    alert("The current inventory is: " + newInventory);
    }
    document.getElementById('mushroom').innerText = newInventory;
}