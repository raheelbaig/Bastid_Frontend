import React, { useState } from "react";

const FileUploadButton = ({ onFileUpload }: { onFileUpload: any }) => {
  const [file, setFile] = useState();
  const [error, setError] = useState("");
  const [uploadText, setUploadText] = useState("");

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setFile(file);
    // onFileUpload(file);
  };

  const uploadFile = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("http://localhost:3000/uploadexcel", {
          method: "POST",
          body: formData,
        });
        if (response.status === 200) {
          console.log("File has been uploaded successfully.");
          setUploadText("File has been uploaded successfully");
        } else {
          console.log("Error in Uploading file");
          setError("Error in Uploading file");
        }
      } catch (e) {
        console.log("Error in Uploading Files", e);
        setError(`Error in Uploading Files ${e}`);
      }
    } else {
      console.log("No file selected   ");
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        <input
          className="text-bold text-xl rounded-sm"
          type="file"
          accept=".xlsx"
          id="fileUpload"
          name="fileUpload"
          onChange={handleFileChange}
        />
        <input
          type="submit"
          value="Upload"
          onClick={uploadFile}
          className=" mt-4 cursor-pointer w-24 h-8 text-bold text-white bg-blue-700 rounded-lg border-black hover:bg-blue-900"
        />
        {uploadText && (
          <p className="mt-2 text-bold text-green-500">{uploadText}</p>
        )}

        {error && <p className="mt-2 text-bold text-red-500">{error}</p>}
      </div>
      {/* <input type="file" accept=".xlxs" onChange={handleFileChange} /> */}
    </div>
  );
};

export default FileUploadButton;
