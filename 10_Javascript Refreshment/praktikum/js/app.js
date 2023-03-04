// DOM SELECTOR
const form = document.querySelector(".form");
const productNameInput = document.querySelector("#product_name");
const productPriceInput = document.querySelector("#product_price");
const productDescInput = document.querySelector("#product_description");

// Variables
const MAX_CHAR_PER_INPUT = 25;
const FORBIDDEN_CHAR_REGEX = /[@/#\{\}]/;

// Functions
const checkMaxInputChar = (element, maxChar) => {
  return element.value.length > maxChar;
};
const checkBlankInput = (element) => {
  return element.value == "";
};
const checkInputSpecificChars = (element, charRegex) => {
  let regex = new RegExp(charRegex);
  return regex.test(element.value);
};

// console.log(checkInputSpecificChars("hello world", /[@/#\{\}]/));

// EventListeners
form.addEventListener("submit", () => {
  if (
    checkBlankInput(productNameInput) ||
    checkBlankInput(productPriceInput) ||
    checkBlankInput(productDescInput)
  ) {
    alert("field must not be blank!!!");
  }
  if (checkMaxInputChar(productNameInput, MAX_CHAR_PER_INPUT)) {
    alert("Product name must not exceed 25 characters!!!");
  }
  if (checkInputSpecificChars(productNameInput, FORBIDDEN_CHAR_REGEX)) {
    alert("Name must not contain symbols!!!");
  }
});
