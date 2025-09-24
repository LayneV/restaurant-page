
import menuImg from "./burgermenu.jpg";

export function displayMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const menuDivContent = document.createElement('div');
  menuDivContent.id = "menu-div-content";
  content.appendChild(menuDivContent);
  const menu = document.createElement("h2");
  menu.textContent = "Menu";
  menuDivContent.appendChild(menu);

  const menuDiv = document.createElement("div");
  menuDiv.id = "menu-div";
  menuDivContent.appendChild(menuDiv);

  createMenuItems();

  function createMenuItems() {
    for (let i = 1; i <= 8; i++) {
      const div = document.createElement("div");
      div.classList.add("menu-item");
      div.id = `menu-item-${i}`;
      div.textContent = `Burger ${i}`;

      const img = document.createElement("img");
      img.src = menuImg;
      img.alt = `Burger ${i}`;
      img.classList.add("menu-burger");

      div.appendChild(img);

      menuDiv.appendChild(div);
    }
  }
}
