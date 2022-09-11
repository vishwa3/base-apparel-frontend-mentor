"use strict";

const container = document.querySelector(".input-email");
const inputField = document.querySelector("#email");

const submitButton = document
  .querySelector(".error-submit-container")
  .getElementsByTagName("button")[0];
const errorMessage = document.querySelector(".error");
const errorIcon = document
  .querySelector(".error-submit-container")
  .getElementsByTagName("img")[0];

const isEmpty = (str = "") => !str.trim().length;
const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};
const delay = (ms) =>
  new Promise((resolve) =>
    setInterval(() => {
      resolve();
    }, ms)
  );

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();
  if (isEmpty(inputField.value) || !validateEmail(inputField.value)) {
    errorMessage.style.visibility = "visible";
    errorIcon.style.visibility = "visible";
    inputField.style.border = "1px solid red";
    await delay(1000);
    errorMessage.style.visibility = "hidden";
    errorIcon.style.visibility = "hidden";
    inputField.style.border = " 1px solid hsl(0deg, 36%, 70%)";
  } else {
    const successMessage = document.createElement("p");
    const newText = document.createTextNode(
      "Thank you for subscribing to our newsletter"
    );
    successMessage.appendChild(newText);
    successMessage.style.color = "green";
    successMessage.style.margin = ".5rem 0 0 1.5rem";
    container.after(container, successMessage);
    await delay(1000);
    successMessage.remove();
    inputField.value = "";
  }
});
