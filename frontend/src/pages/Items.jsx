import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/items").then(res => setItems(res.data));
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="page-title !mb-0">Available Resources</h2>
        <Link to="/dashboard" className="text-indigo-400 hover:underline text-sm">Back to Dashboard</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item._id} className="card border border-slate-800 hover:border-indigo-500 transition-all">
            <h3 className="text-xl font-bold mb-2 text-indigo-400">{item.name}</h3>
            <p className="text-slate-400 flex items-center gap-2">
              <span className="text-sm">📍</span> {item.location}
            </p>
            <button className="button mt-4 !py-2 text-sm bg-slate-800 hover:bg-slate-700">
              Claim Resource
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}