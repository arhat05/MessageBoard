
import React from 'react';

const MessageList = ({ messages }) => (
  <div>
    {messages.map((message, index) => (
      <div key={index} className="message-card">
        <div className="message-content">
          <p>{message.text}</p>
        </div>
        <div className="timestamp">
          {message.timestamp.toLocaleString()}
        </div>
      </div>
    ))}
  </div>
);

export default MessageList;
