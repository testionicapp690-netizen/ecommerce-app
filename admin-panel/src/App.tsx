import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrdersPage';
import UsersPage from './pages/UsersPage';

export default function App() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', minHeight: '100vh' }}>
      <aside style={{ padding: 16, background: '#111827', color: '#fff' }}>
        <h2>Admin</h2>
        <nav style={{ display: 'grid', gap: 8 }}>
          <Link to="/">Dashboard</Link><Link to="/products">Products</Link><Link to="/orders">Orders</Link><Link to="/users">Users</Link>
        </nav>
      </aside>
      <main style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </main>
    </div>
  );
}
