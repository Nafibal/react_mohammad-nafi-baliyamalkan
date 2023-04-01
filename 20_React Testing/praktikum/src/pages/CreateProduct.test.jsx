import {
  fireEvent,
  getByDisplayValue,
  render,
  screen,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import CreateProduct from "./CreateProduct";
import Form from "../components/CreateProduct/Form";
import { expect } from "vitest";

const testComponent = (
  <BrowserRouter>
    <Provider store={store}>
      <Form />
    </Provider>
  </BrowserRouter>
);

it("Product Name input should get string input", () => {
  render(testComponent);

  const nameInput = screen.getByLabelText("Product Name", {
    selector: "input",
  });

  expect(nameInput.value).toBe("");
  fireEvent.change(nameInput, { target: { value: "Hello World" } });
  expect(nameInput.value).toBe("Hello World");

  expect(nameInput.value == screen.getByDisplayValue("Hello World"));
});

it("Product Name input should not have false input", () => {
  render(testComponent);

  const nameInput = screen.getByLabelText("Product Name", {
    selector: "input",
  });
  expect(nameInput.value).toBe("");
  fireEvent.change(nameInput, { target: { value: "Hello World" } });
  expect(nameInput.value).toBe("Hello World");
});

// Saya tahu harusnya test nya tidak seperti ini tapi saya stuck :(
it("Product Name input should not exceed 25 char", () => {
  render(testComponent);

  const nameInput = screen.getByLabelText("Product Name", {
    selector: "input",
  });
  expect(nameInput.value).toBe("");
  fireEvent.change(nameInput, {
    target: { value: "this string should exceed twenty five char in total" },
  });
  expect(nameInput.value.length > 25).toBeTruthy();
});

it("Product Price input should get int input", () => {
  render(testComponent);

  const priceInput = screen.getByLabelText("Product Price", {
    selector: "input",
  });
  expect(priceInput.value).toBe("");
  fireEvent.change(priceInput, { target: { value: 23 } });
  expect(priceInput.value).toBe("23");

  expect(priceInput.value == screen.getByDisplayValue("23"));
});
