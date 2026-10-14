// Create an array with three item names
let item_names = ["Grape", "Carrot", "Orange"];

// Create an array with three item prices
let item_prices = [2, 3, 4];

// Create an array with three boolean values
let in_stock = [true, false, true];

// Get the first item name from the array
let first_item_name = item_names[0];

// Get the first item price from the array
let first_item_price = item_prices[0];

// Add one new item name to the array
item_names.push("Mango");

// Add one new price to the array
item_prices.push(5);

// Add one new stock value to the array
in_stock.push(false);

// Remove the last item name and store it in a variable
let last_item_name = item_names.pop();

// Remove the last item price and store it in a variable
let last_item_price = item_prices.pop();

// Remove the last stock value and store it in a variable
let last_item_stock = in_stock.pop();

// Display the results in the console
console.log("First item name:", first_item_name);
console.log("First item price:", first_item_price);
console.log("Last item name:", last_item_name);
console.log("Last item price:", last_item_price);
console.log("Last item stock:", last_item_stock);
