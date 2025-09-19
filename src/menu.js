const menuBtn = document.getElementById("menu-btn");

export function displayMenu() {
  menuBtn.addEventListener("click", () => {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const menu = document.createElement("h2");
    menu.textContent = "Menu";
    content.appendChild(menu);
  });
}
