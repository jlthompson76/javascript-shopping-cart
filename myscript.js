let customerName = prompt("Welcome to My Shopping Cart app! What is your name?");
alert(`Hi, ${customerName}, it's nice to meet you! I'll be your shopping assistant today. Are you ready to add items to your cart?`);

let product1Name = prompt("Please enter the name of the first product you'd like to add to your shopping cart:");
let product1Price = prompt(`What is the price of ${product1Name}? Please enter it below:`);

if (product1Price <= 0) {
    product1Price = prompt(`The price can't be zero or blank. Please enter a valid price for ${product1Name}.`);
}

product1Price = Number(product1Price);

let product2Name = prompt("Please enter the name of the second product you'd like to add to your shopping cart:");
let product2Price = prompt(`What is the price of ${product2Name}? Please enter it below:`);

if (product2Price <= 0) {
    product2Price = prompt(`The price can't be zero or blank. Please enter a valid price for ${product2Name}.`);
}

product2Price = Number(product2Price);

let product3Name = prompt("Please enter the name of the third product you'd like to add to your shopping cart:");
let product3Price = prompt(`What is the price of ${product3Name}? Please enter it below:`);

if (product3Price <= 0) {
    product3Price = prompt(`The price can't be zero or blank. Please enter a valid price for ${product3Name}.`);
}

product3Price = Number(product3Price);

let subTotal = product1Price + product2Price + product3Price;
console.log(`Here are the items in your shopping cart:`);
console.log(`${product1Name} $${product1Price.toFixed(2)}`);
console.log(`${product2Name} $${product2Price.toFixed(2)}`);
console.log(`${product3Name} $${product3Price.toFixed(2)}`);
console.log(`Your subtotal is $${subTotal.toFixed(2)}.`);

const salesTax = .0625;
const salesTaxRate = salesTax * 100;
let grandTotal = subTotal + (subTotal * salesTax);
grandTotal = grandTotal.toFixed(2);
console.log(`${customerName}, your grand total (including ${salesTaxRate}% sales tax) is: $${grandTotal}.`);
console.log("Thank you for shopping with us today!");
