// di react: Menangani interaksi pengguna
// event seperti notifikasi yang dikirimkan oleh elemen di halaman web saat penggunaan berinteraksi dengannya.
// misal saat penguna mengklik tombol, menggerakan mouse, atau mengetik sesuatu di input field

// di react menangkap sesuatu sebagai respons

// Menambah event handler di JSX
<button onClick={handleClick}>Klik Saya</button>;

// inline function(menulis event handler langsung) vs fungsi terpisah
// inline function
<button onClick={() => alret("Halo!")}>Klik</button>;

// Fungsi terpisah
function handleClick() {
  alert("Halo!");
}

<button onClick={handleClick}>Klik</button>;
