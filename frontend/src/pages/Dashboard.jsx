// import { useEffect, useState } from "react";
// import axios from "../api/axios";

// export default function Dashboard() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     axios.get("/dashboard").then(res => setData(res.data));
//   }, []);

//   if (!data) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>My Impact Dashboard</h2>
//       <p>Items Posted: {data.postedItems}</p>
//       <p>Items Exchanged: {data.exchangedItems}</p>
//       <p>Requests Sent: {data.requestsSent}</p>
//       <p>Waste Reduced Units: {data.wasteReduced}</p>
//     </div>
//   );
// }

import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <Link to="/items">View Items</Link><br />
      <Link to="/add-item">Add Item</Link><br />
      <Link to="/recommend">Recommended</Link><br />

      <br />
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
}

