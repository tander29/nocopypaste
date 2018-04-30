//why do i need to get element by id--i can just append hellow world to page as is
//I can make a div, then append the below p to that div instead of to the body
//or I could just append a new element to body

let getdiv = document.getElementById(littlediv);
const textbox = document.createElement("p");
littlediv.appendChild(textbox);
let hellonode = document.createTextNode("Hello World");
textbox.appendChild(hellonode);
