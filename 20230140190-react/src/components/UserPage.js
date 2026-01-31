import React from 'react';
import BookList from './BookList';

function UserPage() {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Daftar Buku (User)</h2>
            <p>Kamu login sebagai User. Kamu hanya bisa melihat dan meminjam buku.</p>

            <BookList mode="user" />
        </div>
    );
}

export default UserPage;
