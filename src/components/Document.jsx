import { useState } from "react";
import { uploadDocumentAPI } from "../api/ragApi";

const UploadDocument = ({ onUploaded }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadHandler = async () => {
    if (!file) {
      alert("Please select a PDF file");
      return;
    }

    setLoading(true);

    try {
      await uploadDocumentAPI(file);
      onUploaded && onUploaded();
      alert("✅ Document uploaded successfully");
      setFile(null);
    } catch (err) {
      alert("❌ Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-section">
      <label className="upload-box">
        <input
          type="file"
          hidden
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <span>{file ? `📄 ${file.name}` : "📤 Upload PDF"}</span>
      </label>

      <button
        className="upload-btn"
        onClick={uploadHandler}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default UploadDocument;
