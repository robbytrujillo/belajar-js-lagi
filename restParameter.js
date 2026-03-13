// si kolektor data
// Rest parameter dalam fungsi
function hitungTotal(...hargaBarang) {
  let total = 0;
  for (let harga of hargaBarang) {
    total += harga;
  }
  return total;
}

console.log(hitungTotal(10000, 25000, 50000)); // 85000
console.log(hitungTotal(5000, 10000)); // 15000

// Rest paranmeter dengan arrow function
// const hitungTotal = (...hargaBarang) => {
// ...kode untuk menghitung total
// };

// Rest parameter dalam array atau objek saat melakukan array destructuring
const warna = ["merah", "hijau", "biru", "kuning"];
const [pertama, ...lainnya] = warna;

console.log(pertama); // merah
console.log(lainnya); // ["hijau", "biru", "kuning"]

// Object Destructuring
const orang = { nama: "Robby", umur: 30, pekeraan: "Developer" };
const { nama, ...sisa } = orang;

console.log(nama); // Budi
console.log(sisa); // { umur: 30, pekerjaan: Developer}
