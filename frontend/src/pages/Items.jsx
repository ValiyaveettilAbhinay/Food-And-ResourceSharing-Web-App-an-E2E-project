import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import ItemCard from "../components/ItemCard"; // 1. Import the component we updated

export default function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // 2. Add loading state

  useEffect(() => {
    axios.get("/items")
      .then(res => {
        setItems(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching items:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Available Resources</h2>
          <p className="text-slate-400 text-sm mt-1">Help your community by claiming only what you need.</p>
        </div>
        <Link to="/dashboard" className="text-indigo-400 hover:text-indigo-300 transition-all font-medium">
          ← Back to Dashboard
        </Link>
      </div>

      {loading ? (
        /* 3. Show a simple loading message or spinner */
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      ) : items.length === 0 ? (
        /* 4. Handle empty state */
        <div className="text-center py-20 bg-slate-900 rounded-2xl border border-slate-800">
          <p className="text-slate-400">No resources available at the moment.</p>
          <Link to="/post-item" className="text-indigo-400 underline mt-2 inline-block">Be the first to share!</Link>
        </div>
      ) : (
        /* 5. Use the Grid with the specialized ItemCard component */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(item => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}