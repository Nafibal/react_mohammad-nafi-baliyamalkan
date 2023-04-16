import axios from "axios";
import { BASE_URL } from "../const";

export const submitProduct = (productInput) => {
  axios
    .post(BASE_URL, productInput)
    .then((res) => {
      alert(`${res.data.productName} berhasil ditambahkan`);
    })
    .catch((err) => {
      alert("Produk gagal ditambahkan");
    });
};

export const editProduct = (id, productInput) => {
  axios
    .put(`${BASE_URL}/${id}`, productInput)
    .then((res) => {
      alert("Produk berhasil diubah");
    })
    .catch((err) => {
      alert("Produk gagal diubah");
    });
};

export const deleteProduct = (id) => {
  axios.delete(`${BASE_URL}/${id}`);
};
