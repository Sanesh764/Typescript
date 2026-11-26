import { useEffect, useState } from 'react';
import './App.css';
import { io } from 'socket.io-client';
const socket=io("http://localhost:3000");
function App() {
  const [message, setMessage] = useState("");
  const [chatList, setChatList] = useState([]);
  useEffect(()=>{
    socket.on("receive_message", (data) => {
      setChatList((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  },[]);

  const sendMessage = () => {
    if (message.trim() !== "") {
      // Server ko message bhejna
      socket.emit("send_message", { text: message, id: socket.id });
      setMessage("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Socket.IO Chat</h1>

      {/* Messages dikhane ke liye */}
      <div style={{ border: "1px solid #ccc", padding: "10px", height: "200px", overflowY: "auto", marginBottom: "10px" }}>
        {chatList.map((msg, index) => (
          <p key={index}>
            <strong>{msg.id === socket.id ? "You" : "Other"}:</strong> {msg.text}
          </p>
        ))}
      </div>

      {/* Message type aur send karne ke liye */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
