const mapOfUnits = new Map();

mapOfUnits.set('Enkroner', 0);
mapOfUnits.set('Femkroner', 0);
mapOfUnits.set('Tikroner', 0);
mapOfUnits.set('Tjuekroner', 0);
mapOfUnits.set('Femtikroner', 0);
mapOfUnits.set('Hundrekroner', 0);
mapOfUnits.set('Tohundrekroner', 0);
mapOfUnits.set('Femhundrekroner', 0);
mapOfUnits.set('Tusenkroner', 0);

//Cost of product
let productCost = 10250;

// Amount customer paid
let amountPaid = 20000;

// Different in product cost and amount paid
let restAmount = amountPaid - productCost;
console.log(restAmount);
const rest = restAmount;


// Take difference, and find kroner that is less than the difference but greater than the previous

while (restAmount > 0) {
    switch(true) {
        case (restAmount >= 1000):
          restAmount = (restAmount - 1000);
          mapOfUnits.set("Tusenkroner", mapOfUnits.get('Tusenkroner') + 1 || 0);
          break;
        case (restAmount >= 500):
          restAmount = (restAmount - 500);
          mapOfUnits.set("Femhundrekroner", mapOfUnits.get('Femhundrekroner') + 1 || 0);
          break;
        case (restAmount >= 200):
          restAmount = (restAmount - 200);
          mapOfUnits.set("Tohundrekroner", mapOfUnits.get('Tohundrekroner') + 1 || 0);
          break;
        case (restAmount >= 100):
          restAmount = (restAmount - 100);
          mapOfUnits.set("Hundrekroner", mapOfUnits.get('Hundrekroner') + 1 || 0);
          break;
        case (restAmount >= 50 ):
          restAmount = (restAmount - 50);
          mapOfUnits.set("Femtikroner", mapOfUnits.get('Femtikroner') + 1 || 0);
          break;
        case (restAmount >= 20):
          restAmount = (restAmount - 20);
          mapOfUnits.set("Tjuekroner", mapOfUnits.get('Tjuekroner') + 1 || 0);
          break;
        case (restAmount >= 10):
          restAmount = (restAmount - 10);
          mapOfUnits.set("Tikroner", mapOfUnits.get('Tikroner') + 1 || 0);
          break;
        case (restAmount === 5):
          restAmount = (restAmount - 5);
          mapOfUnits.set("Femkroner", mapOfUnits.get('Femkroner') + 1 || 0);
          break;
        default:
          console.log("You didn't enter a number!");
    }
    console.log(mapOfUnits);
    console.log("Your change is " + rest);
}

