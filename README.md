# Sistem Perpustakaan dengan Geolokasi

Aplikasi web perpustakaan sederhana yang dibuat menggunakan **React** sebagai frontend dan **Node.js + Express** sebagai backend.

Pengguna dapat melihat dan meminjam buku, sedangkan admin dapat mengelola data buku.  
Setiap peminjaman buku akan mengambil lokasi pengguna (latitude & longitude) dari GPS browser dan menyimpannya ke database sebagai riwayat peminjaman.

## Fitur Utama

### User
- Melihat daftar buku.
- Meminjam buku dengan konfirmasi lokasi di peta.
- Melihat riwayat peminjaman sendiri.

### Admin
- Menambah buku.
- Mengedit buku.
- Menghapus buku.
- Melihat seluruh riwayat peminjaman semua user.

### Aturan Sistem
- Stok buku otomatis berkurang saat dipinjam.
- Buku tidak bisa dipinjam jika stok habis.
- Akun dengan role **admin tidak diperbolehkan meminjam buku**.
- Setiap peminjaman wajib menyertakan data lokasi (latitude & longitude).

## Teknologi yang Digunakan
- Frontend: React
- Backend: Node.js & Express.js
- Database: MySQL
- ORM: Sequelize
- Geolokasi: Geolocation API (browser)

## Hak Akses (Role)

Hak akses dibedakan menggunakan header pada request:

- `x-user-role: admin`  
  → boleh menambah, mengubah, menghapus buku dan melihat semua riwayat peminjaman

- `x-user-role: user`  
  → hanya boleh meminjam buku

- `x-user-id`  
  → identitas user saat melakukan peminjaman

## Endpoint Utama API

- `GET /api/books`  
  Melihat semua buku

- `POST /api/books` (admin)  
  Menambah buku

- `PUT /api/books/:id` (admin)  
  Mengubah data buku

- `DELETE /api/books/:id` (admin)  
  Menghapus buku

- `POST /api/borrow` (user)  
  Meminjam buku + menyimpan lokasi

- `GET /api/borrow` (admin)  
  Melihat semua riwayat peminjaman

- `GET /api/borrow/user/:id` (user)  
  Melihat riwayat peminjaman milik sendiri
