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

  ## Dokumentasi Screenshot

### Tampilan Admin

| Daftar Buku (Admin) | Tambah Buku (Admin) | Riwayat Peminjaman (Admin) |
|---------------------|----------------------|----------------------------|
| <img width="1919" height="1007" alt="image" src="https://github.com/user-attachments/assets/1cbaec51-8552-485a-adde-e041fc617908" />| <img width="1919" height="898" alt="image" src="https://github.com/user-attachments/assets/2d458e8a-83f1-4b5b-b3d7-9440b9e9a1de" />| <img width="1919" height="1011" alt="image" src="https://github.com/user-attachments/assets/66c35587-05b5-45a5-a15e-9d7f538271bd" /> |

### Tampilan User

| Daftar Buku (User) | konfirmasi Lokasi | Riwayat Peminjaman (user) |
|---------------------|----------------------|----------------------------|
|<img width="1919" height="1014" alt="image" src="https://github.com/user-attachments/assets/9ddb200a-37b2-4fee-8800-496dd43f1f2f" /> | <img width="1919" height="895" alt="image" src="https://github.com/user-attachments/assets/c675b418-559b-4916-93f9-c8d5059df553" /> | <img width="1919" height="1015" alt="image" src="https://github.com/user-attachments/assets/f4e656ef-be4a-4a6d-bb0c-3e38b3a1ea29" />
 |


