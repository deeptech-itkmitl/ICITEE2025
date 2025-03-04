import { useEffect, useState } from "react";
import axios from "axios";

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [countryData, setCountryData] = useState([]);
  const [visitorInfo, setVisitorInfo] = useState(null);

  useEffect(() => {
    axios.get("https://ipinfo.io/json?token=a999487011bb0b")
      .then(response => {
        const { ip, city, country, region, org, timezone } = response.data;
        setVisitorInfo({ ip, city, country, region, org, timezone });

        // ส่งข้อมูลประเทศไปที่ Backend
        axios.post("http://localhost:5000/api/visitor", { country })
          .then(() => {   
                     
            // ดึงจำนวนผู้เยี่ยมชมจาก Backend
            axios.get("http://localhost:5000/api/visitor")
              .then(response => {
                setVisitorCount(response.data.count);
                setCountryData(response.data.countryData);
              })
              .catch(error => console.error("Error fetching visitor count", error));
          })
          .catch(error => console.error("Error updating visitor count", error));
      })
      .catch(error => console.error("Error getting IP information", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h4 className="text-2xl font-bold mb-4">Visitor Counter</h4>
      <p className="text-lg mb-4">Total visitors: {visitorCount.toLocaleString()}</p>
      {visitorInfo && (
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h4 className="text-xl font-semibold mb-2">Your Info</h4>
          <p><strong>IP:</strong> {visitorInfo.ip}</p>
          <p><strong>City:</strong> {visitorInfo.city}</p>
          <p><strong>Region:</strong> {visitorInfo.region}</p>
          <p><strong>Country:</strong> {visitorInfo.country}</p>
          <p><strong>Organization:</strong> {visitorInfo.org}</p>
          <p><strong>Timezone:</strong> {visitorInfo.timezone}</p>
        </div>
      )}

      <h4 className="text-xl font-semibold mb-2">Visitors by Country:</h4>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Country</th>
            <th className="py-2 px-4 border-b">Visitor Count</th>
          </tr>
        </thead>
        <tbody>
          {countryData.map((country, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b">{country.name}</td>
              <td className="py-2 px-4 border-b">{country.count.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
