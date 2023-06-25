import React from "react";
import "./page.css";
import Table from "@/components/Table";
// import "../globals.css"

const page = () => {
  
    const data = [
        { Plates: 'John Doe', Dates: 28 },
        { Plates: 'Jane Smith', Dates: 32 },
        // Add more data rows as needed
      ];
    
      return (
        <div>
          
          <Table data={data} />
        </div>
      );
    };

export default page;
