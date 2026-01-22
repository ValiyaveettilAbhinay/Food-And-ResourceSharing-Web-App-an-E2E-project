import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Recommended() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/items/recommended").then(res => setItems(res.data));
  }, []);

  return (
    <div>
      <h2>Recommended for You</h2>
      {items.map(i => (
        <p key={i._id}>{i.title}</p>
      ))}
    </div>
  );
}
