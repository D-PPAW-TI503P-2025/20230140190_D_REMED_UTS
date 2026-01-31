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

  ### Halaman Autentikasi

| Login | Register |
|-------|----------|
|<img width="1919" height="1012" alt="image" src="https://github.com/user-attachments/assets/138e19ca-0cfa-4e96-9180-15d0b07e9c05" /> |<img width="1919" height="1014" alt="image" src="https://github.com/user-attachments/assets/8d4eeced-e8e8-4ff3-bb03-a8ecfafa4d24" />
 |


### Tampilan Admin

| Daftar Buku (Admin) | Tambah Buku (Admin) | Riwayat Peminjaman (Admin) |
|---------------------|----------------------|----------------------------|
| <img width="1919" height="1007" alt="image" src="https://github.com/user-attachments/assets/1cbaec51-8552-485a-adde-e041fc617908" />| <img width="1919" height="898" alt="image" src="https://github.com/user-attachments/assets/2d458e8a-83f1-4b5b-b3d7-9440b9e9a1de" />| <img width="1919" height="1011" alt="image" src="https://github.com/user-attachments/assets/66c35587-05b5-45a5-a15e-9d7f538271bd" /> |

### Tampilan User

| Daftar Buku (User) | konfirmasi Lokasi | Riwayat Peminjaman (user) |
|---------------------|----------------------|----------------------------|
|<img width="1919" height="1014" alt="image" src="https://github.com/user-attachments/assets/9ddb200a-37b2-4fee-8800-496dd43f1f2f" /> | <img width="1919" height="895" alt="image" src="https://github.com/user-attachments/assets/c675b418-559b-4916-93f9-c8d5059df553" /> | <img width="1919" height="1015" alt="image" src="https://github.com/user-attachments/assets/f4e656ef-be4a-4a6d-bb0c-3e38b3a1ea29" />
 |

## Postman

### 1. Cek Backend
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/27a7a17d-a582-4423-833b-56fdf9b5def7" />

### 2. Register User
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/7da9b5f9-37c3-4d5b-a51f-efbdc9df5aef" />

### 3.Login user
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8008f4ab-30cb-4a84-8ded-b6a8a3a82448" />

### 4. Login Admin
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9db5e0d5-79fe-4089-be56-80a497b68ea9" />

### 5. Admin Menambahkan Buku
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/000837db-012c-4a75-8062-4d94f3009805" />

### 6. Melihat daftar buku ( admin dan user )
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3edb484b-3313-4b50-9dbb-d137f62266c5" />

### 7. user pinjam buku
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f740d6e0-f8bf-4134-bd7f-ee60c58029ad" />

### 8. Admin melihat riwayat peminjaman buku
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dc00b2bd-0ecd-46ae-a8fd-12ae64b35c91" />

### 9. User melihat riwayat peminjaman ia sendiri
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/468a8c5a-0568-4796-9ea7-6566fdca76a5" />

### DATABASE
## 1. Tabel buku
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0189a15b-d5bf-4e21-bc16-c55c8b3a5953" />
## 2. Tabel Peminjaman
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f6ecc164-b418-472f-9dfa-36df4bf94113" />
## 3. Tabel user
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b655f608-d611-4a3c-8c6d-64a10ce3e990" />










