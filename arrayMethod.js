// arrat di React
// forEach() : Si Tukang Periksa
let angka = [1, 2, 3, 4];

angka.forEach((angka, index) => {
  console.log(`Angka ke-${index + 1}: ${angka}`);
});

// Output:
// Angka ke-1: 1
// Angka ke-2: 2
// Angka ke-3: 3
// Angka ke-4: 4

// map() : Si Mesin Pengubah
// let angka = [1, 2, 3, 4];

let angkaKuadrat = angka.map((angka) => angka * angka);

console.log(angkaKuadrat); // [1, 4, 9, 16]
