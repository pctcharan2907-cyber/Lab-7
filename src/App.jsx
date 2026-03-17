import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import React, { useState, useMemo } from 'react';
import { AuthContext } from './context/AuthContext';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Login from './pages/Login';
import './App.css';

// Mock products data
const mockProducts = [
  { id: 1, name: 'Laptop', price: 999, description: 'High-performance laptop' },
  { id: 2, name: 'Phone', price: 699, description: 'Latest smartphone' },
  { id: 3, name: 'Tablet', price: 399, description: 'Portable tablet' },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const appName = import.meta.env.VITE_APP_NAME || 'SPA Routing Demo';
  const envMode = import.meta.env.MODE;

  const authValue = useMemo(() => ({
    isLoggedIn,
    login: () => setIsLoggedIn(true),
    logout: () => setIsLoggedIn(false),
  }), [isLoggedIn]);

  return (
    <AuthContext.Provider value={authValue}>
      <Router>
        <div className="app">
          <header className="app-header">
            <h1>{appName}</h1>
            <div className="env-badge">{envMode}</div>
          </header>

          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              {isLoggedIn ? (
                <li><button onClick={authValue.logout}>Logout</button></li>
              ) : (
                <li><Link to="/login">Login</Link></li>
              )}
            </ul>
          </nav>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products products={mockProducts} />} />
              <Route path="/products/:id" element={<ProductDetail products={mockProducts} />}>
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="/contact" element={
                isLoggedIn ? <Contact /> : <Login />
              } />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;