import { useEffect, useRef, useState } from "react";
import { askQuestionAPI } from "../api/ragApi";
import Message from "./Message";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // 🔽 Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendQuestion = async () => {
    if (!question.trim() || loading) return;

    const userMsg = { role: "user", text: question.trim() };

    setMessages((prev) => [...prev, userMsg]);
    setQuestion("");
    setLoading(true);

    try {
      const res = await askQuestionAPI(userMsg.text);

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: res?.data?.answer || "No answer found in document."
        }
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "⚠️ Something went wrong. Please try again."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // ⌨️ Enter key support
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendQuestion();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="empty-chat">
            Upload a document and ask your first question 📄
          </div>
        )}

        {messages.map((m, i) => (
          <Message key={i} role={m.role} text={m.text} />
        ))}

        {loading && <div className="typing">AI is thinking...</div>}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-bar">
        <input
          type="text"
          value={question}
          placeholder="Ask from your document..."
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />

        <button onClick={sendQuestion} disabled={loading}>
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
