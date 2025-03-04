// server.js (Backend)
const express = require("express");
const fs = require("fs");
const path = require("path");


const app = express();
const port = 5000;

app.use(express.json());

// API สำหรับการเพิ่มจำนวนผู้เข้าชมพร้อมข้อมูลประเทศ
app.post("/api/visitor", (req, res) => {
  
  const { country } = req.body;  // รับข้อมูลประเทศจาก request
  const filePath = path.join(__dirname, "visitor_count.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    let visitorData;
    if (err) {
      visitorData = { count: 1, countryData: [{ name: country, count: 1 }] };
    } else {
      visitorData = JSON.parse(data);
      visitorData.count += 1;
      
      // ตรวจสอบว่าประเทศนี้มีการเยี่ยมชมแล้วหรือไม่
      const existingCountry = visitorData.countryData.find(item => item.name === country);
      if (existingCountry) {
        existingCountry.count += 1;
      } else {
        visitorData.countryData.push({ name: country, count: 1 });
      }
    }

    fs.writeFile(filePath, JSON.stringify(visitorData), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing file" });
      }
      return res.status(200).json({ message: "Visitor count updated", count: visitorData.count });
    });
  });
});

// API สำหรับดึงจำนวนผู้เข้าชมและจำนวนผู้เข้าชมจากแต่ละประเทศ
app.get("/api/visitor", (req, res) => {
  const filePath = path.join(__dirname, "visitor_count.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file" });
    }

    const visitorData = JSON.parse(data);
    return res.status(200).json({ count: visitorData.count, countryData: visitorData.countryData });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
