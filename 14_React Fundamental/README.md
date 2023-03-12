# Resume Materi KMReact – React Fundamental

---

### JSX

JSX adalah sebuah ekstensi dalam javascript yang memungkinkan kita menulis syntax HTML dalam javascript. Dengan adanya JSX, kita dapat memanfaatkan konsep _separation of concern_ alih-alih _separation of technology_.

### React Component

_React Component_ adalah sebuah kumpulan kode yang membentuk suatu unit UI dalam reactjs. Biasanya sebuah _react component_ digunakan untuk menentukan tampilan, behaviour, dan state dari sebuah UI.

Kita dapat membuat sebuah komponen melalui dua cara, yaitu dengan functional component dan juga class component. Namun pada saat ini, kita dianjurkan menggunakan functional component alih-alih class component. Hal ini dikarenakan penulisan dari functional lebih simpel, dan juga penggunakan dari react hooks.

### Props

Props adalah suatu data dalam sebuah komponen yang didapat dari komponen parent-nya. Props dapat membuat komponen kita lebih dinamis. Kita dapat mengirimkan prop dengan menuliskannya sebagai argumen pada komponen yang dituju.

### Component Composition

Terdapat dua komposisi komponen dalam reactJs.

- **Containment**
  Komponen containment adalah sebuah komponen yang menjadi sebuah pembungkus / container. Kita dapat menggunakan komponen ini dengan menuliskan `{props.children}` pada bagian yang ingin kita jadikan isi dari komponen tersebut.
- **Specialize**
  Komponen specialize adalah sebuah komponen yang menggunakan prop sebagai data untuk komponen itu sendiri

### Lifecycle

Terdapat 4 metode lifestyle umum pada reactJs, yaitu

1. render()
2. componentDidMount()
3. componentDidUpdate()
4. componentWillUnmount()

Metode lifecycle lainnya:

1. shouldComponentUpdate()
2. static getDerivedStateFromProps()
3. getSnapshotBeforeUpdate()
