# Resume Materi KMReact – CSS

---

### Pengertian

CSS (_Cascading Style Sheet_) merupakan sebuah aturan yang digunakan untuk meberi style pada sebuah halaman _website_. Untuk menggunakan CSS pada _website_ kita, terdapat 3 cara yang dapat kita gunakan:

1. Inline CSS : memberikan style langung di dalam tag html
2. Internal CSS : memberikan styling langsung pada file html di dalam tag head
3. Eksternal CSS : memberikan styling pada sebuah file berekstensi .css yang akan diimport pada tag head dalam sebuah file html

Dari 3 cara yang dapat digunakan di atas, _best practice_ nya menggunakan cara no. 3

### CSS Selector

Selector merupakan sebuah metode dalam CSS untuk menargetkan sebuah elemen pada file HTML. Metode ini bertujuan agar kita dapat memberikan styling pada elemen HTML yang kita inginkan. Terdapat beberapa cara untuk menggunakan selector:

1. menggunakan ID => ('#nama_id)
2. menggunakan Class => ('.nama_class')
3. menggunakan tag html => (nama_tag)

### Specificity

CSS Specificity merupakan sebuah nilai yang digunakan CSS sebagai acuan penggunaan syling. CSS akan menggunakan styling pada selector yang memiliki nilai specificity paling tinggi.
