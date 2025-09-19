const contactBtn = document.getElementById("contact-btn");

export function displayContact() {
  contactBtn.addEventListener("click", () => {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const contactDiv = document.createElement("div");
    contactDiv.className = "contact-div";
    content.appendChild(contactDiv);

    const contact = document.createElement("h2");
    contact.textContent = "Contact Us";
    contactDiv.appendChild(contact);

    const form = document.createElement("form");

    const nameDiv = document.createElement("div");
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Name:";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.required = true;

    const emailDiv = document.createElement("div");
    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email:";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.required = true;

    const messageDiv = document.createElement("div");
    messageDiv.className = "message-div";
    const messageLabel = document.createElement("label");
    messageLabel.setAttribute("for", "message");
    messageLabel.textContent = "Message:";
    const messageInput = document.createElement("textarea");
    messageInput.setAttribute("id", "message");
    messageInput.required = true;

    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Submit";

    nameDiv.append(nameLabel, nameInput);
    emailDiv.append(emailLabel, emailInput);
    messageDiv.append(messageLabel, messageInput);
    form.append(nameDiv, emailDiv, messageDiv, submitBtn);
    contactDiv.appendChild(form);
  });
}
