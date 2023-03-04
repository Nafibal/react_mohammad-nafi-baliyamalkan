// DOM SELECTOR
const form = document.querySelector(".form");
const productNameInput = document.querySelector(".product_name");
const productPriceInput = document.querySelector(".product_price");

// Variables
const MAX_CHAR_PER_INPUT = 25;

const checkMaxInputChar = (element, maxChar) => {
  return element.value.length > maxChar;
};
const checkBlankInput = (element) => {
  return element.value == "";
};

form.addEventListener("submit", () => {
  if (checkMaxInputChar(productNameInput, MAX_CHAR_PER_INPUT)) {
    alert("Product name must not exceed 25 characters!!!");
  }
  if (checkBlankInput(productNameInput) || checkBlankInput(productPriceInput)) {
    alert("field must not be blank!!!");
  }
});
