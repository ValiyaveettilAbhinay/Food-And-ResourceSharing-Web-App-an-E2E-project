import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/items").then(res => setItems(res.data));
  }, []);

  return (
    <div>
      <h2>Items</h2>

      {items.map(item => (
        <div key={item._id}>
          <p>{item.name} - {item.location}</p>
        </div>
      ))}
    </div>
  );
}
