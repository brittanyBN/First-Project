const fridgeStorage = new Map();
const fridgeHistory = [];

const products = [
    {name: "Tomato", price: 0.30, amount: 4},
    {name: "Potato", price: 0.80, amount: 6},
    {name: "Onion", price: 0.40, amount: 8},
    {name: "Carrot", price: 0.50, amount: 5},
    {name: "Celery", price: 1.00, amount: 7},
    {name: "Lettuce", price: 1.20, amount: 5},
    {name: "Spinach", price: 1.10, amount: 4},
    {name: "Cabbage", price: 1.60, amount: 4},
    {name: "Beetroot", price: 0.70, amount: 9},
    {name: "Turnip", price: 0.60, amount: 6},
    {name: "Parsnip", price: 0.90, amount: 8},
    {name: "Mushroom", price: 1.40, amount: 5}

];


    $("#addItems").click(function () {
        let amount = $("#amount").val();
        let employee = "Brittany";
        let selectedOption = $("#products option:selected").val();
        if(amount < 0 || !employee || selectedOption === "0" || amount === "") {
            alert("Enter number of items being added and employee name");
        } else if (amount > 100) {
            alert("You can't add more than 100 items at once");
        } else {
            addToStorage(employee, selectedOption, parseInt(amount));
        }
        priceStorage();
    });

  
function priceStorage() {
    let totalAmount = 0;

    for(let i = 0; i < products.length; i++) {
            let amount = products[i].amount;
            let price = products[i].price;
            let total = amount * price;
            totalAmount += total;
    }
    $("#price").replaceWith("<p id='price'>" + totalAmount.toFixed(2) + "$" + "</p>");
}


// function priceStorage(); // for the total price of
// function dateFinder(); // for the date in the history
// function updateHistory(); // to update the history whenever there is an add or removal from the storage.
// function updateStorage(); // to update the storage whenever there is an add or removal from the storage.
// function addToStorage(); // to add items to the storage.
// function removeFromStorage(); // to remove items from the storage.