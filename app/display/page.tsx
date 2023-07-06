"use client";
import React, { useState, useEffect } from "react";

import Table from "@/components/Table";
import UploadPage from "@/components/UploadPage";

const page = () => {
  const [apiData, setApiData] = useState<any>([]);
  const [tableList, setTableList] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/display");
        const jsonData = await response.json();
        const acc = Object.keys(jsonData);
        console.log(jsonData);
        console.log(acc);
        setTableList(acc);
        setApiData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error case
      }
    };

    fetchData();
  }, []);
  const data = [
    { Plate: "John Doe", S_No: 28 },
    { Plate: "Jane Smith", S_No: 32 },
    // Add more data rows as needed
  ];
  return (
    <div>
      <h1 className="text-bold text-3xl text-center text-blue-500 mt-8">
        Data Inside dataBase{" "}
      </h1>

      {tableList ? (
        <div className="mt-5">
          {tableList.map((val: any, id: number) => (
            <div>
              <h1 className="text-bold" key={id}>
                {val}
              </h1>
              <div>
                <Table data={apiData[val]} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading state</p>
      )}
      <div>ace</div>
    </div>
  );
};

export default page;
