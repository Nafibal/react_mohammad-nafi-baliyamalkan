# Resume Materi KMReact – Global State Management and Data Fetching

---

### Redux

Redux adalah sebuah **kontainer state** yang _predictable_ dari sebuah **Aplikasi Javascript\***

- **Aplikasi Javascript**
  Redux adalah sebuah _library_ untuk aplikasi javascript, yang berarti redux tidak hanya terikat pada React saja. Kita dapat menggunakan redux dengan react, vue, angular, bahkan vanilla javascript
- **State Container**
  Redux menyimpan state dari aplikasi kita. Dalam react, jika kita menggunakan redux, kita dapat mengakses state yang kita punya dari semua komponen tanpa harus melakukan _prop drilling_ terlebih dahulu

### Redux Toolkit

Redux Toolkit (RTK) adalah sebuah toolkit yang membantu kita untuk menggunakan redux dengan lebih efisien. RTK juga dianggap sebagai cara standar untuk menulis redux pada saat ini. RTK memberikan sebuah abstraksi yang lebih simpel daripada redux. Ia menyembunyikan bagian2 yang rumit sehingga kita mendapatkan _developer experience_ yang baik

### React-Redux

Reacr-Redux merupakan sebuah UI binding library resmi dari redux untuk react

### Konsep Utama

- **Store** : menyimpan state dari aplikasi
- **Action** : menjelaskan apa yang terjadi pada aplikasi
- **Reducer** : mengatasi _Action_ dan menentukan bagaimana cara meng-_update_ state
