function Navbar() {
    return (
        <nav style={navbarStyle}>
            {/* KIRI */}
            <div style={leftStyle}>
                Aplikasi Perpustakaan
            </div>

            {/* TENGAH */}
            <div style={centerStyle}>
                <button style={menuButtonStyle}>
                    Daftar Buku
                </button>
            </div>

            {/* KANAN (kosong, biar seimbang) */}
            <div style={{ width: '180px' }}></div>
        </nav>
    );
}

const navbarStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 24px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb'
};

const leftStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  width: '180px',
  whiteSpace: 'nowrap',   // ⬅️ PENTING
  display: 'flex',
  alignItems: 'center'
};


const centerStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center'
};

const menuButtonStyle = {
    backgroundColor: '#e6f0ff',
    color: '#2563eb',
    border: 'none',
    padding: '8px 20px',
    borderRadius: '999px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer'
};

export default Navbar;
