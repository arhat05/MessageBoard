import React, { useState, useEffect } from 'react';

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:5000/msgs/");
        const data = await response.json();
        setMessages(data.reverse()); // Reverse the order of messages
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [messages]); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index} className="message-card">
          <div className="message-content">
            <p>{message.text}</p>
          </div>
          <div className="timestamp">
            {new Date(message.timestamp).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
