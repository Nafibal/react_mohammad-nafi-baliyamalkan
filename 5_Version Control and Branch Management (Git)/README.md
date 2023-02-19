# Resume Materi KMReact – Version Control and Branch Management (Git)

---

### Urgensi

Dalam dunia programming, version control dan branch management merupakan hal yang sangat penting. Dengan adanya kedua hal tersebut, seorang programmer dapat mengatur versi kode yang dimiliki tanpa harus takut menimbulkan kesalahan fatal pada sisi production, dan juga memudahkan sekelompok programmer untuk berkontribusi dalam mengembangkan aplikasi secara bersama-sama.

### Tools

Salah satu tools yang dapat digunakan untuk melakukan version control adalah version control system (vcs). Terdapat tiga jenis vcs, yaitu Single User, Centralized, dan Distributed. Salah satu version control system terpopuler saat ini adalah git.

### Workflow Collaboration

Dalam git sendiri, terdapat beberapa poin penting yang dapat kita terapkan dalam proyek kita.

1. Jangan pernah mengedit pada branch master/main secara langsung
2. disarankan untuk menghindari mengedit branch development secara langsung
3. Tambahkan fitur hanya pada branch development (Merge branch feature ke branch development)
4. Gabungkan (merge) branch development ke branch master/main hanya jika sudah benar-benar siap
