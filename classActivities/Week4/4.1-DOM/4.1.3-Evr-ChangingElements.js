// print the outer HTML of the navigation bar
const navBar = document.querySelector(".nav-bar");
console.log(navBar.outerHTML);
// print the inner HTML of the navigation bar
console.log(navBar.innerHTML);
// print the text content of the #class-schedule-list element
console.log(document.querySelector("#class-schedule-list").textContent);
// select the classList for the first class-week, then add the class "week-1"
const firstClassWeek = document.querySelector(".class-week");
firstClassWeek.classList.add("week-1");
console.log(firstClassWeek);
// select the img element and add a src attribute
document.querySelector("img").src =
  "https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60";
// change the font color of the h1 element
document.querySelector("h1").style.color = "black";
