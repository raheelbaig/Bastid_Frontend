import React from 'react';

type TableRow = {
  Plates: string;
  Dates: number;
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
                <th className="px-16 py-4 bg-gray-100">Plates</th>
                <th className="px-16 py-4 bg-gray-100">Dates</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="px-16 py-2 border-b border-gray-200">{row.Plates}</td>
                  <td className="px-16 py-2 border-b border-gray-200">{row.Dates}</td>
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