import React from "react";

const Form = () => {
  return (
    <form
      action=""
      className="form w-50 mx-auto mb-5 needs-validation"
      noValidate=""
    >
      <h2>Detail Product</h2>
      <div className="mb-3">
        <label className="form-label" htmlFor="product_name">
          Product name :
        </label>
        <br />
        <input
          className="form-control"
          type="text"
          id="product_name"
          name="product_name"
          required=""
          minLength={6}
          maxLength={50}
        />
        <div className="valid-feedback">Sudah benar!</div>
        <div className="invalid-feedback">Masih salah!</div>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="product_category">
          Product Category :
        </label>
        <br />
        <select
          className="form-select"
          name="product_category"
          id="product_category"
          required=""
        >
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
        <div className="valid-feedback">Sudah benar!</div>
        <div className="invalid-feedback">Masih salah!</div>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="freshness">
          Product Freshness
        </label>
        <br />
        <input
          type="radio"
          id="brand_new"
          name="freshness"
          defaultValue="brand_new"
          required=""
        />
        <label className="form-label" htmlFor="brand_new">
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
        <label className="form-label" htmlFor="second_hank">
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
        <label className="form-label" htmlFor="refurbished">
          Refurbished
        </label>
        <div className="valid-feedback">Sudah benar!</div>
        <div className="invalid-feedback">Masih salah!</div>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="product_image">
          Image for Product
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
          additional Description
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
        />
        <div className="valid-feedback">Sudah benar!</div>
        <div className="invalid-feedback">Masih salah!</div>
      </div>
      <div className="mb-5">
        <label className="form-label" htmlFor="product_price">
          Product price :
        </label>
        <br />
        <input
          className="form-control"
          type="number"
          name="product_price"
          id="product_price"
          placeholder="$ 100"
          required=""
        />
        <div className="valid-feedback">Sudah benar!</div>
        <div className="invalid-feedback">Masih salah!</div>
      </div>
      <button className="btn btn-primary w-100" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
