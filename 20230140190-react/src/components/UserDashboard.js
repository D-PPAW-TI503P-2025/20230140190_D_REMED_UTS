import React, { useState } from 'react';
import BookList from './BookList';
import UserHistory from './UserHistory';

function UserDashboard({ user, onLogout }) {
    const [menu, setMenu] = useState('books');

    return (
        <div>
            {/* Navbar */}
            <div style={navbar}>
                {/* Kiri: Judul + Menu */}
                <div style={leftNav}>
                    <b style={title}>Aplikasi Perpustakaan</b>

                    <div style={menuInline}>
                        <button
                            onClick={() => setMenu('books')}
                            style={menu === 'books' ? btnActive : btnMenu}
                        >
                            Daftar Buku
                        </button>

                        <button
                            onClick={() => setMenu('history')}
                            style={menu === 'history' ? btnActive : btnMenu}
                        >
                            Riwayat Pinjam
                        </button>
                    </div>
                </div>

                {/* Kanan: User + Logout */}
                <div style={rightNav}>
                    <span style={{ marginRight: 10 }}>
                        <b>{user.username}</b> (user)
                    </span>
                    <button onClick={onLogout} style={btnLogout}>
                        Logout
                    </button>
                </div>
            </div>

            {/* Konten */}
            <div style={{ padding: '30px 60px' }}>
                {menu === 'books' && (
                    <>
                        <h2>Daftar Buku</h2>
                        <p style={{ color: '#555' }}>
                            Kamu hanya bisa melihat dan meminjam buku.
                        </p>
                        <BookList mode="user" />
                    </>
                )}

                {menu === 'history' && (
                    <>
                        <h2>Riwayat Peminjaman</h2>
                        <UserHistory />
                    </>
                )}
            </div>
        </div>
    );
}

/* ===== style ===== */

const navbar = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 40px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb'
};

const leftNav = {
    display: 'flex',
    alignItems: 'center',
    gap: '30px'
};

const title = {
    fontSize: '20px'
};

const menuInline = {
    display: 'flex',
    gap: '10px'
};

const rightNav = {
    display: 'flex',
    alignItems: 'center'
};

const btnMenu = {
    padding: '8px 18px',
    border: 'none',
    borderRadius: '999px',
    backgroundColor: '#e5e7eb',
    cursor: 'pointer'
};

const btnActive = {
    ...btnMenu,
    backgroundColor: '#2563eb',
    color: 'white'
};

const btnLogout = {
    padding: '6px 14px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#dc2626',
    color: 'white',
    cursor: 'pointer'
};

export default UserDashboard;
