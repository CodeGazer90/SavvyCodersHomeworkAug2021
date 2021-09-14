// select all unordered list (ul) elements
console.log(document.getElementsByTagName("ul"));
// select all elements with the class "class-week"
console.log(document.getElementsByClassName("class-week"));
console.log(document.querySelectorAll(".class-week"));
// select all elements with the class "nav-bar"
console.log(document.querySelectorAll(".nav-bar"));
console.log(document.getElementsByClassName("nav-bar"));
// select the element with the id "dog-picture" and save it to a variable
const dogPicHtml = document.querySelector("#dog-picture");
console.log(dogPicHtml);
