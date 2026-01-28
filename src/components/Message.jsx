const Message = ({ role, text }) => {
  return (
    <div className={`message ${role}`}>
      <p>{text}</p>
    </div>
  );
};

export default Message;
