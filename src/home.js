const homeBtn = document.getElementById("home-btn");

export function displayHome() {
  homeBtn.addEventListener("click", () => {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const heading = document.createElement("h1");
    heading.textContent = "Restaurant Home Page";
    content.appendChild(heading);

    const restaurantInfo = document.createElement("div");
    restaurantInfo.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas";
    content.appendChild(restaurantInfo);
  });
}
