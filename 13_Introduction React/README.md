# Resume Materi KMReact – Introduction React

---

### Pengertian

Reactjs adalah sebuah library javascript yang ditujukan untuk membuat UI. Library ini diciptakan oleh facebook. Salah satu permasalahan yang diselesaikan oleh library ini adalah _separation of concern_, dimana sebuah komponen dapat ditujukan untuk sebuah fungsi tertentu. Tiga keunggulan yang ditawarkan oleh Reactjs adalah **declarative**, **component based**, dan **learn once, write everywhere**

### VDOM

VDOM (Virtual DOM) adalah sebuah representasi dari UI berbentuk javascript object yang disimpan pada memory. VDOM digunakan untuk menanggulangi permasalahan yang ada pada DOM manipulation biasa. Beberapa masalah yang dihadapi oleh DOM Manipulation biasa antara lain:

1. Dapat membuat kode kita berantakan
2. Sulit untuk mengingat state yang ada pada kode kita
3. Performanya lambat jika dibandingkan dengan javascript vanilla

### Set up Development Environment

Kita dapat membuat Development Environment untuk React dengan dua cara. Namun sebelum itu kita harus menginstall Node js terlebih dahulu.

Cara pertama kita dapat menggunakan react adalah dengan cara create-react-app
kita dapat melakukannya dengan memasukkan command berikut pada cli
`npx create-react-app [nama_project]`

Cara kedua adalah dengan menggunakan Vite. Kita dapat melakukannya dengan memasukkan command
`npm create vite`
Setelah itu beri nama project name nya, pilih react, dan pilih javascript
