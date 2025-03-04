import { useEffect, useState } from "react";
import axios from "axios";

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [countryData, setCountryData] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // ✅ ดึงข้อมูล IP ปัจจุบันของผู้ใช้
    axios.get("https://ipinfo.io/json?token=a999487011bb0b")
      .then(response => {
        setUserInfo(response.data);

        const country = response.data.country;

        // ✅ ส่งข้อมูลไปยัง Backend
        return axios.post("http://localhost:5000/api/visitor", { country });
      })
      .then(() => {
        // ✅ ดึงจำนวนผู้เยี่ยมชมล่าสุด
        return axios.get("http://localhost:5000/api/visitor");
      })
      .then(response => {
        setVisitorCount(response.data.count || 0);

        // ✅ กรองข้อมูลที่ไม่มีชื่อประเทศ
        const validCountries = response.data.countryData.filter(
          country => country.name
        );

        setCountryData(validCountries);
      })
      .catch(error => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <div className="container p-4">
      <h4 className="text-2xl font-bold">Visitor Counter</h4>
      <p className="mt-2 text-lg">🌍 Total visitors: {visitorCount.toLocaleString()}</p>

      {userInfo && (
        <div className="mt-4 p-4 border rounded-lg bg-gray-100">
          <h4 className="text-xl font-semibold">🛠 Your Info</h4>
          <p><strong>IP:</strong> {userInfo.ip}</p>
          <p><strong>City:</strong> {userInfo.city}</p>
          <p><strong>Region:</strong> {userInfo.region}</p>
          <p><strong>Country:</strong> {userInfo.country}</p>
          <p><strong>Organization:</strong> {userInfo.org}</p>
          <p><strong>Timezone:</strong> {userInfo.timezone}</p>
        </div>
      )}

      <h4 className="mt-6 text-lg font-semibold">📊 Visitors by Country:</h4>
      <table className="min-w-full border-collapse border border-gray-300 mt-2">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2 text-left">Country</th>
            <th className="border px-4 py-2 text-right">Visitor Count</th>
          </tr>
        </thead>
        <tbody>
          {countryData.length > 0 ? (
            countryData.map((country, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border px-4 py-2">{country.name}</td>
                <td className="border px-4 py-2 text-right">
                  {country.count.toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center py-2">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
