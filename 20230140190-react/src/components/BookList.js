import React, { useEffect, useState } from 'react';
import LokasiPinjam from './LokasiPinjam';
import '../App.css';

function BookList(props) {
  const [books, setBooks] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [coords, setCoords] = useState({ latitude: null, longitude: null });

  const loadBooks = () => {
    fetch('http://localhost:3000/api/books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    loadBooks();
  }, []);

  // ===== USER PINJAM (pakai lokasi) =====
  const handleBorrowClick = (bookId) => {
    if (!navigator.geolocation) {
      alert('Browser tidak mendukung GPS');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        setSelectedBookId(bookId);
        setShowModal(true);
      },
      () => alert('Lokasi tidak diizinkan')
    );
  };

  const confirmBorrow = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    const res = await fetch('http://localhost:3000/api/borrow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-user-role': 'user',
        'x-user-id': user.id
      },
      body: JSON.stringify({
        bookId: selectedBookId,
        latitude: coords.latitude,
        longitude: coords.longitude
      })
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

    alert('Berhasil meminjam buku');
    setShowModal(false);
    loadBooks();
  };

  // ===== ADMIN EDIT =====
  const handleEdit = async (book) => {
    const title = prompt('Judul baru:', book.title);
    if (title === null) return;
    const author = prompt('Penulis baru:', book.author);
    if (author === null) return;
    const stock = prompt('Stok baru:', book.stock);
    if (stock === null) return;

    const res = await fetch(`http://localhost:3000/api/books/${book.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-user-role': 'admin'
      },
      body: JSON.stringify({ title, author, stock: parseInt(stock) })
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

    alert('Buku diupdate');
    loadBooks();
  };

  // ===== ADMIN HAPUS =====
  const handleDelete = async (id) => {
    if (!window.confirm('Hapus buku ini?')) return;

    const res = await fetch(`http://localhost:3000/api/books/${id}`, {
      method: 'DELETE',
      headers: { 'x-user-role': 'admin' }
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

    alert('Buku dihapus');
    loadBooks();
  };

  return (
    <>
      <div className="book-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <div className="book-title">{book.title}</div>
            <div className="book-author">{book.author}</div>
            <div className="book-stock">Stok: {book.stock}</div>

            <div className="book-actions">
              {props.mode === 'user' && (
                <button
                  className="btn-pinjam"
                  onClick={() => handleBorrowClick(book.id)}
                >
                  Pinjam
                </button>
              )}

              {props.mode === 'admin' && (
                <>
                  <button
                    className="btn-edit"
                    onClick={() => handleEdit(book)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-hapus"
                    onClick={() => handleDelete(book.id)}
                  >
                    Hapus
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <LokasiPinjam
        visible={showModal}
        latitude={coords.latitude}
        longitude={coords.longitude}
        onConfirm={confirmBorrow}
        onCancel={() => setShowModal(false)}
      />
    </>
  );
}

export default BookList;
