class Buku {
  constructor(judul, penulis) {
    this.judul = judul;
    this.penulis = penulis;
  }

  deskripsi() {
    return `Buku "${this.judul}" ditulis oleh ${this.penulis}.`;
  }
}

let bukuSastra = new Buku("Laskar Pelangi", "Andrea Hirata");
console.log(bukuSastra.deskripsi()); // Buku "Laskar Pelangi" ditulis oleh Andra Hirata;
