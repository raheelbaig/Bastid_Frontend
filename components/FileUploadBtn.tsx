import React from "react";

const FileUploadButton = ({ onFileUpload }: { onFileUpload: any }) => {
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    onFileUpload(file);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
    </div>
  );
};

export default FileUploadButton;
