const products = [];
    products[0] = ["Tomato", 0.30, 4];
    products[1] = ["Potato", 0.80, 6];
    products[2] = ["Onion", 0.40, 8];
    products[3] = ["Carrot", 0.50, 7];
    products[4] = ["Celery", 1.00, 9];
    products[5] = ["Lettuce", 1.20, 4];
    products[6] = ["Spinach", 1.10, 8];
    products[7] = ["Cabbage", 1.60, 8];
    products[8] = ["Beetroot", 0.70, 5];
    products[9] = ["Turnip", 0.60, 8];
    products[10] = ["Parsnip", 0.9, 7];
    products[11] = ["Mushroom", 1.40, 6];
    console.log(products);

function inventory() {
    let takeInventory = parseInt(prompt("Please enter the number of product you are taking."));
    let addInventory = parseInt(prompt("Please enter the number of product you are adding."));
    let inventory = parseInt(document.getElementById('food'));
    let newInventory = (parseInt(inventory) + parseInt(addInventory)) - parseInt(takeInventory);
    if (newInventory < 4) {
    alert("Buy more!");
} else {
    alert("The current inventory is: " + newInventory);
    }
    document.getElementById('food').innerText = newInventory;
}
