// 1. ekspresi dalam JSX
// beberapa penyisipan
// Variable: <h1>{namaVariable}</h1>
// Operasi Matematika: <p>{10+5}</p>
// Panggilan Fungsi: <h1>{fungsiku()}</h1>
// Conditional Operator: {kondisi ? nilai1 : nilai2}

// cara penulisan
const nama = "Doni";
const umur = 25;

const element = (
  <div>
    <h1>Halo, {nama}!</h1>
    <p>Umur, {umur} tahun.</p>
    <p>{umur >= 17 ? "Sudah dewasa." : "Masih anak anak"}</p>
  </div>
);

// 2. Ekspresi Atribut
const gambar = "profil.jpg";

const elements = <img src={gambar} alt="Foto Profil" />;
