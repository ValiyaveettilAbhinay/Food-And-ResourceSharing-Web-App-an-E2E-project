import axios from "../api/axios";

export default function ItemCard({ item }) {
  const sendRequest = async () => {
    await axios.post("/requests/send", { itemId: item._id });
    alert("Request sent");
  };

  return (
    <div>
      <h3>{item.title}</h3>
      <button onClick={sendRequest}>Request</button>
    </div>
  );
}
