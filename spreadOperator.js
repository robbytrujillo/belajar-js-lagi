// Spread Operator untuk Array
let kotak1 = ["mobil", "kereta"];
let kotak2 = ["robot", "pesawat"];

let kotakGabungan = [...kotak1, ...kotak2];
console.log(kotakGabungan); // ["mobil", "kereta", "robot", "pesawat"]

// menggabungkan Spread Operator
let kotakBaru = [...kotak1, ...kotak2, "boneka", "bantal leher"];
console.log(kotakBaru);

// membuat duplikat kotak mainan
let kotakDuplikat = [...kotakBaru];
console.log(kotakDuplikat);
