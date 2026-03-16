// 1. Tanpa tanda kutip -> JSX bukan string., jadi tidak perlu tanda kutip
// 2. Tanda kurung untuk JSX Multibaris -> Kalau JSX-nya panjang dan terdiri dari beberapa baris, kita harus "membungkusnya" dengan tanda kurung().
// 3. Tag Penutup Wajib -> Setiap tag di JSX harus punya pasangan tag penutup
// 4. Satu root element -> JSX hanya boleh satu root element, yaitu element terluar yang "membungkus" semua elemen lainnya
// 5. React Freagment -> kalau tidak mau menambah elemen baru di DOM hanya untuk "membungkus" elemen lain, kita bisa pakai React Freagment (<>)
// 6. Atribut khusus -> nama atribut berbeda, yaitu className untuk class dan htmlFor untuk for
// 7. Pesan error yang jelas -> react memberikan pesan error yang jelas jika melakukan kesalahan
