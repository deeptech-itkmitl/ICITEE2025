import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://icitee2025.it.kmitl.ac.th:5000";

export default function VisitorCounter() {
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVisitorData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/visitor`);
      setTotalVisitors(response.data.count || 0);

      const sortedCountryData = response.data.countryData
        .sort((a, b) => b.count - a.count)
        .slice(0, 3);

      setCountryData(sortedCountryData);
    } catch (error) {
      console.error("Error fetching visitor data:", error);
    }
  };

  useEffect(() => {
    const registerVisitor = async () => {
      try {
        const ipResponse = await axios.get("https://ipinfo.io/json?token=a999487011bb0b");
        const country = ipResponse.data.country || "Unknown";
        await axios.post(`${API_BASE_URL}/api/visitor`, { country });
        await fetchVisitorData();
      } catch (error) {
        console.error("Error registering visitor:", error);
      } finally {
        setLoading(false);
      }
    };

    registerVisitor();
  }, []);

  return (
    <div className="container p-6 max-w-xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg text-white flex flex-col items-center">
      <h4 className="text-3xl font-extrabold text-center mb-4">🌍 Visitor Counter</h4>

      {loading ? (
        <p className="text-center text-lg font-semibold">Loading...</p>
      ) : (
        <>
          <p className="text-lg font-semibold text-center">
            <span className="text-4xl bg-gradient-to-r from-purple-500 to-white text-transparent bg-clip-text">
              {totalVisitors.toLocaleString()}
            </span>{" "}
            total visitors
          </p>

          <div className="container">
            <ResponsiveContainer width="20%" height="20%">
              <BarChart data={countryData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={80} />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
}
