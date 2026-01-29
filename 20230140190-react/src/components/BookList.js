import React, { useEffect, useState } from 'react';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f4f8' }}>
            <th style={thStyle}>No</th>
            <th style={thStyle}>Judul Buku</th>
            <th style={thStyle}>Penulis</th>
            <th style={thStyle}>Stok</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{book.title}</td>
              <td style={tdStyle}>{book.author}</td>
              <td style={tdStyle}>{book.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  textAlign: 'left',
  padding: '12px',
  fontWeight: 'bold',
  fontSize: '14px'
};

const tdStyle = {
  padding: '12px',
  borderTop: '1px solid #eee',
  fontSize: '14px'
};

export default BookList;
