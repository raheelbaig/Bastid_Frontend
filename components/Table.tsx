import React from "react";

type TableRow = {
  Plate: string;
  S_No: number;
};

type TableProps = {
  data: TableRow[];
};

const Table = ({ data }: TableProps) => {
  return (
    <div className="flex justify-center mt-5">
      <div className="w-80vw">
        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-200">
            <thead>
              <tr>
                <th className="px-16 py-4 bg-gray-100 text-bold text-xl">
                  S.No
                </th>
                <th className="px-16 py-4 bg-gray-100 text-bold text-xl">
                  Plates
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="px-16 py-2 border-b border-gray-300 bg-gray-200">
                    {row.S_No}
                  </td>
                  <td className="px-16 py-2 border-b border-gray-300">
                    {row.Plate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
