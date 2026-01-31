Sistem Perpustakaan dengan Geolokasi

Aplikasi web perpustakaan sederhana yang dibuat dengan React (frontend) dan Node.js + Express (backend).
Pengguna bisa melihat dan meminjam buku, sedangkan admin bisa mengelola data buku.

Setiap kali buku dipinjam, sistem akan mengambil lokasi pengguna (latitude & longitude) dari GPS browser dan menyimpannya ke database sebagai riwayat peminjaman.

Fitur Utama

Registrasi dan login pengguna.

User dapat:

Melihat daftar buku.

Meminjam buku dengan konfirmasi lokasi di peta.

Melihat riwayat peminjaman sendiri.

Admin dapat:

Menambah, mengedit, dan menghapus buku.

Melihat seluruh riwayat peminjaman semua user.

Stok buku otomatis berkurang saat dipinjam.

Buku tidak bisa dipinjam jika stok habis.

Akun admin tidak diperbolehkan meminjam buku.

Teknologi yang Digunakan

Frontend: React

Backend: Node.js & Express.js

Database: MySQL

ORM: Sequelize

Geolokasi: Geolocation API pada browser

Hak Akses (Role)

Dibedakan menggunakan header pada request:

x-user-role: admin → boleh kelola buku & lihat semua riwayat

x-user-role: user → hanya boleh meminjam buku

x-user-id → identitas user saat melakukan peminjaman

Endpoint Utama API

GET /api/books → melihat semua buku

POST /api/books (admin) → menambah buku

PUT /api/books/:id (admin) → mengubah buku

DELETE /api/books/:id (admin) → menghapus buku

POST /api/borrow (user) → meminjam buku + menyimpan lokasi

GET /api/borrow (admin) → melihat semua riwayat peminjaman

GET /api/borrow/user/:id (user) → melihat riwayat peminjaman sendiri
