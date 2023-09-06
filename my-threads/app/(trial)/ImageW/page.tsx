"use client"
import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Function to handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      // Set the selected file
      setSelectedFile(file);

      // Read the file and set the image URL
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <p>File Size: {selectedFile.size} bytes</p>
        </div>
      )}
      {imageUrl && (
        <div>
          <p>Preview:</p>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '50%' }} />
        </div>
      )}
    </div>
  );
}

export default FileUpload;
