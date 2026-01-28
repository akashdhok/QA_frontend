import UploadDocument from "../src/components/Document";
import ChatBox from "../src/components/Chatbox";

const Dashboard = () => {
  return (
    <div className="app">
      <div className="app-card">
        <header className="app-header">
          <h1>📄 AI Document Q&A</h1>
          <p>Ask questions only from your uploaded files</p>
        </header>

        <UploadDocument />
        <ChatBox />
      </div>
    </div>
  );
};


export default Dashboard;
