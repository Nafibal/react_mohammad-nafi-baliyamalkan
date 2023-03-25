# Resume Materi KMReact – React Form

---

### Controlled Component

_Controlled Component_ adalah salah satu jenis dari form pada react. Pada _controlled component_, data dari form diatur menggunakan _state_ yang ada pada React. Kita dapat menggunakan _event handler_ untuk setiap perubahan _state_ pada _form_. Karena kita dapat mengontrol _behavior_ dari form berkat state yang kita punya, maka jenis form ini disebut _controlled component_

### Uncontrolled Component

_Uncontrolled Component_ adalah salah satu jenis form pada React. Pada _uncontrolled component_, data dari form akan ditangani oleh DOM-nya sendiri. Kita dapat menggunakan ref untuk mendapatkan nilai dari DOM. Menggunakan _uncontrolled component_ lebih mudah dibanding menggunakan _controlled component_.

### Permasalahan

Permasalahan umum yang biasa dihadapi oleh developer React adalah tentang _rendering_. Performa aplikasi React kita akan menurun jika terjadi banyak sekali _re-rendering_ yang dirasa kurang perlu. Saat kita menggunakan _controlled component_, _re-render_ akan selalu terjadi setiap kita mengubah state dari input form. Hal ini dapat mengurangi performa dari aplikasi kita jika kita mempunyai banyak komponen yang perlu di-_render_.

Bagaimana cara kita agar dapat mengurangi jumlah _render_ yang tidak perlu namun masih mendapatkan kontrol penuh dari _controlled component_? Cara yang dapat kita lakukan adalah dengan menggabungkan penggunaan _controlled component_ dengan _uncontrolled component_ atau menggunakan _library_ eksternal seperti [React Hook Form](https://react-hook-form.com/)
