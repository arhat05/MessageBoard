import React, { useState } from 'react';
import MessageForm from './components/MessageForm';
import MessageList from './components/Messages';
import './styles/App.css';

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleAddMessage = (message) => {
    setMessages([message, ...messages]);
  };

  return (
    <div>
      <div className="message-form">
        <h1>Message Board</h1>
        <MessageForm onMessageSubmit={handleAddMessage} />
      </div>
      <div className="container">
        <MessageList messages={messages} />
      </div>
    </div>
  );
};

export default App;
