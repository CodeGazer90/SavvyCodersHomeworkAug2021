//create two variables: pizzaPlace and numberOfToppings
const pizzaPlace = "kenellesPizzaShop";
let numberOfToppings = 5;

//Print the variables and their types.
console.log(pizzaPlace);
console.log(typeof "kenellesPizzaShop");
console.log(numberOfToppings);
console.log(typeof 5);

//Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
console.log(`Here at ${pizzaPlace}, we have ${numberOfToppings} toppings.`);

//Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
