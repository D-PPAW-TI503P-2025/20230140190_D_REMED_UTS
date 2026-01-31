import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('login'); // 'login' | 'register'

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setPage('login');
    localStorage.removeItem('user');
  };

  // belum login
  if (!user) {
    if (page === 'register') {
      return <Register onBackToLogin={() => setPage('login')} />;
    }

    return (
      <Login
        onLogin={handleLogin}
        onShowRegister={() => setPage('register')}
      />
    );
  }

  // login sebagai user
  if (user.role === 'user') {
    return <UserDashboard user={user} onLogout={handleLogout} />;
  }

  // login sebagai admin
  if (user.role === 'admin') {
    return <AdminDashboard user={user} onLogout={handleLogout} />;
  }

  return null;
}

export default App;
