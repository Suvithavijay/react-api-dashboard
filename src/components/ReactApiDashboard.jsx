import { useState, useEffect } from "react";
import axios from "axios";

export default function ReactApiDashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch placeholder API data
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data.slice(0, 10)); // only show 10 items
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">React API Dashboard</h1>
      <ul className="space-y-3">
        {data.map((item) => (
          <li
            key={item.id}
            className="border border-gray-300 p-4 rounded shadow-sm hover:bg-gray-50"
          >
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
