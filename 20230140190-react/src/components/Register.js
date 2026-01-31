import React, { useState } from 'react';

function Register({ onBackToLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            alert('Register berhasil, silakan login');
            onBackToLogin(); // balik ke halaman login TANPA reload
        } catch (err) {
            console.error(err);
            alert('Gagal konek ke server');
        }
    };

    return (
        <div style={container}>
            <div style={card}>
                <h2 style={title}>Register</h2>

                <form onSubmit={handleRegister} style={form}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        style={input}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        style={input}
                        required
                    />

                    <button type="submit" style={buttonSuccess}>
                        Register
                    </button>
                </form>

                <p style={textSmall}>
                    Sudah punya akun?{' '}
                    <span style={link} onClick={onBackToLogin}>
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}

const container = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6'
};

const card = {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '10px',
    width: '300px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center'
};

const title = { marginBottom: '20px' };

const form = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
};

const input = {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc'
};

const buttonSuccess = {
    padding: '10px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#16a34a',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold'
};

const textSmall = {
    marginTop: '15px',
    fontSize: '14px'
};

const link = {
    color: '#2563eb',
    cursor: 'pointer',
    fontWeight: 'bold'
};

export default Register;
