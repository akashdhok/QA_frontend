import axios from "axios";

const API = axios.create({
  baseURL: "https://qa-backend-e5u7.onrender.com/api/user/"
});

export const uploadDocumentAPI = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return API.post("/upload", formData);
};

export const askQuestionAPI = (question) => {
  return API.post("/ask", { question });
};