import React from 'react';

function PinjamModal({ visible, latitude, longitude, onConfirm, onCancel }) {
    if (!visible) return null;

    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

    return (
        <div style={overlay}>
            <div style={modal}>
                <h3>Konfirmasi Peminjaman</h3>
                <p>Lokasi kamu saat ini:</p>

                <div style={mapContainer}>
                    <iframe
                        title="map"
                        width="100%"
                        height="200"
                        style={{ border: 0, borderRadius: '8px' }}
                        src={mapUrl}
                        loading="lazy"
                    ></iframe>
                </div>

                <p style={{ fontSize: 12, marginTop: 8 }}>
                    Lat: {latitude} <br />
                    Lng: {longitude}
                </p>

                <div style={buttonRow}>
                    <button style={btnConfirm} onClick={onConfirm}>
                        Konfirmasi Pinjam
                    </button>
                    <button style={btnCancel} onClick={onCancel}>
                        Batal
                    </button>
                </div>
            </div>
        </div>
    );
}

const overlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999
};

const modal = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    width: '320px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
    textAlign: 'center'
};

const mapContainer = {
    width: '100%',
    height: '200px',
    marginTop: '10px'
};

const buttonRow = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px'
};

const btnConfirm = {
    flex: 1,
    marginRight: '5px',
    padding: '10px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#2563eb',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold'
};

const btnCancel = {
    flex: 1,
    marginLeft: '5px',
    padding: '10px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#9ca3af',
    color: 'white',
    cursor: 'pointer'
};

export default PinjamModal;
