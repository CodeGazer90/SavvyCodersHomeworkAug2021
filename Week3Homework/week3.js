// let pizzaToppings = ["Pepperoni", "Mushrooms", "Olives", "Basil"];

// function greetCustomer() {
//   console.log("Welcome to Pizza Tent! We have to following toppings:" + pizzaToppings);
// }

// greetCustomer();

// function getPizzaOrder(size, crust, ...toppings){

// }
//   getPizzaOrder();

// ------------------------------------------------------------------------------

// let pizzaToppings = ["Basil", "Pepperoni", "Mushrooms", "Olives"];

// for (let topping of pizzaToppings){
//    console.log(topping)};

// function greetCustomer(){
//   console.log(Welcome to Pizza Tent! We have to following toppings:);

// }// greetCustomer();
// ------------------------------------------------------
// for (let i = 0; i < pizzaToppings.length; i++){
//   console.log(pizzaToppings[i]);

// -------------------------------------------------------------------------------

// let greetCustomer = "Welcome to Pizza Tent! These are our toppings:";
let pizzaToppings = ["Basil", "Pepperoni", "Mushrooms", "Olives"];

function greetCustomer() {
  let greeting = "Welcome to Pizza Tent! We have the following options: ";
  for (let topping of pizzaToppings) {
    greeting += `${topping},`;
  }
  console.log(greeting);
}
greetCustomer();
// ----------------------------------------------------------------

function getPizzaOrder(size, crust, ...topping) {
  console.log(`One large thick crust pizza with ${pizzaToppings} coming up!`);
}
getPizzaOrder();

// -------------------------------------------------------------------
let ingredients = ["medium", "thin", "basil"];
let pizza = { size: "medium", crust: "thin", toppings: "basil" };

function preparePizza(ingredients) {
  console.log("...Cooking pizza...");
  console.log(pizza);
}
preparePizza();

// ----------------------------------------------------------------------
function servePizza() {
  console.log("Order up! Here's your medium, thin crust pizza with ");
  console.log(pizza);
}

servePizza();
