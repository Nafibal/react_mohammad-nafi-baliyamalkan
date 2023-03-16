import React, { useState } from "react";

const Form = ({
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
  const [nameValidation, setNameValidation] = useState(false);
  const [descValidation, setDescValidation] = useState(false);
  const [priceValidation, setPriceValidation] = useState(false);

  return (
    <form
      action=""
      className="form w-50 mx-auto mb-5 needs-validation"
      noValidate=""
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
          onChange={(e) => {
            if (e.target.value.length < 10) {
              setNameValidation(false);
              e.target.style.border = "4px solid red";
              return;
            }
            setNameValidation(true);
            e.target.style.border = "none";
          }}
        />
        <div className="valid-feedback">Sudah benar!</div>
        <div className="invalid-feedback">Masih salah!</div>
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
          required=""
        >
          <option value={1}>Buah</option>
          <option value={2}>Sayur</option>
          <option value={3}>Lainnya</option>
        </select>
        <div className="valid-feedback">Sudah benar!</div>
        <div className="invalid-feedback">Masih salah!</div>
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
          required=""
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
        />
        <label className="form-label ms-2" htmlFor="refurbished">
          Refurbished
        </label>
        <div className="valid-feedback">Sudah benar!</div>
        <div className="invalid-feedback">Masih salah!</div>
      </div>
      <div className="mb-3">
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
      </div>
      <div className="mb-3">
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
      </div>
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
              e.target.style.border = "4px solid red";
              return;
            }
            setPriceValidation(true);
            e.target.style.border = "none";
          }}
        />
        <div className="valid-feedback">Sudah benar!</div>
        <div className="invalid-feedback">Masih salah!</div>
      </div>
      <button className="btn btn-primary w-100" type="submit">
        {submit[lang]}
      </button>
    </form>
  );
};

export default Form;
