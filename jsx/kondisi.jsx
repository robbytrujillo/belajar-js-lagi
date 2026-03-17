// 1. Kondisi di JSX tidak bisa langsung if-else
// solusi pindahkan logika ke luar JSX

let isLoggedIn = true;
let pesan;

if (isLoggedIn) {
  pesan = "Selamat datang kembali!";
} else {
  pesan = "Silahkan login.";
}

const element = <h1>{pesan}</h1>;

// 2. Alternatif: Ternary Operator
let isLoggedIn1 = true;

const element1 = (
  <h1>{isLoggedIn1 ? "Selamat datang kembali" : "Silahkan login."}</h1>
);

// 3. Alternatif: Short-Circuit(&&)
let isLoggedIn2 = true;

const element2 = <div>{isLoggedIn2 && <button>Logout</button>}</div>;

// 4. Contoh lain
const produkList = [
  { id: 1, nama: "Laptop", stok: 5 },
  { id: 2, nama: "Mouse", stok: 0 },
  { id: 3, nama: "Keyboard", stok: 8 },
];

const element3 = (
  <ul>
    {produkList.map((produk) => (
      <li key={produk.id}>
        {produk.nama} - {produk.stok > 0 ? "Tersedia" : "Habis"}
      </li>
    ))}
  </ul>
);
