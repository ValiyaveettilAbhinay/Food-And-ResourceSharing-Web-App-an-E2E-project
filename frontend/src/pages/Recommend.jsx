import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Recommend() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/items/recommend").then(res => setItems(res.data));
  }, []);

  return (
    <div>
      <h2>Recommended Items</h2>

      {items.map(item => (
        <p key={item._id}>
          {item.name} - Expiry: {item.expiry || "N/A"}
        </p>
      ))}
    </div>
  );
}
