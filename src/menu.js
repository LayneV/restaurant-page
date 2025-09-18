const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  const menu = document.createElement("h1");
  menu.textContent = "Menu";
  content.appendChild(menu);
});
