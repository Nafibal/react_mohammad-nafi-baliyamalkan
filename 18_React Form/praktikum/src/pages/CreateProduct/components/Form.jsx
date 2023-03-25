import React, { useState } from "react";

const Form = ({
  handleSubmit,
  lang,
  languageData: {
    title,
    productName,
    productCategory,
    productFreshness,
    productImage,
    productDescription,
    productPrice,
    submit,
  },
}) => {
  // const [descValidation, setDescValidation] = useState(false);
  const [nameValidation, setNameValidation] = useState(false);
  const [priceValidation, setPriceValidation] = useState(false);

  const [nameValue, setNameValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("Buah");
  const [freshnessValue, setFreshnessValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

  return (
    <form
      action=""
      className="form w-50 mx-auto mb-5 needs-validation"
      noValidate=""
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({
          nameValue,
          categoryValue,
          freshnessValue,
          priceValue,
        });
      }}
    >
      <h2>{title[lang]}</h2>
      <div className="mb-3">
        <label className="form-label" htmlFor="product_name">
          {productName[lang]} :
        </label>
        <br />
        <input
          className="form-control"
          type="text"
          id="product_name"
          name="product_name"
          required
          value={nameValue}
          onChange={(e) => {
            setNameValue(e.target.value);

            if (e.target.value.length < 10) {
              setNameValidation(false);
              e.target.style.border = "4px solid red";
              return;
            }
            setNameValidation(true);
            e.target.style.border = "none";
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="product_category">
          {productCategory[lang]} :
        </label>
        <br />
        <select
          className="form-select"
          name="product_category"
          id="product_category"
          required
          onChange={(e) => setCategoryValue(e.target.value)}
        >
          <option value="Buah">Buah</option>
          <option value="Sayur">Sayur</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="freshness">
          {productFreshness[lang]} :
        </label>
        <br />
        <input
          type="radio"
          id="brand_new"
          name="freshness"
          defaultValue="brand_new"
          required
          onChange={(e) => setFreshnessValue(e.target.value)}
        />
        <label className="form-label ms-2" htmlFor="brand_new">
          Brand New
        </label>
        <br />
        <input
          type="radio"
          id="second_hank"
          name="freshness"
          defaultValue="second_hank"
          required=""
          onChange={(e) => setFreshnessValue(e.target.value)}
        />
        <label className="form-label ms-2" htmlFor="second_hank">
          Second Hank
        </label>
        <br />
        <input
          type="radio"
          id="refurbished"
          name="freshness"
          defaultValue="refurbished"
          required=""
          onChange={(e) => setFreshnessValue(e.target.value)}
        />
        <label className="form-label ms-2" htmlFor="refurbished">
          Refurbished
        </label>
      </div>
      {/* <div className="mb-3">
        <label className="form-label" htmlFor="product_image">
          {productImage[lang]} :
        </label>
        <input
          className="form-control"
          type="file"
          name="product_image"
          id="product_image"
        />
        <div className="valid-feedback">Sudah benar!</div>
        <div className="invalid-feedback">Masih salah!</div>
      </div> */}
      {/* <div className="mb-3">
        <label className="form-label" htmlFor="product_description">
          {productDescription[lang]} :
        </label>
        <br />
        <textarea
          className="form-control"
          name="product_description"
          id="product_description"
          cols={30}
          rows={10}
          required=""
          defaultValue={""}
          onChange={(e) => {
            if (e.target.value.length < 1) {
              setDescValidation(false);
              e.target.style.border = "4px solid red";
              return;
            }
            setDescValidation(true);
            e.target.style.border = "none";
          }}
        />
        <div className="valid-feedback">Sudah benar!</div>
        <div className="invalid-feedback">Masih salah!</div>
      </div> */}
      <div className="mb-5">
        <label className="form-label" htmlFor="product_price">
          {productPrice[lang]} :
        </label>
        <br />
        <input
          className="form-control"
          type="number"
          name="product_price"
          id="product_price"
          placeholder="$ 100"
          required
          onChange={(e) => {
            if (e.target.value.length < 1 || e.target.value < 0) {
              setPriceValidation(false);
              setPriceValue(e.target.value);
              e.target.style.border = "4px solid red";
              return;
            }
            setPriceValidation(true);
            setPriceValue(e.target.value);
            e.target.style.border = "none";
          }}
        />
      </div>
      <button className="btn btn-primary w-100" type="submit">
        {submit[lang]}
      </button>
    </form>
  );
};

export default Form;
