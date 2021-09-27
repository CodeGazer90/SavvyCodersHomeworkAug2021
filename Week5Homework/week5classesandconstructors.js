// In a new .js file, create a few classes. Create one "general category" class, then two more specific classes which extend from the first class.

// For example: Perhaps you are creating a web store that sells video games and game consoles.

// You could create a general Item class to hold properties that any and every item for sale shares in common, like id, name, or price.
// Then, extend Item with a class for GameConsoles and a class for VideoGames and include properties specific to each category of item.

class Item {
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
display(){
  return `Grab ${this.name} today priced at ${this.price}!`;
}
}

class GameConsoles extends Item{
  constructor(name, price, console){
    super(name, price);
    this.console = console;
  }
  display(){
  return`Grab ${this.name} today priced at ${this.price} for ${this.console} only!`;
}

class VideoGames extends Item, GameConsoles{
  constructor(name, price, console, year){
    super(name, price, console);
    this.year = year;
  }
  display(){
  return `Grab ${this.name} today priced at ${this.price} for ${this.console} only, before the end of 2021!`;
}

const game1 = new Item ("Strider", 30.39, "PS4", 2021);
const game2 = new Item ("Action", 25.99, "Xbox", 2021);

console.log(game1);
console.log(game2);
