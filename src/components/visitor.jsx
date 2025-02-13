import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa"; // ✅ ใช้ไอคอนแสดงว่าเป็น Counter

export function VisitorCounter() {
  const [visits, setVisits] = useState(() => {
    return Number(localStorage.getItem("visitCounter")) || 0;
  });

  useEffect(() => {
    setVisits((prevVisits) => {
      const newVisits = prevVisits + 1;
      localStorage.setItem("visitCounter", newVisits);
      return newVisits;
    });
  }, []);

  // 📅 ดึงวันที่ปัจจุบัน
  const today = new Date();
  const dateString = today.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="visitor-counter-container">
      <div className="visitor-counter-box">
        <FaUsers className="visitor-icon" />
        <p className="visitor-text">Visitor Count</p>
        <p className="visitor-number">{visits}</p>
        <p className="visitor-date">{dateString}</p>
      </div>
    </div>
  );
}
