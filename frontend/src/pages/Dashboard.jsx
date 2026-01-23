import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); 
  };

  return (
    <div className="min-h-screen premium-gradient p-6 lg:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
              Dashboard
            </h1>
            <p className="text-slate-400 mt-2 font-medium">Welcome back to the sharing community.</p>
          </div>
          <button 
            className="px-6 py-2 rounded-full border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white transition-all text-sm font-semibold"
            onClick={handleLogout}
          >
            Logout
          </button>
        </header>

        {/* Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <Link to="/items" className="glass-card p-8 group">
            <div className="w-14 h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-3xl">📦</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">View Resources</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Browse available food and resources shared by your local community.
            </p>
            <div className="mt-6 text-indigo-400 font-bold text-sm flex items-center gap-2">
              Explore Now <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          <Link to="/add-item" className="glass-card p-8 group">
            <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-3xl">➕</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Donate Item</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Have extra food or resources? List them here to help someone in need.
            </p>
            <div className="mt-6 text-emerald-400 font-bold text-sm flex items-center gap-2">
              Share Wealth <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          <Link to="/recommend" className="glass-card p-8 group">
            <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-3xl">✨</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Smart Picks</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Personalized recommendations based on your location and preferences.
            </p>
            <div className="mt-6 text-amber-400 font-bold text-sm flex items-center gap-2">
              View Picks <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

        </div>

        {/* Quick Stats or Info Footer */}
        <div className="mt-12 glass-card p-6 flex flex-col md:flex-row items-center justify-between border-indigo-500/20">
            <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-slate-300 text-sm font-medium">Global impact: 1,240 items shared today</span>
            </div>
            <div className="text-slate-500 text-xs mt-4 md:mt-0">
                Network Status: Operational
            </div>
        </div>
      </div>
    </div>
  );
}