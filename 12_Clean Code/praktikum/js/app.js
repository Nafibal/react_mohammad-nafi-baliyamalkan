// DOM SELECTOR
const form = document.querySelector(".form");
const productNameInput = document.querySelector("#product_name");
const productCategoryInput = document.querySelector("#product_category");
const productPriceInput = document.querySelector("#product_price");
const productDescInput = document.querySelector("#product_description");
const productFreshnessInput1 = document.querySelector("#brand_new");
const productFreshnessInput2 = document.querySelector("#second_hank");
const productFreshnessInput3 = document.querySelector("#refurbished");
const productTable = document.querySelector("#product_table");

// Variables
const MAX_CHAR_PER_INPUT = 25;
const FORBIDDEN_CHAR_REGEX = /[@/#\{\}]/;

// Validation Functions
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
const validateForm = () => {
  if (
    checkBlankInput(productNameInput) ||
    checkBlankInput(productPriceInput) ||
    checkBlankInput(productDescInput)
  ) {
    alert("field must not be blank!!!");
    return;
  }
  if (checkMaxInputChar(productNameInput, MAX_CHAR_PER_INPUT)) {
    alert("Product name must not exceed 25 characters!!!");
    return;
  }
  if (checkInputSpecificChars(productNameInput, FORBIDDEN_CHAR_REGEX)) {
    alert("Name must not contain symbols!!!");
    return;
  }
};

// Form Fuctions
const getFormValue = () => {
  radioValue = getCheckedRadioBtn();
  return {
    name: productNameInput.value,
    category: productCategoryInput.value,
    freshness: radioValue,
    image: "image.jpg",
    description: productDescInput.value,
    price: productPriceInput.value.toString(),
  };
};

// Add Product Functions
const createTableRow = (rowData) => {
  const row = document.createElement("tr");

  const rowNumber = document.createElement("th");
  row.appendChild(rowNumber);

  const productName = document.createElement("td");
  productName.innerText = rowData.name;
  row.appendChild(productName);

  const productCategory = document.createElement("td");
  productCategory.innerText = rowData.category;
  row.appendChild(productCategory);

  const productImage = document.createElement("td");
  productImage.innerText = rowData.image;
  row.appendChild(productImage);

  const productFreshness = document.createElement("td");
  productFreshness.innerText = rowData.freshness;
  row.appendChild(productFreshness);

  const productDescription = document.createElement("td");
  productDescription.innerText = rowData.description;
  row.appendChild(productDescription);

  const productPrice = document.createElement("td");
  productPrice.innerText = rowData.price;
  row.appendChild(productPrice);

  return row;
};

const insertTableRow = (rowData) => {
  const row = createTableRow(rowData);
  productTable.lastElementChild.appendChild(row);
};

const addProduct = (product) => {
  createTableRow(product);
  insertTableRow(product);
};

// EventListeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
  addProduct(getFormValue());
});
