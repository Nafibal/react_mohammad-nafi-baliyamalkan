// DOM SELECTOR
const form = document.querySelector(".form");
const productNameInput = document.querySelector("#product_name");
const productNameCategory = document.querySelector("#product_category");
const productPriceInput = document.querySelector("#product_price");
const productDescInput = document.querySelector("#product_description");
const productFreshnessInput1 = document.querySelector("#brand_new");
const productFreshnessInput2 = document.querySelector("#second_hank");
const productFreshnessInput3 = document.querySelector("#refurbished");

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
const getCheckedRadioBtn = () => {
  if (productFreshnessInput1.checked) return productFreshnessInput1.value;
  if (productFreshnessInput2.checked) return productFreshnessInput2.value;
  if (productFreshnessInput3.checked) return productFreshnessInput3.value;
};

// console.log(checkInputSpecificChars("hello world", /[@/#\{\}]/));

// EventListeners
form.addEventListener("submit", () => {
  if (
    checkBlankInput(productNameInput) ||
    checkBlankInput(productPriceInput) ||
    checkBlankInput(productDescInput) ||
    getCheckedRadioBtn == undefined
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
