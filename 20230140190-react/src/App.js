import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

function App() {
  return (
    <div style={{ backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      {/* NAVBAR */}
      <Navbar />

      {/* KONTEN UTAMA */}
      <div style={{ padding: '30px' }}>
        <h2 style={{ marginBottom: '20px' }}>Daftar Buku</h2>
        <BookList />
      </div>
    </div>
  );
}

export default App;
