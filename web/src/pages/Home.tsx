import { Link, useNavigate } from "react-router-dom";
import cotraLogo from "../assets/Costra.png";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }
        const response = await fetch("http://localhost:3000/user", {
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          navigate("dashboard");
        }
      } catch (error) {
        console.error("Oops! You need to login first ", error);
      }
    };
    checkSession();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-368 mx-auto px-5 sm:px-8 lg:px-10 h-18 flex items-center justify-between">
          <Link to="/" className="flex items-center no-animation">
            <img src={cotraLogo} alt="COSTRA" className="h-10 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#product"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              Product
            </a>
            <a
              href="#workflow"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              Workflow
            </a>
            <a
              href="#security"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              Security
            </a>
            <button
              onClick={() => navigate("/login")}
              className="text-sm border border-slate-300 px-5 py-2 rounded-lg text-slate-800 hover:border-slate-400 transition-colors font-semibold"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/login")}
              className="text-sm bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-800 transition-colors font-semibold"
            >
              Try Costra
            </button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden border-b border-slate-200 bg-linear-to-br from-white via-slate-50 to-blue-50">
        <div className="absolute -top-24 -right-10 w-md h-112 bg-blue-100/55 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-28 -left-10 w-96 h-96 bg-cyan-100/45 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-xl h-144 bg-indigo-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-368 mx-auto px-5 sm:px-8 lg:px-10 py-18 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Business Operating Platform
              </p>
              <h1 className="mt-3 text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] text-slate-900 max-w-3xl">
                Clear operations for product, sales, and team management.
              </h1>
              <p className="mt-5 text-lg text-slate-600 max-w-2xl leading-relaxed">
                Costra helps growing companies centralize inventory,
                transactions, and user access in one reliable workspace.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate("/login")}
                  className="px-7 py-3.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-semibold text-sm"
                >
                  Start Managing Now
                </button>
                <a
                  href="#product"
                  className="px-7 py-3.5 border border-slate-300 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors font-semibold text-sm text-center"
                >
                  Explore Features
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 max-w-2xl">
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <p className="text-3xl font-bold text-slate-900">500+</p>
                  <p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">
                    Companies
                  </p>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <p className="text-3xl font-bold text-slate-900">10K+</p>
                  <p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">
                    Users
                  </p>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <p className="text-3xl font-bold text-slate-900">99.9%</p>
                  <p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">
                    Availability
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">
                  Dashboard Preview
                </p>
                <span className="text-xs text-slate-500">
                  Live-ready layout
                </span>
              </div>
              <div className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-200 p-5 bg-slate-50">
                    <p className="text-xs text-slate-500">Daily Transactions</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">
                      128
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-5 bg-slate-50">
                    <p className="text-xs text-slate-500">Revenue Today</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">
                      IDR 12.4M
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 text-xs font-semibold uppercase text-slate-600 tracking-wide">
                    Stock Alerts
                  </div>
                  <div className="px-5 py-3.5 flex items-center justify-between text-sm border-b border-slate-100">
                    <span className="text-slate-700">Vanilla Syrup 750ml</span>
                    <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold">
                      Critical
                    </span>
                  </div>
                  <div className="px-5 py-3.5 flex items-center justify-between text-sm">
                    <span className="text-slate-700">Paper Cup 16oz</span>
                    <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
                      Low
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="product"
        className="py-18 border-b border-slate-200 bg-white"
      >
        <div className="max-w-368 mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Product Capabilities
            </p>
            <h2 className="mt-2 text-4xl font-bold text-slate-900">
              Everything your operations team needs.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            <article className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-base font-semibold text-slate-900">
                Inventory Control
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Track stock movement, low-stock alerts, and product updates with
                clean records.
              </p>
            </article>
            <article className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-base font-semibold text-slate-900">
                Transaction Tracking
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Monitor payment status, transaction value, and sales activity
                from one dashboard.
              </p>
            </article>
            <article className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-base font-semibold text-slate-900">
                Role-Based Access
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Control user permissions with role assignments for owner, admin,
                and staff.
              </p>
            </article>
            <article className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-base font-semibold text-slate-900">
                Business Reporting
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Prepare consistent operational reports for daily and monthly
                review cycles.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="workflow"
        className="py-18 border-b border-slate-200 bg-slate-50"
      >
        <div className="max-w-368 mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <article className="bg-white border border-slate-200 rounded-2xl p-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Step 1
              </p>
              <h3 className="text-lg font-semibold text-slate-900 mt-1">
                Set up your company profile
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Define legal profile, contact details, and primary business
                structure.
              </p>
            </article>
            <article className="bg-white border border-slate-200 rounded-2xl p-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Step 2
              </p>
              <h3 className="text-lg font-semibold text-slate-900 mt-1">
                Manage products and pricing
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Build your product list with SKU, cost, selling price, and stock
                tracking.
              </p>
            </article>
            <article className="bg-white border border-slate-200 rounded-2xl p-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Step 3
              </p>
              <h3 className="text-lg font-semibold text-slate-900 mt-1">
                Execute and monitor transactions
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Record daily transactions and review operational health in real
                time.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="security"
        className="py-18 bg-white border-b border-slate-200"
      >
        <div className="max-w-368 mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Security and Reliability
              </p>
              <h2 className="mt-2 text-4xl font-bold text-slate-900">
                Built for secure, continuous operations.
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-2xl">
                Costra is designed with token-based authentication, structured
                data access, and stable uptime for day-to-day business
                workflows.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>
                    Role-driven access controls for owner, admin, and staff.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>
                    Company-level data separation for multi-tenant support.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>
                    Reliable dashboard views for product and transaction
                    operations.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to standardize your daily operations?
          </h2>
          <p className="mt-4 text-slate-300 max-w-3xl mx-auto text-base md:text-lg">
            Start with product setup, enable transaction flow, and scale team
            collaboration in one dashboard.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="mt-7 px-7 py-3.5 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-colors font-semibold text-sm"
          >
            Get Started
          </button>
        </div>
      </section>

      <footer className="bg-white py-8">
        <div className="max-w-368 mx-auto px-5 sm:px-8 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-sm text-slate-500">
          <p>Costra - Business Management Platform</p>
          <p>© 2026 Costra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
