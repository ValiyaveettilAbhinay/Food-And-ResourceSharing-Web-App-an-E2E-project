import React, { useState } from "react";
import axios from "../api/axios";

export default function ItemCard({ item }) {
  const [loading, setLoading] = useState(false);
  // localStatus handles the UI update immediately after clicking
  const [localStatus, setLocalStatus] = useState(item.userRequestStatus);

  const user = JSON.parse(localStorage.getItem("user"));
  const isOwner = user?.id === item.owner; 

  const sendRequest = async () => {
    if (isOwner) return;

    try {
      setLoading(true);
      await axios.post("/requests/send", { itemId: item._id });
      setLocalStatus("pending"); // Update UI to 'Pending' immediately
      alert("Request sent successfully!");
    } catch (error) {
      const errorMsg = error.response?.data?.msg || "Failed to send request.";
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden">
      {item.image && (
        <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
      )}

      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2.5 py-0.5 rounded-full uppercase">
            {item.category || "General"}
          </span>
          <span className={`text-xs font-bold px-2 py-1 rounded ${
            item.status === 'available' ? 'text-green-600 bg-green-50' : 'text-amber-600 bg-amber-50'
          }`}>
            {item.status.toUpperCase()}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name || item.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>

        {/* --- LOGIC FOR BUTTON STATES --- */}
        {isOwner ? (
          <div className="bg-slate-100 text-slate-500 text-center py-2 rounded-xl text-sm font-medium border border-dashed border-slate-300">
            You are the donor
          </div>
        ) : localStatus === "pending" ? (
          <div className="bg-amber-50 text-amber-700 text-center py-3 rounded-xl text-sm font-bold border border-amber-200 flex items-center justify-center gap-2">
            <span className="animate-pulse">⏳</span> Pending Acceptance
          </div>
        ) : localStatus === "approved" ? (
          <div className="bg-green-100 text-green-800 text-center py-3 rounded-xl text-sm font-bold border border-green-200">
            ✅ Request Accepted
          </div>
        ) : (
          <button 
            onClick={sendRequest} 
            disabled={loading || item.status !== "available"}
            className={`w-full py-3 rounded-xl font-bold transition-all shadow-sm
              ${loading || item.status !== "available"
                ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                : "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95"
              }`}
          >
            {loading ? "Processing..." : "Claim Resource"}
          </button>
        )}
      </div>
    </div>
  );
}