"use client";
import React, { useState, useEffect } from "react";
import "./page.css";
import Table from "@/components/Table";
import UploadPage from "@/components/UploadPage";
// import "../globals.css"

const page = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/display");
        const jsonData = await response.json();
        const acc = Object.keys(jsonData);
        console.log(jsonData);
        console.log(acc);
        setApiData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error case
      }
    };

    fetchData();
  }, []);
  const data = [
    { Plates: "John Doe", S_No: 28 },
    { Plates: "Jane Smith", S_No: 32 },
    // Add more data rows as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <Table data={data} />
      <div className="mt-8">
        <UploadPage />
      </div>
    </div>
  );
};

export default page;
