const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 5000;

// ใช้ CORS เพื่อให้สามารถเข้าถึง API    ได้จากโดเมนอื่น
app.use(cors());

// รองรับการรับข้อมูลในรูปแบบ JSON
app.use(express.json());

// กำหนด path ของไฟล์ข้อมูลผู้เข้าชม
const filePath = path.join(__dirname, "visitor_count.json");

// ฟังก์ชันสำหรับอ่านข้อมูลจากไฟล์
const readVisitorData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        // หากไม่พบไฟล์หรือเกิดข้อผิดพลาด ให้ส่งค่าเริ่มต้น
        resolve({ count: 0, countryData: [] });
      } else {
        try {
          resolve(JSON.parse(data));
        } catch (parseError) {
          // หากไม่สามารถแปลง JSON ได้ ให้ส่งค่าเริ่มต้น
          resolve({ count: 0, countryData: [] });
        }
      }
    });
  });
};

// ฟังก์ชันสำหรับเขียนข้อมูลไปยังไฟล์
const writeVisitorData = (visitorData) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, JSON.stringify(visitorData), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// API สำหรับการเพิ่มจำนวนผู้เข้าชมพร้อมข้อมูลประเทศ
app.post("/api/visitor", async (req, res) => {
  const { country } = req.body;  // รับข้อมูลประเทศจาก request

  try {
    let visitorData = await readVisitorData();

    // เพิ่มจำนวนผู้เข้าชมโดยรวม
    visitorData.count += 1;

    // ตรวจสอบว่าประเทศนี้มีการเยี่ยมชมแล้วหรือไม่
    const existingCountry = visitorData.countryData.find(item => item.name === country);
    if (existingCountry) {
      existingCountry.count += 1;
    } else {
      visitorData.countryData.push({ name: country, count: 1 });
    }

    // เขียนข้อมูลกลับไปยังไฟล์
    await writeVisitorData(visitorData);

    // ส่งการตอบกลับ
    return res.status(200).json({ message: "Visitor count updated", count: visitorData.count });
  } catch (err) {
    console.error("Error handling visitor data:", err);
    return res.status(500).json({ message: "Error updating visitor data" });
  }
});

// API สำหรับดึงจำนวนผู้เข้าชมและจำนวนผู้เข้าชมจากแต่ละประเทศ
app.get("/api/visitor", async (req, res) => {
  try {
    const visitorData = await readVisitorData();
    return res.status(200).json({ count: visitorData.count, countryData: visitorData.countryData });
  } catch (err) {
    console.error("Error reading visitor data:", err);
    return res.status(500).json({ message: "Error reading visitor data" });
  }
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server running at http://icitee2025.it.kmitl.ac.th:${port}`);
});
