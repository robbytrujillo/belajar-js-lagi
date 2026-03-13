const nama = "Robby";
const umur = 25;
console.log("Nama Saya " + nama + " dan umur saya " + umur + " tahun.");

// templateString
console.log(`Nama saya ${nama} dan umur saya ${umur} tahun.`);

const panjang = 10;
const lebar = 5;
console.log(`Luas persegi panjang adalah ${panjang * lebar}.`); // Luas persegi panjang adalah 50

function sapa(nama) {
  return `Halo, ${nama}!`;
}

console.log(`Pesan untukmu: ${sapa("Robby")}`); // Output: Pesan untukmu: Halo Robby!
