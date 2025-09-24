import "./styles.css";
import { displayHome } from "./home.js";
import { displayMenu } from "./menu.js";
import { displayContact } from "./contact.js";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

function setActive(button) {
  [homeBtn, menuBtn, contactBtn].forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
}

displayHome();
setActive(homeBtn);

homeBtn.addEventListener("click", () => { 
  displayHome(); 
  setActive(homeBtn); 
});
menuBtn.addEventListener("click", () => { 
  displayMenu(); 
  setActive(menuBtn); 
});
contactBtn.addEventListener("click", () => { 
  displayContact(); 
  setActive(contactBtn); 
});
