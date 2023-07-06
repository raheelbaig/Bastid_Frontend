import React from "react";
import axios from "axios";
import FileUploadButton from "./FileUploadBtn";
import { useRouter } from "next/navigation";
const UploadPage = () => {
  const router = useRouter();
  const handleFileUpload = async (file: any) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      // Make a POST request to your API endpoint for file upload
      const response = await axios.post(
        "http://localhost:3000/uploadcsv",
        formData
      );

      console.log("File uploaded successfully:", response.data);
      // Handle any further actions or display success message
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle error or display error message
    }
  };

  return (
    <div className="flex justify-normal">
      <h1 className="text-bold text-2xl text-blue-900 ">Upload Page</h1>
      <FileUploadButton onFileUpload={handleFileUpload} />
      <button
        className="text-bold text-white bg-blue-500 w-36 h-12 hover:bg-blue-900 text-lg rounded-xl"
        onClick={() => {
          router.push("/display");
        }}
      >
        Display Data
      </button>
    </div>
  );
};

export default UploadPage;
