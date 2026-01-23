import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  const linkClass = path =>
    `block px-3 py-2 rounded-lg ${
      pathname === path
        ? "bg-indigo-600 text-white"
        : "text-slate-400 hover:text-white hover:bg-slate-800"
    }`;

  return (
    <div className="min-h-screen flex bg-slate-950">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 p-6 hidden md:flex flex-col">
        <h1 className="text-2xl font-bold mb-10">E2E Platform</h1>

        <nav className="space-y-2">
          <Link className={linkClass("/dashboard")} to="/dashboard">Dashboard</Link>
          <Link className={linkClass("/items")} to="/items">Items</Link>
          <Link className={linkClass("/add-item")} to="/add-item">Add Item</Link>
          <Link className={linkClass("/recommend")} to="/recommend">Recommended</Link>
        </nav>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="mt-auto text-left text-red-400 hover:text-red-300"
        >
          Logout
        </button>
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-8 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}
