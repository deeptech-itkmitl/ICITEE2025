import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://icitee2025.it.kmitl.ac.th:5000";

export default function VisitorCounter() {

  //map counter visit between backend and frontend
  const [totalVisitors, setTotalVisitors] = useState(0);

  // ฟังก์ชันสำหรับเพิ่มผู้เยี่ยมชม
  const addVisitor = (country) => {
    axios
      .post(`${API_BASE_URL}/api/visitor`, { country })
      .then(() => {
        // ทำการดึงข้อมูลใหม่เพื่ออัปเดตจำนวนนักท่องเที่ยว
        return axios.get(`${API_BASE_URL}/api/visitor`);
      })
      .then((response) => {
        setTotalVisitors(response.data.count || 0);  // อัปเดตจำนวนผู้เยี่ยมชม
      })
      .catch((error) => console.error("Error adding visitor", error));
  };

  useEffect(() => {
    // ดึงข้อมูล IP และประเทศจาก API ภายนอก (ipinfo.io)
    axios
      .get("https://ipinfo.io/json?token=a999487011bb0b")
      .then((response) => {
        // ส่งข้อมูลประเทศที่ผู้เยี่ยมชมเข้ามาจากไปยัง API ของคุณ
        addVisitor(response.data.country);  // เรียกใช้ฟังก์ชัน addVisitor
      })
      .then(() => axios.get(`${API_BASE_URL}/api/visitor`))  // ดึงข้อมูลจำนวนผู้เข้าชม
      .then((response) => {
        setTotalVisitors(response.data.count || 0);  // อัปเดตจำนวนผู้เยี่ยมชม
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);  // ใช้ useEffect เพื่อเรียก API เมื่อโหลดคอมโพเนนต์เสร็จ

  return (
    <div className="container p-6 max-w-xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg text-white">
      <h4 className="text-3xl font-extrabold text-center mb-4">🌍 Visitor Counter</h4>
      <p className="text-lg font-semibold text-center">
        <span className="text-4xl bg-gradient-to-r from-purple-500 to-white text-transparent bg-clip-text">{totalVisitors.toLocaleString()}</span> total visitors
      </p>
      <div className="mt-6 p-4 bg-white text-gray-800 rounded-lg shadow-md">
        <p className="text-center text-xl font-medium">Thank you for visiting our site!</p>
        <p className="mt-2 text-center text-sm"></p>
      </div>
    </div>
  );
}
