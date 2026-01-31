Sistem Perpustakaan dengan Geolokasi
Deskripsi Proyek

Sistem Perpustakaan dengan Geolokasi adalah aplikasi web sederhana untuk manajemen perpustakaan yang dibangun menggunakan React sebagai frontend dan Node.js + Express.js sebagai backend.

Aplikasi ini memungkinkan pengguna (user) untuk melihat dan meminjam buku, serta memungkinkan admin untuk mengelola data buku.
Setiap proses peminjaman buku akan mengambil lokasi pengguna (latitude & longitude) dari GPS browser, kemudian menyimpannya ke database sebagai riwayat peminjaman.

Sistem juga menerapkan pemisahan hak akses antara admin dan user.

Aturan Bisnis Sistem

Role Based Access

Admin

Bisa menambah, mengedit, dan menghapus buku.

Bisa melihat seluruh riwayat peminjaman semua user.

Tidak boleh meminjam buku.

User

Hanya bisa melihat daftar buku dan meminjam buku.

Tidak bisa mengakses fitur CRUD buku.

Validasi Lokasi

Setiap peminjaman wajib menyertakan koordinat lokasi dari GPS browser.

Manajemen Stok

Stok buku otomatis berkurang saat buku berhasil dipinjam.

Buku tidak bisa dipinjam jika stok sudah habis.

Fitur Utama
Untuk User

Registrasi dan login akun.

Melihat daftar buku.

Meminjam buku dengan konfirmasi lokasi pada peta.

Melihat riwayat peminjaman milik sendiri.

Untuk Admin

Melihat daftar buku.

Menambah buku baru.

Mengedit dan menghapus buku.

Melihat seluruh riwayat peminjaman dari semua user.

Teknologi yang Digunakan

Frontend: React

Backend: Node.js & Express.js

Database: MySQL

ORM: Sequelize

Geolocation: Geolocation API pada browser

Autentikasi sederhana: Header request (x-user-role dan x-user-id)

Mekanisme Hak Akses (Header)

Hak akses dibedakan menggunakan header pada setiap request API:

x-user-role: admin
→ boleh mengelola buku dan melihat semua riwayat peminjaman

x-user-role: user
→ hanya boleh meminjam buku dan melihat riwayat sendiri

x-user-id: <id_user>
→ identitas user saat melakukan peminjaman atau melihat riwayatnya

Endpoint Utama API
Buku

GET /api/books
Melihat semua buku

POST /api/books (admin)
Menambah buku baru

PUT /api/books/:id (admin)
Mengubah data buku

DELETE /api/books/:id (admin)
Menghapus buku

Peminjaman

POST /api/borrow (user)
Meminjam buku dan menyimpan lokasi pengguna

GET /api/borrow (admin)
Melihat semua riwayat peminjaman

GET /api/borrow/user/:id (user)
Melihat riwayat peminjaman milik user tersebut
