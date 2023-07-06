"use client";
import React, { useState, useEffect } from "react";
import "./page.css";
import Table from "@/components/Table";
import UploadPage from "@/components/UploadPage";
// import "../globals.css"

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-8">
        <UploadPage />
      </div>
    </div>
  );
};

export default page;
