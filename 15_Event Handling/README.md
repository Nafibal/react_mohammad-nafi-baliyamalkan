# Resume Materi KMReact – Event Handling

---

### State

_State_ adalah sebuah data yang berasal dari sebuah komponen. Berbeda dengan props yang didapat dari komponen _parent_-nya, state berasal dari dalam komponen itu sendiri. _State_ tidak dapat diakses dari komponen lainnya.

_State_ sendiri menentukan perilaku dari komponen yang kita punya. Kita dapat mengubah _state_ pada sebuah komponen menggunakan `setState`. Setiap kali kita mengubah _state_, akan terjadi _render_ ulang pada aplikasi kita.

### Stateful - Stateless

- **Stateful**
  Komponen stateful adalah komponen yang memiliki sebuah state. Karena memiliki state, komponen ini bersifat dinamis dan memiliki sebuah _life cycle_. Oleh karena itu komponen stateful biasanya memiliki logika tersendiri dalam sebuah aplikasi
- **Stateless**
  Komponen stateless adalah komponen yang tidak memiliki sebuah state. Biasanya komponen ini hanya digunakan untuk merepresentasikan suatu UI.

### Event Handling

Event Handling adalah metode penanganan sebuah masukan yang dilakukan oleh pengguna pada aplikasi kita. Terdapat banyak sekali event yang dapat dilakukan pengguna.

Untuk list lengkap event apa saja yang dapat kita gunakan dapat dilihat [di sini](https://reactjs.org/docs/events.html#form-events)
