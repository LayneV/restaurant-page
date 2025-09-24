import restaurantImg from "./burger.jpg";

function createHomeContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const homeDiv = document.createElement("div");
  homeDiv.className = "home-div";

  const homeText = document.createElement("div");
  homeText.className = "home-text";

  const heading = document.createElement("h2");
  heading.textContent = "Voted #1 Burgers in the Nation!";

  const restaurantInfo = document.createElement("div");
  restaurantInfo.textContent = `We take every burger seriously. From perfectly seasoned, juicy beef patties to melted cheese, fresh toppings, and toasted brioche buns, every bite is crafted to deliver maximum flavor and satisfaction. Whether you’re craving a classic or something bold and adventurous, our burgers are made to impress. Come taste why we're the best!`;
  const img = document.createElement("img");
  img.src = restaurantImg;
  img.alt = "Burger";
  img.id = "home-burger";

  homeText.appendChild(heading);
  homeText.appendChild(restaurantInfo);
  homeDiv.appendChild(homeText);
  homeDiv.appendChild(img);
  content.appendChild(homeDiv);
}

export function displayHome() {
  createHomeContent();
}
