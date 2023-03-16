# Resume Materi KMReact – React Hook

---

### Pengertian

_Hooks_ adalah sebuah _function_ yang memudahkan kita untuk mengakses _state_ dan _life cycle_ pada React di dalam _function components_. _Hooks_ baru diperkenalkan pada React 16.8. Terdapat 3 alasan mengapa kita dianjurkan untuk menggunakan _hooks_, yaitu :

1. **Menggunakan kembali logika stateful antar komponen sangatlah susah.**
   Dengan menggunakan _hook_, kita dapat menggunakan kembali logika stateful tanpa harus mengubah hirearki komponen kita
2. **Komponen yang kompleks susah untuk dipahami**
   _Hook_ memudahkan kita untuk memecah sebuah komponen menjadi function yang lebih kecil berdasarkan bagian2 yang berhubungan
3. **Kelas membingungkan manusia dan mesin**
   _Hook_ memudahkan kita untuk menggunakan fitur2 React tanpa harus menggunakan kelas.

### Aturan

Saat kita igin menggunakan _hook_, terdapat dua aturan yang harus ditaati. Yang pertama adalah _hook_ hanya boleh dipanggil pada level paling atas. Peraturan selanjutnya adalah hanya panggil dalam _functional component_ saja.

### Contoh Hooks

Tiga hooks yang paling umum digunakan adalah :

1. **useState**
2. **useEffect**
3. **useContext**

Beberapa contoh hooks lainnya :

1. **useReducer**
2. **useCallback**
3. **useMemo**
4. **UseRef**
5. **useImperativeHandle**
6. **useLayoutEffect**
7. **useDebugValue**
