import { useState } from "react";
import axios from "../api/axios";

export default function AddItem() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const submit = async () => {
    await axios.post("/items", { name, location });
    alert("Item added");
  };

  return (
    <div>
      <h2>Add Item</h2>

      <input
        placeholder="Item name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <br />

      <input
        placeholder="Location"
        value={location}
        onChange={e => setLocation(e.target.value)}
      />

      <br />

      <button onClick={submit}>Add</button>
    </div>
  );
}
