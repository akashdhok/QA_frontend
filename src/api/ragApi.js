import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.29.89:7867/api/user/"
});

export const uploadDocumentAPI = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return API.post("/upload", formData);
};

export const askQuestionAPI = (question) => {
  return API.post("/ask", { question });
};