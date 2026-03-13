let nama = "Robby";
console.log(nama); // Output: Robby

function contohBlockScope() {
  let umur = 25;
  if (umur > 20) {
    let status = "Dewasa";
    console.log(status); // Output: Dewasa
  }
  // console.log(status); // error Keluar Ruangan, ngak bisa diakses
}

contohBlockScope();
