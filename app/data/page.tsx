"use client";
import React from "react";
import "./page.css";
import Table from "@/components/Table";
import UploadPage from "@/components/UploadPage";
// import "../globals.css"

const page = () => {
  const data = [
    { Plates: "John Doe", Dates: 28 },
    { Plates: "Jane Smith", Dates: 32 },
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
