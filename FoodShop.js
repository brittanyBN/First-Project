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