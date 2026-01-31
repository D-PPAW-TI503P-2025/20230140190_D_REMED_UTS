import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import AddBook from './AddBook';
import '../App.css';

function AdminDashboard({ user, onLogout }) {
    const [menu, setMenu] = useState('books');
    const [logs, setLogs] = useState([]);

    const loadHistory = () => {
        fetch('http://localhost:3000/api/borrow', {
            headers: { 'x-user-role': 'admin' }
        })
            .then(res => res.json())
            .then(data => setLogs(data))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        if (menu === 'history') loadHistory();
    }, [menu]);

    return (
        <div>
            <div className="navbar-white">
                <div className="navbar-left">
                    <span className="navbar-title-dark">Aplikasi Perpustakaan</span>

                    <div className="menu-inline">
                        <button
                            className={`btn-menu ${menu === 'books' ? 'active' : ''}`}
                            onClick={() => setMenu('books')}
                        >
                            Daftar Buku
                        </button>

                        <button
                            className={`btn-menu ${menu === 'add' ? 'active' : ''}`}
                            onClick={() => setMenu('add')}
                        >
                            Tambah Buku
                        </button>

                        <button
                            className={`btn-menu ${menu === 'history' ? 'active' : ''}`}
                            onClick={() => setMenu('history')}
                        >
                            Riwayat Peminjaman
                        </button>
                    </div>
                </div>

                <div className="navbar-user-dark">
                    <span>{user.username} (admin)</span>
                    <button onClick={onLogout} className="btn-logout">
                        Logout
                    </button>
                </div>
            </div>

            <div className="content-wrapper">
                {menu === 'books' && (
                    <>
                        <h2>Daftar Buku</h2>
                        <p className="subtext">Admin bisa menambah, mengedit, dan menghapus buku.</p>
                        <BookList mode="admin" />
                    </>
                )}

                {menu === 'add' && (
                    <>
                        <h2>Tambah Buku Baru</h2>
                        <p className="subtext">Isi data buku yang akan ditambahkan.</p>
                        <AddBook onSuccess={() => setMenu('books')} />
                    </>
                )}

                {menu === 'history' && (
                    <>
                        <h2>Riwayat Peminjaman</h2>

                        <div className="card">
                            <table>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>User</th>
                                        <th>Judul Buku</th>
                                        <th>Tanggal Pinjam</th>
                                        <th>Lokasi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {logs.length === 0 && (
                                        <tr>
                                            <td colSpan="5">Belum ada peminjaman</td>
                                        </tr>
                                    )}

                                    {logs.map((log, index) => (
                                        <tr key={log.id}>
                                            <td>{index + 1}</td>
                                            <td>{log.User ? log.User.username : '-'}</td>
                                            <td>{log.Book ? log.Book.title : '-'}</td>
                                            <td>{new Date(log.createdAt).toLocaleString()}</td>
                                            <td>{log.latitude}, {log.longitude}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default AdminDashboard; 
