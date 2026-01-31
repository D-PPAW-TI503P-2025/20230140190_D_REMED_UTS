import React, { useState } from 'react';
import '../App.css';

function AddBook({ onSuccess }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-role': 'admin'
        },
        body: JSON.stringify({
          title,
          author,
          stock: parseInt(stock)
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Gagal menambah buku');
        return;
      }

      alert('Buku berhasil ditambahkan');

      setTitle('');
      setAuthor('');
      setStock('');

      if (onSuccess) onSuccess();
    } catch (err) {
      alert('Terjadi error');
    }
  };

  return (
    <div className="card form-card">
      <form onSubmit={handleSubmit} className="form-vertical">
        <input
          type="text"
          placeholder="Judul Buku"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Penulis"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Stok"
          value={stock}
          onChange={e => setStock(e.target.value)}
          required
        />

        <button type="submit" className="btn-primary">
          Tambah Buku
        </button>
      </form>
    </div>
  );
}

export default AddBook;
