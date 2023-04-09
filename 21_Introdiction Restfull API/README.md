# Resume Materi KMReact – Introduction Restfull API

---

### API

API (_Application Programming Interface_) adalah sebuah kumpulan fungsi dan prosedur untuk berkomunikasi antara dua layanan yang berbeda. Saat ingin menggunakan layanan API, biasanya klien akan mengirimkan sebuah _request_ kepada server, dan server akan mengirimkan _response_ kembali kepada klien.

### RESTful API

REST (_Representational State Transfer_) API adalah salah satu arsitektur dari penggunaan API. Layanan ini menggunakan http 1.1. Layanan ini biasanya menggunakan metode HTTP berupa:

1. **GET**, berfungsi untuk membaca data/resource dari REST server
2. **POST**, berfungsi untuk membuat sebuah data/resource baru di REST server
3. **PUT**, berfungsi untuk memperbaharui data/resource di REST server
4. **DELETE**, berfungsi untuk menghapus data/resource dari REST serve
5. **OPTIONS**, berfungsi untuk mendapatkan operasi yang disupport pada resource dari REST server.

### JSON

JSON (_Javascript Object Notation_) adalah salah satu format data yang paling umum dipakai pada penggunaan REST API. Penulisan pada JSON memiliki format yang sama dengan penulisan object pada javascript

### HTTP Status Code

HTTP status code merupakan sebuah response yang didapatkan setelah kita melakukan sebuah request. Saat kita menggunakan REST API, kita akan mendapatkan status code ini sebagai deskripsi hasil yang kita dapatkan.
Berbagai macam status code dan penjelasannya dapat dilihat pada [laman berikut](https://restfulapi.net/http-status-codes/)
