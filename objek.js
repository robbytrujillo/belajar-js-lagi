// Membuat objek tanpa class
let sepeda = {
  merk: "Polygon",
  tipe: "Montain Bike",
  deskripsi: () => `Sepeda ${this.merk} tipe ${this.tipe}`, // this di sini bukan sepeda!
};

console.log(sepeda.deskripsi()); // Seopeda undefined tipe undefined
