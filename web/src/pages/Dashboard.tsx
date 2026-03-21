import {useNavigate } from 'react-router-dom';
import '../App.css';
import { useEffect, useState } from 'react';

function Dashboard() {

  const navigate = useNavigate();
  const [username, setUsername] = useState('')

  useEffect (()=> {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token')
      if(!token){
        navigate('/');
        return;
      }
      try {
        const response = await fetch('http://localhost:3000/user', {
          method : 'GET',
          headers : {
            'Authorization' : `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
      
      if (response.ok){
        const result = await response.json();
        if (result.status === 'success') {
        setUsername(result.data.username)
        } else if (result.message) {
        setUsername('User Baru')
      }
      }
        
      } catch (error) {
        console.error('Failed to get User Data', error)
      }
    } ; fetchUserData();
  }, [navigate]);

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <div className="hidden md:flex w-80 bg-linear-to-b from-slate-900 to-slate-800 text-slate-100 flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <div className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ✨ COSTRA
          </div>
          <p className="text-xs text-slate-400 mt-2">Management System</p>
        </div>

        {/* Menu */}
        <nav className="p-4 overflow-y-auto flex-1 space-y-2">
          <p className="text-slate-400 text-xs font-bold uppercase pt-4 px-2">Menu Utama</p>
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium text-sm">
            📊 Dashboard
          </a>

          <p className="text-slate-400 text-xs font-bold uppercase pt-6 px-2">Manajemen</p>
          <a href="#" className="flex items-center justify-between px-4 py-3 hover:bg-slate-700 rounded-lg text-sm">
            📦 Produk
            <span className="bg-slate-700 text-xs px-2 py-0.5 rounded-full">12</span>
          </a>
          <a href="#" className="flex items-center justify-between px-4 py-3 hover:bg-slate-700 rounded-lg text-sm">
            👥 User
            <span className="bg-slate-700 text-xs px-2 py-0.5 rounded-full">8</span>
          </a>
          <a href="#" className="flex items-center justify-between px-4 py-3 hover:bg-slate-700 rounded-lg text-sm">
            🏢 Company
            <span className="bg-slate-700 text-xs px-2 py-0.5 rounded-full">3</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 hover:bg-slate-700 rounded-lg text-sm">
            📋 Transaksi
          </a>

          <p className="text-slate-400 text-xs font-bold uppercase pt-6 px-2">Laporan</p>
          <a href="#" className="flex items-center px-4 py-3 hover:bg-slate-700 rounded-lg text-sm">
            📈 Laporan Penjualan
          </a>
          <a href="#" className="flex items-center px-4 py-3 hover:bg-slate-700 rounded-lg text-sm">
            📊 Analitik
          </a>

          <p className="text-slate-400 text-xs font-bold uppercase pt-6 px-2">Lainnya</p>
          <a href="#" className="flex items-center px-4 py-3 hover:bg-slate-700 rounded-lg text-sm">
            ⚙️ Pengaturan
          </a>
          <a href="#" className="flex items-center px-4 py-3 hover:bg-slate-700 rounded-lg text-sm">
            ❓ Bantuan & Dukungan
          </a>
          <a
          onClick={(e)=> {
            e.preventDefault();
            localStorage.removeItem('token') ; 
            navigate('/')}}

          className="flex items-center px-4 py-3 hover:bg-slate-700 rounded-lg text-sm">
            ⚙️ Log Out
          </a>
        </nav>

        {/* Footer Sidebar */}
        <div className="p-4 border-t border-slate-700">
          <div className="bg-slate-700/50 rounded-lg p-3 text-center">
            <p className="text-xs text-slate-400">COSTRA v2.0.1</p>
            <p className="text-xs text-slate-500 mt-1">© 2026 All Rights Reserved</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <div className="bg-white shadow-md sticky top-0 z-40 border-b border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              📊 Dashboard
            </span>
            <div className="flex items-center gap-4">
              <input type="text" placeholder="Cari produk..." className="input input-bordered input-sm w-40 rounded-lg" />
              <button className="btn btn-ghost btn-circle btn-sm">🔔</button>
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm">
                JD
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-8 flex-1 overflow-y-auto">
          {/* Welcome Section */}
          <div className="mb-8 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
            <h1 className="text-3xl font-bold mb-2">Selamat Datang, {username} 👋</h1>
            <p className="text-blue-100">Mari kelola bisnis Anda dengan lebih efisien.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Total Produk</p>
                  <h3 className="text-3xl font-bold text-slate-900 mt-1">245</h3>
                </div>
                <div className="bg-blue-100 rounded-lg p-3">📦</div>
              </div>
              <div className="flex items-center text-green-600 text-sm font-semibold">
                <span className="mr-1">↗</span>12% dari bulan lalu
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Total User</p>
                  <h3 className="text-3xl font-bold text-slate-900 mt-1">42</h3>
                </div>
                <div className="bg-purple-100 rounded-lg p-3">👥</div>
              </div>
              <div className="flex items-center text-green-600 text-sm font-semibold">
                <span className="mr-1">↗</span>5 user baru minggu ini
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Total Perusahaan</p>
                  <h3 className="text-3xl font-bold text-slate-900 mt-1">8</h3>
                </div>
                <div className="bg-emerald-100 rounded-lg p-3">🏢</div>
              </div>
              <div className="flex items-center text-green-600 text-sm font-semibold">
                <span className="mr-1">↗</span>2 perusahaan baru
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Total Transaksi</p>
                  <h3 className="text-3xl font-bold text-slate-900 mt-1">128</h3>
                </div>
                <div className="bg-amber-100 rounded-lg p-3">💰</div>
              </div>
              <div className="flex items-center text-green-600 text-sm font-semibold">
                <span className="mr-1">↗</span>15% lebih tinggi
              </div>
            </div>
          </div>

          {/* Products Table */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
              <h2 className="text-lg font-bold text-slate-900">📦 Produk Terbaru</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-900 uppercase">Nama Produk</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-900 uppercase">Kategori</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-900 uppercase">Harga</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-900 uppercase">Stok</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-900 uppercase">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">Laptop ASUS ROG</div>
                      <div className="text-xs text-slate-500">SKU: LAP-001</div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">Elektronik</td>
                    <td className="px-6 py-4 font-semibold text-slate-900">Rp 15.000.000</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">15</span>
                    </td>
                    <td className="px-6 py-4 space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-xs">Edit</button>
                      <button className="text-red-600 hover:text-red-800 font-medium text-xs">Hapus</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">Mouse Logitech MX</div>
                      <div className="text-xs text-slate-500">SKU: MOU-002</div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">Aksesori</td>
                    <td className="px-6 py-4 font-semibold text-slate-900">Rp 1.200.000</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">5</span>
                    </td>
                    <td className="px-6 py-4 space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-xs">Edit</button>
                      <button className="text-red-600 hover:text-red-800 font-medium text-xs">Hapus</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">Monitor Dell UltraSharp</div>
                      <div className="text-xs text-slate-500">SKU: MON-003</div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">Elektronik</td>
                    <td className="px-6 py-4 font-semibold text-slate-900">Rp 8.500.000</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">2</span>
                    </td>
                    <td className="px-6 py-4 space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-xs">Edit</button>
                      <button className="text-red-600 hover:text-red-800 font-medium text-xs">Hapus</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
