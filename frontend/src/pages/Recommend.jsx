import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Recommended() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/items/recommended").then(res => setItems(res.data));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="page-title text-indigo-400">Recommended for You</h2>
      <p className="text-slate-400 mb-8">Based on your location and past activity.</p>
      
      <div className="space-y-4">
        {items.length > 0 ? (
          items.map(i => (
            <div key={i._id} className="card flex justify-between items-center border-l-4 border-l-indigo-500">
              <div>
                <h3 className="text-lg font-semibold">{i.name || i.title}</h3>
                <p className="text-sm text-slate-500">{i.location || "Nearby"}</p>
              </div>
              <button className="text-indigo-400 font-medium hover:text-indigo-300">View Details →</button>
            </div>
          ))
        ) : (
          <div className="card text-center py-10 text-slate-500">
            No recommendations found yet. Start exploring!
          </div>
        )}
      </div>
    </div>
  );
}