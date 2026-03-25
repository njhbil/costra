import { useNavigate } from "react-router-dom";
import "../../App.css";
import { useEffect, useState } from "react";
import { DashboardState } from "./DashboardStats";
import Company from "../management/Company";
import Product from "../management/Product";
import Transaction from "../management/Transaction";
import User from "../management/User";
import { GreetingDashboard } from "./GreetingDashboard";
import CreateCompany from "../management/authCompany/CreateCompany";

type MenuKey =
  | "Dashboard"
  | "Company"
  | "Product"
  | "Transaction"
  | "User"
  | "Activity";

function Dashboard() {
  const navigate = useNavigate();

  const [hasCompany, setHasCompany] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [menuBar, setMenuBar] = useState<MenuKey>("Dashboard");
  const [username, setUsername] = useState("");

  const handleCloseModal = () => {
    setShowModal(false);

    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }
      try {
        const response = await fetch("http://localhost:3000/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const result = await response.json();
          if (result.status === "success") {
            setUsername(result.data.username);
            if (
              Array.isArray(result.data.companies) &&
              result.data.companies.length > 0
            ) {
              setHasCompany(true);
            } else {
              setHasCompany(false);
            }
          } else if (result.message) {
            setUsername("New User");
          }
        }
      } catch (error) {
        console.error("Failed to get User Data", error);
      }
    };
    fetchUserData();
  }, [navigate]);

  const renderContent = () => {
    if (!hasCompany) {
      return (
        <div className="p-8">
          <CreateCompany
            onCompanyCreated={() => {
              setHasCompany(true);
              setMenuBar("Dashboard");
            }}
          />
        </div>
      );
    }

    if (menuBar === "Dashboard") {
      return (
        <div className="min-h-full">
          <div className="px-8 pb-8">
            <DashboardState />
          </div>
        </div>
      );
    }

    if (menuBar === "Company") {
      return (
        <div className="p-8">
          <Company />
        </div>
      );
    }

    if (menuBar === "Product") {
      return (
        <div className="p-8">
          <Product />
        </div>
      );
    }

    if (menuBar === "Transaction") {
      return (
        <div className="p-8">
          <Transaction />
        </div>
      );
    }

    if (menuBar === "User") {
      return (
        <div className="p-8">
          <User />
        </div>
      );
    }

    if (menuBar === "Activity") {
      return (
        <div className="p-8">
          <section className="bg-white rounded-xl border border-slate-200 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Main Menu / Activity
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-2">
              Activity Feed
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              This section is reserved for system logs, recent actions, and team
              activity timeline.
            </p>
            <div className="mt-6 space-y-3">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-600">
                Coming soon: recent product changes.
              </div>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-600">
                Coming soon: user role updates.
              </div>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-600">
                Coming soon: transaction approvals.
              </div>
            </div>
          </section>
        </div>
      );
    }

    return null;
  };

  const getMenuClass = (menu: MenuKey, disabled = false) => {
    if (disabled) {
      return "w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm text-slate-500/80 bg-slate-800/40 cursor-not-allowed";
    }

    if (menuBar === menu) {
      return "w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm bg-blue-600 text-white";
    }

    return "w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm hover:bg-slate-700 transition-colors";
  };

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
          {!hasCompany ? (
            <div className="px-4 py-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs leading-5">
              Company profile is required before accessing dashboard menus.
            </div>
          ) : null}
          <p className="text-slate-400 text-xs font-bold uppercase pt-4 px-2">
            Main Menu
          </p>
          <button
            disabled={!hasCompany}
            onClick={() => setMenuBar("Dashboard")}
            className={`${getMenuClass("Dashboard", !hasCompany)} font-medium`}
          >
            <span>Dashboard</span>
            {!hasCompany ? (
              <span className="text-[10px] uppercase tracking-wide">
                Locked
              </span>
            ) : null}
          </button>

          <p className="text-slate-400 text-xs font-bold uppercase pt-6 px-2">
            Management
          </p>
          <button
            disabled={!hasCompany}
            className={getMenuClass("Product", !hasCompany)}
            onClick={() => setMenuBar("Product")}
          >
            <span>Product</span>
            <span className="bg-slate-700 text-xs px-2 py-0.5 rounded-full">
              12
            </span>
          </button>

          <button
            disabled={!hasCompany}
            className={getMenuClass("User", !hasCompany)}
            onClick={() => setMenuBar("User")}
          >
            <span>User</span>
            <span className="bg-slate-700 text-xs px-2 py-0.5 rounded-full">
              8
            </span>
          </button>

          <button
            disabled={!hasCompany}
            className={getMenuClass("Company", !hasCompany)}
            onClick={() => setMenuBar("Company")}
          >
            <span>Company</span>
            <span className="bg-slate-700 text-xs px-2 py-0.5 rounded-full">
              3
            </span>
          </button>

          <button
            disabled={!hasCompany}
            className={getMenuClass("Transaction", !hasCompany)}
            onClick={() => setMenuBar("Transaction")}
          >
            <span>Transaction</span>
            <span className="bg-slate-700 text-xs px-2 py-0.5 rounded-full">
              18
            </span>
          </button>

          <p className="text-slate-400 text-xs font-bold uppercase pt-6 px-2">
            Tools
          </p>
          <button
            disabled={!hasCompany}
            className={getMenuClass("Activity", !hasCompany)}
            onClick={() => setMenuBar("Activity")}
          >
            <span>Activity</span>
            <span className="bg-slate-700 text-xs px-2 py-0.5 rounded-full">
              New
            </span>
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
            className="w-full flex items-center px-4 py-3 hover:bg-red-900/40 text-red-400 rounded-lg text-sm mt-10"
          >
            Log Out
          </button>
        </nav>

        {/* Footer Sidebar */}
        <div className="p-4 border-t border-slate-700">
          <div className="bg-slate-700/50 rounded-lg p-3 text-center">
            <p className="text-xs text-slate-400">COSTRA v2.0.1</p>
            <p className="text-xs text-slate-500 mt-1">
              © 2026 All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        {hasCompany ? (
          <GreetingDashboard
            username={username}
            showWelcome={menuBar === "Dashboard"}
          />
        ) : null}
        {renderContent()}
      </div>

      <div className={`modal ${showModal ? "modal-open" : ""}`}>
        <div className="modal-box ">
          <h3 className="font-bold text-lg">Log Out</h3>
          <p className="py-4">Are you sure you want to log out?</p>
          <div className="modal-action">
            <button className="btn" onClick={() => setShowModal(false)}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleCloseModal}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
