import React, { useEffect, useState } from 'react';

function UserHistory() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return;

        fetch(`http://localhost:3000/api/borrow/user/${user.id}`, {
            headers: {
                'x-user-role': 'user'
            }
        })
            .then(res => res.json())
            .then(data => setLogs(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div style={card}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f9fafb' }}>
                        <th style={thStyle}>No</th>
                        <th style={thStyle}>Judul Buku</th>
                        <th style={thStyle}>Tanggal Pinjam</th>
                        <th style={thStyle}>Lokasi</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.length === 0 && (
                        <tr>
                            <td colSpan="4" style={tdStyle}>
                                Belum ada riwayat peminjaman
                            </td>
                        </tr>
                    )}

                    {logs.map((log, index) => (
                        <tr key={log.id}>
                            <td style={tdStyle}>{index + 1}</td>
                            <td style={tdStyle}>{log.Book?.title || '-'}</td>
                            <td style={tdStyle}>
                                {new Date(log.createdAt).toLocaleString()}
                            </td>
                            <td style={tdStyle}>
                                {log.latitude}, {log.longitude}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const card = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
};

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

export default UserHistory;
