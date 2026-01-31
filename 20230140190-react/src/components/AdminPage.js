import React, { useState } from 'react';
import BookList from './BookList';

function AdminPage() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [stock, setStock] = useState('');

    const handleAddBook = async (e) => {
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
            alert(data.message || 'Buku berhasil ditambahkan');

            // reset form
            setTitle('');
            setAuthor('');
            setStock('');

            // refresh halaman supaya BookList reload data
            window.location.reload();
        } catch (err) {
            console.error(err);
            alert('Gagal menambah buku');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Halaman Admin</h2>
            <p>Kamu sebagai Admin. Bisa menambah dan menghapus buku.</p>

            {/* Form tambah buku */}
            <form onSubmit={handleAddBook} style={formStyle}>
                <input
                    type="text"
                    placeholder="Judul Buku"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                    style={inputStyle}
                />
                <input
                    type="text"
                    placeholder="Penulis"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    required
                    style={inputStyle}
                />
                <input
                    type="number"
                    placeholder="Stok"
                    value={stock}
                    onChange={e => setStock(e.target.value)}
                    required
                    style={inputStyle}
                />

                <button type="submit" style={btnTambah}>
                    Tambah Buku
                </button>
            </form>

            {/* Tabel buku mode admin */}
            <BookList mode="admin" />
        </div>
    );
}

const formStyle = {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
};

const inputStyle = {
    padding: '8px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    flex: 1
};

const btnTambah = {
    padding: '8px 14px',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
};

export default AdminPage;
