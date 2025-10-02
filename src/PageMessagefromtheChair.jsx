import React from "react";
import HeaderName from "./components/headerName"; // แก้ไขการนำเข้าให้ตรง
import { Navigation } from "./components/navigation"; // นำเข้า Navigation
import { Footer } from "./components/Footer";
import MessagefromtheChair from "./components/messagefromthechair";

const PageMessagefrom = ({ data }) => { // รับข้อมูลจาก props
  return (
    <div>
      {/* แสดง Header */}
      <HeaderName data={data.header} />
      {/* แสดง Navigation */}
      <Navigation />
      {/* แสดงคอมโพเนนต์ที่กำหนดใน route ด้วย Outlet */}
      <main>
        < MessagefromtheChair data={data.detail} />
      </main>
       {/* แสดง Footer */}
       <Footer/>
      
    </div>
  );
};

export default PageMessagefrom;
