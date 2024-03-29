import React, { useState, useRef } from "react";

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
  const [isNameError, setIsNameError] = useState(false);
  const [isDescError, setIsDescError] = useState(false);
  const [isPriceError, setIsPriceError] = useState(false);

  const nameInput = useRef(null);
  const categoryInput = useRef("Buah");
  const [freshnessInput, setFreshnessInput] = useState("brand_new");
  const [image, setImage] = useState();
  const descInput = useRef(null);
  const priceInput = useRef(null);

  return (
    <form
      action=""
      className="form w-50 mx-auto mb-5 needs-validation"
      noValidate=""
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({
          nameValue: nameInput.current.value,
          categoryValue: categoryInput.current.value,
          freshnessValue: freshnessInput,
          imageValue: image,
          descValue: descInput.current.value,
          priceValue: priceInput.current.value,
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
          ref={nameInput}
          onChange={(e) => {
            let regex = new RegExp(/[@/#\{\}]/);
            setIsNameError(regex.test(e.target.value));
          }}
        />
        {isNameError && (
          <p className="text-danger mt-2">
            Input tidak boleh mengandung simbol
          </p>
        )}
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
          ref={categoryInput}
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
          defaultChecked
          required
          onChange={(e) => setFreshnessInput(e.target.value)}
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
          onChange={(e) => setFreshnessInput(e.target.value)}
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
          onChange={(e) => setFreshnessInput(e.target.value)}
        />
        <label className="form-label ms-2" htmlFor="refurbished">
          Refurbished
        </label>
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
          required
          onChange={(e) => {
            setImage(URL.createObjectURL(e.target.files[0]));
          }}
        />
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
          ref={descInput}
          onChange={(e) => {
            let regex = new RegExp(/[@/#\{\}]/);
            setIsDescError(regex.test(e.target.value));
          }}
        />
        {isDescError && (
          <p className="text-danger mt-2">
            Input tidak boleh mengandung simbol
          </p>
        )}
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
          ref={priceInput}
          onChange={(e) => {
            let value = e.target.value;
            setIsPriceError(value < 0);
          }}
        />
        {isPriceError && (
          <p className="text-danger mt-2">Input tidak boleh negatif</p>
        )}
      </div>
      <button className="btn btn-primary w-100" type="submit">
        {submit[lang]}
      </button>
    </form>
  );
};

export default Form;
