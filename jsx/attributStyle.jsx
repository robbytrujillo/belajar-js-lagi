// 1. Memberi gaya pada elemen JSX
// Mirip seperti CSS pada HTML, CSS/style bisa diterapkan di JSX
// aturan penulisan style di JSX:
// a. objek js->nilai dari attribut style harus berupa objek JS,
// b. Camel Case: nama properti CSS yang menggunakan tanda hubung (hypen) di HTML seperti background-color menjadi backgroundColor
// c. Double Curly Braces: Atribut style harus ditulis di dalam double curly bracess {{ ... }}

const element = (
  <h1 style={{ color: "red", backgroundColor: "yellow" }}>Halo, dunia!</h1>
);

// 2. Menggunakan Variable
const styleku = {
  color: "blue",
  fontSize: "24px",
  textAlign: "center",
};

const element1 = <p style={styleku}>Ini adalah paragraph.</p>;
