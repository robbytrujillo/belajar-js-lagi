// synchronous -> antrian kasir di supermarket
// pelanggan dilayani satu satu secara berurutan

// asynchronous -> pesan makan di restauran
// pelanggan memesan makanan dan dilanjutkan bisa melakukan apa saja sambil menunggu makanan siap,
// jika makanan siap pelayan akan mengantarkannya ke meja

// promise -> seperti bon pesanan di restauran
// menjanjikan bahwa makanan yang dipesan akan diantarkan apakah berhasil atau gagal

const pesanMakanan = () => {
  return new Promise((resolve, reject) => {
    // ... proses memasak
    if (makananSiap) {
      resolve("Makanan Siap!");
    } else {
      reject("Maaf, makanan habis.");
    }
  });
};

// pesanMakanan()
//   .then((pesan) => console.log(pesan)) // Makanan siap!
//   .catch((error) => console.log(error)); // Maaf, makanan habis.

// membuat kode lebih mudah
const makan = async () => {
  try {
    let pesan = await pesanMakanan();
    console.log(pesan); // Makanan siap!
  } catch (error) {
    console.log(error); // Maaf, makanan habis.
  }
};
