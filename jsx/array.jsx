// map() di React: Membuat Daftar Komponen
// key: Identitas Unik untuk setiap komponen
const produkList = [
  { id: 1, nama: "Laptop" },
  { id: 2, nama: "Mouse" },
  { id: 3, nama: "Keyboard" },
];

const element = (
  <ul>
    {produkLsit.map((produk) => (
      <li key={produk.id}>{produk.nama}</li>
    ))}
  </ul>
);
