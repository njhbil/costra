import { Link, useNavigate } from 'react-router-dom';
import cotraLogo from '../assets/Costra.png';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden bg-white">
      {/* Navbar - Premium Minimal */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/login" className="flex items-center no-animation">
            <img src={cotraLogo} alt="COSTRA" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">Tentang</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">Fitur</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">Harga</a>
            <button 
            onClick={() => navigate('/login')}
            className="text-sm border border-gray-300 px-6 py-2 rounded text-gray-900 hover:border-gray-400 transition-colors font-semibold"
            >Login</button>
            <button 
            onClick={()=> navigate('/login')}
            className="text-sm bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors font-semibold" > Mulai</button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">☰</button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Premium Luxury */}
      <section className="relative min-h-[95vh] bg-linear-to-br from-white via-gray-50 to-white overflow-hidden flex items-center">
        {/* Subtle decorative elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-teal-50/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-50/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Premium Typography */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <p className="text-xs tracking-widest text-gray-500 uppercase font-light">Solusi Manajemen</p>
                </div>
                <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                  Kelola bisnis dengan <span className="font-normal text-teal-700">elegansi</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl font-medium">
                  Platform manajemen perusahaan yang dirancang untuk profesional modern. Sederhana, powerful, dan indah.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-all font-semibold text-sm tracking-wide">
                  Mulai Sekarang
                </button>
                <button className="px-8 py-3 border border-gray-300 text-gray-900 rounded-md hover:border-gray-400 transition-all font-semibold text-sm tracking-wide">
                  Lihat Demo
                </button>
              </div>

              {/* Premium Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200">
                <div>
                  <p className="text-3xl font-bold text-gray-900">500+</p>
                  <p className="text-xs text-gray-500 mt-2 tracking-wide font-semibold">PERUSAHAAN</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">10K+</p>
                  <p className="text-xs text-gray-500 mt-2 tracking-wide font-semibold">USER AKTIF</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">99.9%</p>
                  <p className="text-xs text-gray-500 mt-2 tracking-wide">UPTIME</p>
                </div>
              </div>
            </div>

            {/* Right - Premium Dashboard Preview */}
            <div className="relative hidden lg:flex justify-center">
              <div className="w-full max-w-md">
                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  {/* Header */}
                  <div className="h-1 bg-linear-to-r from-teal-600 to-indigo-600"></div>
                  
                  {/* Content */}
                  <div className="p-8 space-y-8">
                    {/* Main Metric */}
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Pendapatan Bulan Ini</p>
                      <p className="text-4xl font-bold text-gray-900">Rp 2.4M</p>
                      <p className="text-xs text-teal-600 font-semibold">↑ 12% dari bulan lalu</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                      <div className="space-y-1">
                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Produk</p>
                        <p className="text-2xl font-bold text-gray-900">245</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">User</p>
                        <p className="text-2xl font-bold text-gray-900">42</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100 w-48">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">Rating</p>
                  <p className="text-2xl font-bold text-gray-900">4.9/5.0 ⭐</p>
                  <p className="text-xs text-gray-600 mt-1 font-medium">Dari 500+ pengguna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Premium Grid */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">Capabilities</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">Fitur Komprehensif</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 border border-gray-100 rounded-2xl hover:border-teal-200 transition-all duration-300 hover:bg-teal-50/30">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors text-xl">
                📦
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inventaris</h3>
              <p className="text-gray-600 font-medium leading-relaxed text-sm">
                Kelola produk dengan tracking stok real-time, kategori terorganisir, dan pricing yang fleksibel.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 border border-gray-100 rounded-2xl hover:border-indigo-200 transition-all duration-300 hover:bg-indigo-50/30">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors text-xl">
                👥
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Access Control</h3>
              <p className="text-gray-600 font-medium leading-relaxed text-sm">
                Kelola user dengan sistem role berbasis permission yang aman dan terkontrol dengan baik.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 border border-gray-100 rounded-2xl hover:border-teal-200 transition-all duration-300 hover:bg-teal-50/30">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors text-xl">
                📊
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics</h3>
              <p className="text-gray-600 font-medium leading-relaxed text-sm">
                Dashboard analytics real-time dengan visualisasi data yang komprehensif dan actionable insights.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 border border-gray-100 rounded-2xl hover:border-indigo-200 transition-all duration-300 hover:bg-indigo-50/30">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors text-xl">
                🏢
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-tenant</h3>
              <p className="text-gray-600 font-medium leading-relaxed text-sm">
                Kelola multiple perusahaan dalam satu platform dengan data isolation yang sempurna.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group p-8 border border-gray-100 rounded-2xl hover:border-teal-200 transition-all duration-300 hover:bg-teal-50/30">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors text-xl">
                🔒
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security</h3>
              <p className="text-gray-600 font-medium leading-relaxed text-sm">
                Enterprise-grade security dengan enkripsi end-to-end dan compliance standards internasional.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group p-8 border border-gray-100 rounded-2xl hover:border-indigo-200 transition-all duration-300 hover:bg-indigo-50/30">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors text-xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integration</h3>
              <p className="text-gray-600 font-medium leading-relaxed text-sm">
                REST API yang robust dengan dokumentasi lengkap untuk seamless third-party integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <blockquote className="space-y-6">
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 leading-relaxed">
              "COSTRA telah mengubah cara kami mengelola operasional bisnis. Interface yang intuitif dan fitur yang powerful membuat pekerjaan kami jauh lebih efisien."
            </p>
            <div>
              <p className="text-sm font-bold text-gray-900">Ahmad Rizki</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-1">Founder, PT Teknologi Maju</p>
            </div>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-5xl sm:text-6xl font-bold leading-tight">Transformasi Digital Dimulai di Sini</h2>
          <p className="text-lg text-gray-300 font-medium max-w-2xl mx-auto">
            Bergabunglah dengan ratusan perusahaan yang telah mengoptimalkan operasional mereka bersama COSTRA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-all font-semibold text-sm tracking-wide">
              Mulai Gratis
            </button>
            <button className="px-8 py-3 border border-white text-white rounded-md hover:bg-white/10 transition-all font-semibold text-sm tracking-wide">
              Jadwalkan Demo
            </button>
          </div>
          <p className="text-xs text-gray-400 font-medium">Tidak perlu kartu kredit untuk memulai</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wide mb-4">COSTRA</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                Platform manajemen perusahaan untuk bisnis modern di Indonesia.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-900 tracking-widest uppercase mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">Features</a></li>
                <li><a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">Pricing</a></li>
                <li><a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-900 tracking-widest uppercase mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">About</a></li>
                <li><a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">Blog</a></li>
                <li><a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-900 tracking-widest uppercase mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">Privacy</a></li>
                <li><a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">Terms</a></li>
                <li><a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 text-center">
            <p className="text-xs text-gray-500 font-medium tracking-wide">© 2026 COSTRA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
